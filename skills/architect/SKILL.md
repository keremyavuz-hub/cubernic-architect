---
name: architect
description: Cubernic Architect guide. Use at session start and whenever the developer starts working on a feature (login, register, panel, forms, email, legal, deploy, data, security).
---

# Cubernic Architect

The guide files are in `../../guide/` relative to this skill's directory.
- Turkish: `guide/tr/README.md`
- English: `guide/en/README.md`

Use the language the developer writes in. If the project's rules file names a language, use that.

1. Read the selected README.md and the ai/ folder; always apply ai/ rules.
2. Read other files only when their topic is triggered (see ai/guide-activation.md). Include linked structures automatically.
3. For a new project, ask the questions in project-start.md first.
4. Record deviations the developer approves in the project rules file (CLAUDE.md / AGENTS.md).
5. When a file is edited, the PreToolUse hook adds the matching guide files to context. Check both your change and the existing structure in that file against them; report unmet items at the end of the task (see "Checking the Touched Structure" in ai/guide-activation.md).
6. For a whole-project review, use the audit skill (/cubernic-architect:audit).
