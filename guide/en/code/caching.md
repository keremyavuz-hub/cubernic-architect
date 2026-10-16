# Caching Strategy
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Common To Do
- For every piece of data to be cached, where (browser, CDN, server memory, Redis, database), for how long and how it will be invalidated must be decided.
- Caching is a performance tool; showing wrong data is worse than showing slow data, and a cache without an invalidation rule must not be added.
- User- or company-specific data must not be put in a shared cache (CDN, shared server cache); otherwise one user's data may become visible to another.
- Responses that require a session must use Cache-Control: private or no-store.
- Static files that never change (with a hash in their name) must be cached for a long time and as immutable.
- When data changes, the related cache keys must be cleared immediately (e.g., Next.js revalidateTag / revalidatePath).
- Cache keys must include distinguishing information such as company / user / language.
- Measures must be taken so that many simultaneous requests do not overload the database when the cache is empty (single-request refresh, stale-while-revalidate).
- The cache hit rate must be measured; a cache that does not help must be removed.
- Query and index improvements must be tried first; caching must not be used to hide a slow query.
