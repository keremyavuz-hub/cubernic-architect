# Rate Limits and Rapid Submissions
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- Forms must not be submittable multiple times within 1 second, and this must be checked on the backend.
- A limit must be set for every public and costly operation (login, registration, reset, verifications that send requests to external sites).
- Counting and recording must be done in the same database transaction, under a lock for the same key (IP, email).
- It must be tested that parallel requests arriving in the same second cannot exceed the limit.
- The lock must be non-waiting; a request that cannot acquire the lock must be rejected immediately; waiting locks must not clog database connections.
- When acquiring multiple locks, keys must be sorted.
- For single-row cases, an atomic conditional update must be used (e.g. update if the last check is older than 10 seconds, otherwise reject).
- Limit counts must be taken only from the append-only activity log, not from records that can be deleted.
- For consecutive submissions, a cooldown period must be used together with hourly and daily caps.
- Caps must not be set too low, considering users sharing an IP (office, mobile operator).
- Limit checks must be done before expensive operations.
- General request floods must be cut at the edge layer (e.g. Cloudflare Rate Limiting), not in the application.
