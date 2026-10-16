# Cubernic Architect

Project-independent architecture guide for AI-assisted development. Available in Turkish (`guide/tr`) and English (`guide/en`).

Yapay zeka destekli geliştirme için projeden bağımsız mimari kılavuz. Türkçe (`guide/tr`) ve İngilizce (`guide/en`).

Covers / Kapsam: AI working rules, auth, legal (drafts), forms, email, security, database, queues, operations, UI, frameworks (Next.js, Laravel, ASP.NET Core, Node, Django) and mobile (React Native / Expo, Flutter, iOS, Android).

## Install / Kurulum

### Claude Code (recommended / önerilen)

```
/plugin marketplace add keremyavuz-hub/cubernic-architect
/plugin install cubernic-architect@cubernic
```

Restart Claude Code. The guide loads every session. / Claude Code'u yeniden başlatın; kılavuz her oturumda yüklenir.

Team projects: add to `.claude/settings.json` so everyone who opens the project is offered the plugin / Ekip projeleri için `.claude/settings.json` dosyasına ekleyin:

```json
{
  "extraKnownMarketplaces": {
    "cubernic": { "source": { "source": "github", "repo": "keremyavuz-hub/cubernic-architect" } }
  },
  "enabledPlugins": { "cubernic-architect@cubernic": true }
}
```

Update / Güncelleme: `/plugin marketplace update cubernic`

### claude.ai

Download `cubernic-architect-en.zip` or `cubernic-architect-tr.zip` from [Releases](../../releases) and upload it in Settings → Capabilities → Skills. Or add the `guide/en` (or `guide/tr`) files to a Project's knowledge.

[Releases](../../releases) sayfasından zip dosyasını indirip Ayarlar → Capabilities → Skills bölümünden yükleyin. Ya da `guide/tr` dosyalarını bir Project'in bilgi alanına ekleyin.

### Cursor, Codex, Gemini CLI and other tools / diğer araçlar

```
npx degit keremyavuz-hub/cubernic-architect/guide/en cubernic-architect
npx degit keremyavuz-hub/cubernic-architect/guide/tr cubernic-architect
```

Then add to your `AGENTS.md` (or tool rules file): "Read and apply cubernic-architect/README.md." / Ardından `AGENTS.md` dosyanıza ekleyin: "cubernic-architect/README.md dosyasını oku ve uygula."

## How it works / Nasıl çalışır

- AI rules (`ai/`) always apply. / `ai/` kuralları her zaman uygulanır.
- Other topics activate only when you start working on them; linked structures come along (e.g. register → verification email, password reset). / Diğer konular yalnız o yapıya başlandığında devreye girer; bağlı yapılar birlikte gelir.
- New projects start with `project-start.md` questions. / Yeni projeler `project-start.md` sorularıyla başlar.

## Disclaimer / Uyarı

Legal sections are drafts and not legal advice. Framework notes may lag behind new releases; always check official documentation.

Hukuk bölümleri taslaktır, hukuki danışmanlık değildir. Framework notları yeni sürümlerin gerisinde kalabilir; resmi belgeleri kontrol edin.

## License

[MIT](LICENSE). Changes: [CHANGELOG.md](CHANGELOG.md)
