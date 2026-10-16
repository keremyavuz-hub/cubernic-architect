# API Design and Webhooks
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## API Design
- If the API will be exposed externally, it must be versioned (e.g., /api/v1/); backward-incompatible changes must be made in a new version.
- Endpoint names and response structure must follow a single convention; the convention must be written in the project documentation.
- Error responses must use a single format (e.g., code, message, field errors); internal error details must not be exposed (see code/error-handling.md).
- Correct HTTP status codes must be used (400, 401, 403, 404, 409, 422, 429, 500).
- List endpoints must always be paginated; page size must be protected with an upper limit.
- Input must be validated with a schema at every endpoint; unexpected fields must be rejected.
- API documentation (e.g., OpenAPI) should be kept up to date together with the code. (Recommended)
- Endpoints to be deprecated must be announced in advance and must keep working for a defined period.

## API Keys
- API keys given to customers must be shown only once and stored hashed in the database.
- Keys must be scoped (read-only, specific resource only) and revocable.
- The last usage time and request count of each key must be recorded.
- Rate limiting must be applied per key (see security/rate-limit.md).
- Keys must carry a recognizable prefix (e.g., mp_live_...) so they can be found in leak scans.

## Outgoing Webhooks
- Sent webhooks must be signed with a secret key (HMAC) and must include a timestamp.
- Failed deliveries should be retried with increasing backoff; delivery history should be shown to the customer. (Recommended)
- Webhook target addresses must be checked with SSRF protections (see security/ssrf.md).

## Incoming Webhooks
- The signature of incoming webhooks must be verified, and they must be rejected if the timestamp is stale.
- Webhooks must be accepted quickly (200) and processed in a queue.
- The same event may arrive more than once; duplicates must be skipped (see code/idempotency.md).

## If There Are Mobile Clients
- Since old app versions stay in use for a long time, API changes must be backward compatible; removing fields and changing meaning must be done in a new API version.
- The client version and platform must be received with every request, and clients older than the minimum supported version must receive a forced update response (see stack/mobile/general.md).
- Which app versions use which API version must be monitored; an old version must be shut down only once its usage has ended.
