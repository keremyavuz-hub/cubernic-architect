# Postgres Settings
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- In local development, the database must run with Docker Compose on a separate port (e.g. 5433).
- Schema changes must be made with numbered migration files, each applied in a single transaction and only once.
- Applied migration files must not be modified; fixes must be made with a new migration.
- The connection pool must be kept limited (e.g. 5).
- Long-running operations must not block the connection pool.
- Indexes must be added for queries used in limit counts.
- Regular backups must be taken and restore must be tested.
