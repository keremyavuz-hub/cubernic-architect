# AI Authority for Deletion and Irreversible Operations
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Scope
- This file covers only deletions and irreversible operations the AI could perform on its own.
- Deletions initiated by a user or administrator in the panel through a confirmation dialog are a normal application feature and are outside the scope of this file.
- Scheduled maintenance tasks of the written application are normal application behavior as long as they are approved by the developer and written into the project rules.

## Absolute Prohibitions
- The AI must never delete a database (DROP DATABASE, deleting database files, removing the database service).
- The AI must never drop or empty tables (DROP TABLE, TRUNCATE, unconditional DELETE).
- The AI must not delete any record without the developer's explicit approval; this includes the local development database.
- The AI must not write to or delete from the live (production) database, even with approval, unless the developer runs the operation themselves.
- The AI must not delete Docker database volumes, backup files, upload folders or storage buckets.
- The AI must not run commands that destroy git history (git reset --hard, git push --force, git clean -fdx, branch deletion) without approval.
- The AI must not revert or overwrite changes made by the developer that have not yet been committed.
- The AI must not delete servers, DNS records, domains, API keys, user accounts or cloud resources.
- The AI must not suggest bulk deletion to "clean", "reset" or "start over" data; if needed, it should present it to the developer as an option.

## Deletions Allowed With Approval
- When the developer explicitly requests deletion, the AI must first read and list the records to be deleted and show them to the developer.
- The delete command must target only the listed records and must use exact IDs; broad conditions (LIKE, date ranges) must not be used.
- Record counts must be reported before and after deletion.
- Approval is valid only for the requested operation; a deletion approval must not be treated as approval for other records or later deletions.
- If soft delete, archiving or status change (deactivation) is possible instead of deletion, these options must be suggested first.
- For important data, taking a backup or export before deletion should be suggested.

## Test Data
- If the AI creates data for testing, this data must carry an easily distinguishable marker (e.g., emails with the @e2e-test.com domain, IDs with a test- prefix).
- Post-test cleanup must delete only the records the AI created in that test run and whose IDs it recorded.
- Test cleanup must never touch real user records or records created manually by the developer.
- Records in append-only tables such as the audit log must not be deleted during test cleanup; instead, tests should be run in a separate test database. (Recommended)
- If possible, tests should be run in a separate test database or inside a transaction that is rolled back after each test.
- What test cleanup deleted must be reported in the test output.

## Schema Changes (Migration)
- Before writing schema changes that may cause data loss (dropping a column, dropping a table, narrowing a column type, adding NOT NULL, renaming), what will be lost must be explained to the developer and approval must be obtained.
- Destructive changes should be done in two steps where possible: first the new structure must be added and data migrated, then the old structure must be removed with a separate, approved migration.
- Applied migration files must not be modified or deleted.
- Before running a migration in production, taking a backup must be reminded.
- The migration's rollback path must be considered and documented.

## Developing Deletion Features in Code
- Before adding code that deletes to the application (delete button, bulk delete, automatic cleanup task, cascade relation), the AI must get approval from the developer.
- When asking for approval, it must explain what will be deleted, by whom and under what condition; whether it will be permanent or soft; and what will happen to related data.
- Deletions performed by users or administrators in the panel must have a confirmation dialog, authorization check, company / user isolation and an audit log.
- Permanent delete operations must use an additional lock (e.g., typing the name to be deleted, re-entering the password, a waiting period).
- For bulk delete operations, the number of records to be deleted must be shown before approval.
- Automatic deletion tasks must be added as a written exception to the project rules, and a dry run must be done before the first run.
- When adding ON DELETE CASCADE relations to the database, which data will be deleted in cascade must be shown to the developer.

## Adding to Project Rules
- The absolute prohibitions in this file must be added to each project's AI rules file (e.g., CLAUDE.md, AGENTS.md, .cursorrules).
- In the AI tool's permission settings, destructive commands (DROP, TRUNCATE, rm -rf, docker volume rm, git push --force) should be configured to require approval. (Recommended)
- The AI should not have access to live database connection details; only local or test database details should be given. (Recommended)
- The database user the AI uses should, if possible, be a restricted user without DROP and TRUNCATE permissions. (Recommended)
