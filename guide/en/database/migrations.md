# Database Migrations
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Common To Do
- Schema changes must be made only through migration files; no manual changes must be made in the database.
- Migration files must be named with a sequential number or date and kept in git.
- An applied migration file must not be modified; fixes must be made with a new migration.
- Which migrations have been applied must be tracked in a table in the database.
- Migrations must be run first locally and in the test environment, then applied to production.
- Data-losing changes (dropping columns / tables, narrowing types) must not be written or run without the developer's approval (see ai/destructive-actions.md).
- A backup must be taken before applying a data-losing migration to production (see database/backup.md).
- For zero-downtime transitions, changes must be made in stages: add the new column, release code that works with both columns, migrate the data, remove the old column in a later release.
- Lock-creating operations on large tables must be avoided (e.g., CREATE INDEX CONCURRENTLY in Postgres, adding columns with default values carefully).
- Large data migrations must be done in batches, not all at once.
- A rollback path must be considered; irreversible migrations must be marked in the documentation.
- Seed data must be kept separate from migrations; test data must not be created in production.
