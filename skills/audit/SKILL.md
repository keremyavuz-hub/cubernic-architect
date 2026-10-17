---
name: audit
description: Cubernic Architect compliance audit. Use only when the developer asks to review / audit the whole project (or a folder) against the guide. Scans the project, maps each file to its guide files, and checks every item.
---

# Cubernic Architect — Uyum Denetimi / Compliance Audit

Use the language the developer writes in (guide/tr or guide/en).

1. Map: run `node "<this skill dir>/../../hooks/guide-match.mjs" --scan <project dir or the folder given>`. The output lists each triggered guide file with the project files that belong to it. Nothing is changed.
2. Linked structures: for each structure found, also take its linked structures from `ai/guide-activation.md` (Bağlı Yapılar / Dependent Structures). A linked structure that is missing (e.g. panel without error pages) is a finding too.
3. Check: read each triggered guide file and go through EVERY item. For each item open the mapped project files and decide: met / missing / partial / not applicable. Do not skip a guide file because it looks fine; a table without sorting or pagination is exactly what this step must catch.
4. Skip items recorded as deviations in the project rules file (CLAUDE.md / AGENTS.md); list them separately as "sapma".
5. Report grouped by structure, most severe first (security → data → behaviour → UI). One line per item: guide file, item, project file:line, status. Security gaps always first.
6. Do not modify code. Fixes are made only for items the developer approves; deliberate rejections are written into the rules file as deviations.

This audit is the explicit exception to the "Proportion" rule in ai/guide-activation.md: here the full report is the task.
