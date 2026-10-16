# Idempotency and Concurrency
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Common To Do
- Operations that create records, take payments or send email must not produce two results when run twice.
- The button must be locked during form submission; however, the real protection must be on the server side (see forms/buttons-loading.md).
- An idempotency key should be used for critical requests; a second request with the same key should return the first result. (Recommended)
- Uniqueness must be protected with database constraints; a "check first, then insert" approach alone is not enough.
- Where multiple people can edit the same record, optimistic locking (version or updated_at check) must be used; the user must be notified of the conflict instead of overwriting.
- Counter and limit checks must be atomic against race conditions (update in a single query or lock) (see security/rate-limit.md).
- Interdependent write operations must be done within a single transaction.
- External service calls (email, API) must not be made inside a transaction; they must be made after the transaction completes or via a queue (outbox approach).
- Incoming webhooks may arrive more than once; the event ID must be stored and repeated events must be skipped.
