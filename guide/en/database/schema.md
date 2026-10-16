# Database Design
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Common To Do
- Table and column names must follow a single convention (e.g., snake_case, plural tables: users, company_users); the convention must be written in the project document.
- Every table must have a primary key; unguessable values (UUID / ULID) must be used for externally exposed identifiers.
- Every table must have created_at and, where needed, updated_at columns; times must be stored time zone aware (timestamptz) and in UTC.
- Relationships must be protected with foreign keys; the delete behavior (RESTRICT, CASCADE, SET NULL) must be chosen deliberately.
- Data integrity must be protected with database constraints: NOT NULL, UNIQUE, CHECK; application code alone must not be relied upon.
- Status fields must not be free text but a limited set of values (CHECK or enum).
- Money amounts must not be stored as floating point numbers but as numeric / decimal or as an integer in the smallest unit (kuruş / cents).
- Indexes must be added to columns that are filtered, sorted and joined; unnecessary indexes must not be added since they reduce write performance.
- Slow queries must be examined with EXPLAIN; the N+1 query problem must be prevented (see ai/performance.md).
- Queries must always be parameterized; user input must not be inserted into the query text.
- The application must connect to the database not as a superuser but only as a user with the necessary privileges.
- A connection pool must be used, and the number of connections limited according to server capacity.
- Where needed, a deleted marker (deleted_at) should be used instead of permanent deletion; records must be permanently deleted when the retention period ends (see legal/data-retention.md). (Recommended)
- A change history must be kept for important records (who changed what, and when) (see operations/audit-log.md).

## If Company / Customer Based Panel
- Every table belonging to a company must have a company ID column, and queries must be filtered by this column (see security/data-isolation.md).
- Uniqueness rules involving the company ID must be defined per company (e.g., UNIQUE (company_id, slug)).
- Row level security (Postgres RLS) should be evaluated as an additional protection layer. (Optional)
