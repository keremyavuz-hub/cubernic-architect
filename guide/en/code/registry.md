# Library and Structure Registry
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## General Rules
- Every library, external service and significant structure (architectural decision, pattern, module) used in the project must be documented in registry files in the project directory.
- Records must be written in plain language the developer can understand; technical terms must be briefly explained.
- When a library or structure is added, removed or changed, the registry must be updated in the same commit.
- Registries must be reachable via a link from the system document (docs/SISTEM.md).

## Library Registry
- A registry file must be kept for libraries (e.g., docs/KUTUPHANELER.md).
- For each library the following must be written: name and version, what it does (one sentence), why it was chosen, why a built-in alternative was not enough, alternatives considered, license, approximate size, where it is used in the project (files / adapter module), whether it is paid, what happens if it is removed, date added.
- Development dependencies (test, build tools) must be listed under a separate heading.
- Example record format:
```
## postgres (3.x)
- What it does : Connects to the Postgres database and runs queries.
- Why          : Small, dependency-free, makes writing parameterized queries safely easy.
- Alternatives : pg (more common, more verbose), Prisma (ORM, heavy).
- License      : Unlicense
- Used in      : lib/sql.js (all access goes through this file)
- Cost         : Free
- If removed   : All database access must be rewritten in lib/sql.js.
- Added        : 2026-10-01
```

## External Service Registry
- External services used (email, storage, bot protection, AI, payment) must be listed in a separate section or file.
- For each service the following must be written: what it is used for, which account it was opened with, environment variables, plan and cost, limits, where the data goes (cross-border transfer), dashboard link, impact on the application if the service goes down.

## Structure and Architectural Decisions
- Short decision records must be kept for important architectural decisions (e.g., docs/KARARLAR.md or docs/adr/0001-veritabani-secimi.md).
- Each decision record must include: date, context (what the problem was), decision, options considered, consequences (pros / cons), status (active / superseded).
- The project's main modules and their responsibilities must be listed in an architecture map (e.g., lib/auth.js: session and login; lib/mail.js: email sending and templates).
- Centrally kept structures (settings, rules, themes, language files, adapters) must be indicated in the architecture map with their location.
- When a decision changes, the old record must not be deleted; it must be marked "superseded" and linked to the new record.
