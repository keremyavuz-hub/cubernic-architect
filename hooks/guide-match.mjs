#!/usr/bin/env node
// Dosya → kılavuz eşlemesi. İki kullanım:
//   1) PreToolUse hook'u (stdin'den JSON): düzenlenen dosyaya ait kılavuz dosyalarını bağlama ekler.
//      Bir kılavuz dosyasının tam metni oturumda bir kez eklenir; sonraki dokunuşlarda kısa hatırlatma verilir.
//   2) node guide-match.mjs --scan [dizin] [--lang tr|en]: projedeki dosyaları tarar, kılavuz dosyası → proje dosyaları listesi yazar
//      (/cubernic-architect:audit kullanır).
import { readFileSync, existsSync, writeFileSync, readdirSync, statSync, mkdirSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT_LIMIT = 24000; // bir hook çıktısında eklenecek en fazla kılavuz metni (karakter)

// [yol deseni, içerik deseni, kılavuz dosyaları]. Yol veya içerik eşleşirse kural tetiklenir (null = bakılmaz).
const RULES = [
  [/table/i, /<table\b|<Table\b|<TableHead\b|DataTable|useReactTable/, ['ui/data-tables.md']],
  [/(^|\/)(login|signin|giris|auth)([./_-]|$)/i, null, ['auth/login.md', 'auth/session.md', 'security/rate-limit.md']],
  [/(register|signup|sign-up|kayit|basvuru)/i, null, ['auth/register.md', 'auth/email-verification.md', 'security/bot-protection.md']],
  [/(password|parola|sifre|reset)/i, null, ['auth/password-reset.md']],
  [/(2fa|two-?factor|totp|iki-adim|mfa)/i, null, ['auth/two-factor.md']],
  [/(session|oturum)/i, /cookies\(\)|setCookie|set-cookie/i, ['auth/session.md']],
  [/(role|permission|yetki|admin|yonetim)/i, null, ['auth/roles-permissions.md']],
  [/(invite|davet)/i, null, ['auth/approval-invite.md']],
  [/(account-?clos|delete-?account|hesap-?(sil|kapat))/i, null, ['auth/account-closure.md']],
  [/(^|\/)(forms?|.*-form)\.[jt]sx?$|actions?\.[jt]s$/i, /<form\b|useActionState|useFormStatus|formData\.get/, ['forms/forms.md', 'forms/validations.md', 'forms/buttons-loading.md', 'security/csrf.md']],
  [/(mail|email|eposta)/i, /sendMail|resend\.|nodemailer/i, ['emails/sending.md', 'emails/templates.md']],
  [/(^|\/)migrations?\/|\.sql$|schema\.(prisma|[jt]s)$/i, null, ['database/migrations.md', 'database/schema.md']],
  [/upload|yukle/i, /type=["']file["']|multipart\/form-data/, ['files/uploads.md']],
  [/(import|export|csv|xlsx|feed)/i, null, ['data/import-export.md']],
  [/(^|\/)(error|global-error|not-found)\.[jt]sx?$/, null, ['code/error-handling.md']],
  [/(^|\/)\.env/, null, ['setup/environment.md', 'setup/env-catalog.md', 'security/secrets.md']],
  [/(Dockerfile|docker-compose|Caddyfile|nginx|\.github\/workflows|deploy)/i, null, ['operations/deployment.md']],
  [/(^|\/)(middleware|proxy)\.[jt]s$|next\.config\./, null, ['security/headers.md', 'security/csrf.md']],
  [/(terms|privacy|kvkk|cookie-?policy|sozlesme|gizlilik|cerez|aydinlatma|legal)/i, null, ['legal/legal-pages.md', 'legal/consents.md', 'legal/consent-records.md']],
  [/(^|\/)(package\.json|composer\.json|pyproject\.toml|pubspec\.yaml|[^/]+\.csproj)$/, null, ['stack/framework-rules.md', 'code/dependencies.md']],
  [null, /\bfetch\(|axios\.|got\(/, ['code/external-requests.md']],
  [/(webhook|domain-verify|crawl|scrape|proxy-fetch)/i, null, ['security/ssrf.md']],
  [/(jobs?|cron|queue|worker|bakim|maintenance)/i, null, ['operations/jobs.md']],
  [/(^|\/)api\/|(^|\/)route\.[jt]s$/, null, ['code/api-design.md', 'security/rate-limit.md']],
  [/(\(panel\)|dashboard|panel)/i, null, ['security/data-isolation.md', 'ui/responsive.md']],
  [/audit/i, /\baudit\(/, ['operations/audit-log.md']],
  [/(cache|redis)/i, /unstable_cache|revalidate(Path|Tag)/, ['code/caching.md']],
  [/(i18n|locale|lang)/i, null, ['code/i18n.md']],
];

const SKIP_DIRS = new Set(['.git', 'node_modules', '.next', 'dist', 'build', 'out', 'vendor', 'coverage', '.turbo', '.vercel', 'cubernic-architect']);
const CODE_EXT = /\.(m?[jt]sx?|vue|svelte|php|py|cs|dart|sql|prisma|json|toml|ya?ml|html)$|(^|\/)(Dockerfile|Caddyfile)$|(^|\/)\.env/;

function detectLang(cwd) {
  for (const f of ['CLAUDE.md', 'AGENTS.md']) {
    const p = join(cwd, f);
    if (existsSync(p)) return /[ğışĞİŞ]/.test(readFileSync(p, 'utf8')) ? 'tr' : 'en';
  }
  return 'tr';
}

function match(relPath, content, lang) {
  const out = new Set();
  for (const [pathRe, contentRe, files] of RULES) {
    const hit = (pathRe && pathRe.test(relPath)) || (contentRe && content && contentRe.test(content));
    if (hit) for (const f of files) if (existsSync(join(ROOT, 'guide', lang, f))) out.add(f);
  }
  return [...out];
}

// --- Tarama modu (audit) ---
function walk(dir, base, acc) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const p = join(dir, name);
    let st;
    try { st = statSync(p); } catch { continue; }
    if (st.isDirectory()) walk(p, base, acc);
    else if (CODE_EXT.test(relative(base, p)) && st.size < 400_000) acc.push(p);
  }
  return acc;
}

// Git deposundaysa .gitignore'a uyan dosya listesi; değilse klasör taranır
function projectFiles(dir) {
  try {
    const out = execFileSync('git', ['ls-files', '-co', '--exclude-standard'], { cwd: dir, encoding: 'utf8', maxBuffer: 64 << 20 });
    return out.split('\n').filter((f) => f && CODE_EXT.test(f) && !f.split('/').some((s) => SKIP_DIRS.has(s))).map((f) => join(dir, f))
      .filter((p) => { try { return statSync(p).size < 400_000; } catch { return false; } });
  } catch {
    return walk(dir, dir, []);
  }
}

function scan(dir, lang) {
  const map = new Map();
  for (const p of projectFiles(dir)) {
    const rel = relative(dir, p);
    // .env içeriği okunmaz (gizli bilgi kuralı); yalnız yol eşlenir
    const content = /(^|\/)\.env/.test(rel) ? '' : readFileSync(p, 'utf8');
    for (const g of match(rel, content, lang)) {
      if (!map.has(g)) map.set(g, []);
      map.get(g).push(rel);
    }
  }
  const lines = [...map.entries()].sort(([a], [b]) => a.localeCompare(b))
    .map(([g, files]) => `${join(ROOT, 'guide', lang, g)}\n    ${files.slice(0, 8).join(', ')}${files.length > 8 ? ` (+${files.length - 8})` : ''}`);
  console.log(lines.join('\n') || 'Eşleşen yapı bulunamadı.');
}

// --- Hook modu ---
function hook(raw) {
  let input;
  try { input = JSON.parse(raw); } catch { return; }
  const ti = input.tool_input || {};
  const file = ti.file_path || ti.notebook_path;
  if (!file) return;
  const cwd = input.cwd || process.cwd();
  const rel = relative(cwd, file);
  if (rel.startsWith('..') || /cubernic-architect\//.test(rel) || /(^|\/)(CLAUDE|AGENTS)\.md$|\.md$/.test(rel)) return;
  const lang = detectLang(cwd);
  const content = [ti.content, ti.new_string, ...(ti.edits || []).map((e) => e.new_string)].filter(Boolean).join('\n');
  let existing = '';
  if (!/(^|\/)\.env/.test(rel) && existsSync(file)) { try { existing = readFileSync(file, 'utf8').slice(0, 200_000); } catch {} }
  const guides = match(rel, content + '\n' + existing, lang);
  if (!guides.length) return;

  // Oturum başına: tam metni eklenen kılavuz dosyaları
  const stateDir = join(tmpdir(), 'cubernic-architect');
  mkdirSync(stateDir, { recursive: true });
  const stateFile = join(stateDir, `${String(input.session_id || 'x').replace(/[^\w-]/g, '')}.json`);
  let seen = [];
  try { seen = JSON.parse(readFileSync(stateFile, 'utf8')); } catch {}

  const fresh = guides.filter((g) => !seen.includes(g));
  let budget = CONTENT_LIMIT;
  const bodies = [];
  for (const g of fresh) {
    const text = readFileSync(join(ROOT, 'guide', lang, g), 'utf8');
    if (text.length > budget) break;
    budget -= text.length;
    bodies.push(`<guide file="${g}">\n${text}\n</guide>`);
    seen.push(g);
  }
  writeFileSync(stateFile, JSON.stringify(seen));

  const head = lang === 'tr'
    ? `Cubernic Architect: ${rel} şu kılavuz dosyalarına giriyor: ${guides.join(', ')}.\n` +
      'Bu değişikliği VE dosyadaki mevcut yapıyı bu dosyaların maddeleriyle karşılaştır. Yazdığın kod maddelere uymalı. ' +
      'Mevcut kodda karşılanmayan maddeleri (ör. tabloda sıralama / sayfalama yok) işin sonunda geliştiriciye kısa liste olarak bildir; ' +
      'kural dosyasında (CLAUDE.md / AGENTS.md) sapma olarak yazılı olanları atla. Mevcut kodu düzeltmeyi onaysız yapma.'
    : `Cubernic Architect: ${rel} falls under these guide files: ${guides.join(', ')}.\n` +
      'Check this change AND the existing structure in the file against their items. Code you write must comply. ' +
      'At the end of the task, report items the existing code does not meet as a short list; skip deviations recorded in the rules file (CLAUDE.md / AGENTS.md). Do not fix existing code without approval.';
  const rest = guides.filter((g) => !fresh.slice(0, bodies.length).includes(g));
  const note = rest.length
    ? (lang === 'tr' ? `\nDaha önce eklenenler / sığmayanlar (gerekiyorsa oku): ${rest.map((g) => join(ROOT, 'guide', lang, g)).join(', ')}` : `\nAlready added / did not fit (read if needed): ${rest.map((g) => join(ROOT, 'guide', lang, g)).join(', ')}`)
    : '';

  process.stdout.write(JSON.stringify({
    hookSpecificOutput: { hookEventName: 'PreToolUse', additionalContext: [head + note, ...bodies].join('\n\n') },
  }));
}

const args = process.argv.slice(2);
if (args[0] === '--scan') {
  const li = args.indexOf('--lang');
  const dir = args[1] && !args[1].startsWith('--') ? args[1] : process.cwd();
  scan(dir, li > -1 ? args[li + 1] : detectLang(dir));
} else {
  let raw = '';
  process.stdin.on('data', (c) => (raw += c));
  process.stdin.on('end', () => { try { hook(raw); } catch (e) { process.stderr.write(`[cubernic-architect] ${e.message}\n`); } });
}
