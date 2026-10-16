#!/usr/bin/env bash
# claude.ai'ye yüklenecek skill zip'lerini üretir: dist/cubernic-architect-tr.zip, dist/cubernic-architect-en.zip
set -euo pipefail
cd "$(dirname "$0")/.."
rm -rf dist && mkdir -p dist
for lang in tr en; do
  name="cubernic-architect-$lang"
  work="dist/$name"
  mkdir -p "$work"
  cp -R "guide/$lang/." "$work/guide/"
  if [ "$lang" = tr ]; then
    desc="Cubernic Architect mimari kılavuzu (Türkçe). Yazılım projesinde giriş, kayıt, panel, form, e-posta, hukuk, güvenlik, veri, deploy, framework veya mobil konularında çalışırken kullan."
    body="Kılavuz dosyaları bu skill içindeki guide/ klasöründedir. Önce guide/README.md ve guide/ai/ klasörünü oku; ai/ kurallarını her zaman uygula. Diğer dosyaları yalnız konusu tetiklendiğinde oku (guide/ai/guide-activation.md). Bağlı yapıları otomatik kapsama al. Yeni projede önce guide/project-start.md sorularını sor."
  else
    desc="Cubernic Architect architecture guide (English). Use when working on login, register, panel, forms, email, legal, security, data, deploy, framework or mobile topics in a software project."
    body="The guide files are in the guide/ folder of this skill. First read guide/README.md and the guide/ai/ folder; always apply ai/ rules. Read other files only when their topic is triggered (guide/ai/guide-activation.md). Include linked structures automatically. For a new project, ask the questions in guide/project-start.md first."
  fi
  printf -- "---\nname: %s\ndescription: %s\n---\n\n# Cubernic Architect\n\n%s\n" "$name" "$desc" "$body" > "$work/SKILL.md"
  (cd dist && zip -qr "$name.zip" "$name")
  rm -rf "$work"
done
ls -1 dist
