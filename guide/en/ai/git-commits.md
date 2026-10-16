# AI and Git / Commit Practices
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## General Rules
- The AI must commit at the end of every meaningful task; it must not push unless the developer says otherwise.
- The commit message must describe what was done and, when needed, why, and must follow the project's commit language and format.
- Each commit must contain a single topic; unrelated changes must not be put into the same commit.
- Tests and build must pass before committing; if they do not, this must be stated in the commit message and the report.
- Files containing secret values (.env, key files, backups, database dumps) must not be added to commits; added files must be checked before committing.
- The developer's uncommitted changes must not be mixed into the AI's commit without notice.

## Branches and History
- For large and risky work, opening a separate branch instead of working on the main branch (main / master) should be suggested.
- Operations that rewrite history (rebase, amend, reset, force push) must not be done without the developer's approval.
- If a faulty commit needs to be undone, a revert commit (git revert) should be preferred over deleting history.
- Merge conflicts must be resolved without losing the developer's changes; when unsure, the AI must ask.

## Together With Documents
- Along with a feature change, the system document and work log must be updated in the same commit.
- When the database schema changes, the migration file must be in the same commit.
- When a new environment variable is added, .env.example must be updated in the same commit.
