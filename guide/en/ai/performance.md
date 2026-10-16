# AI and Performance
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## General Attitude
- The AI must treat performance as a default quality criterion in every development and think about it on its own, not only when asked.
- If the AI sees a performance problem in code it writes or reviews, it must report it to the developer and make small, safe fixes as part of the work.
- Large structural performance changes (cache layer, queue, database change, rewrite) must not be made without approval; they must be presented as suggestions with justification and cost.
- Performance suggestions must be based on measurement; instead of "it will be faster", the measured value or expected impact must be written (e.g., query count drops from 50 to 1).
- Premature optimization done without measurement must not be done if it complicates the code; the balance between readability and speed must be explained to the developer.
- Every performance suggestion must state its pros, cons, cost (money, complexity, maintenance) and when it will become necessary (e.g., after 10 thousand users).
- Performance improvements made must be written into the system document and work log.

## Database
- Whether indexes exist for frequently queried and filtered fields must be checked.
- Queries inside loops (N+1) must not be made; related data must be fetched in a single query or in bulk.
- List queries must always use pagination and an upper limit.
- Only the needed columns must be selected; select * must be avoided.
- Count and check queries must not scan large tables from start to end; they must be limited by time range and index.
- Slow queries must be examined with EXPLAIN ANALYZE.
- The connection pool must be kept limited; long-running transactions must not clog the pool.
- Cheap checks (rate limit, format validation) must be done before expensive operations (DNS, external API, password hashing).

## Server and API
- Independent operations must run in parallel, not sequentially.
- Tasks that do not need to keep the user waiting (email, notification, report) must not delay the response; they must be done in the background or in a queue.
- Caching should be suggested for frequently read and rarely changing data, and when the cache is invalidated must be defined.
- Timeouts must be set on external service calls; a slow service must not make the whole application wait.
- Large responses must be compressed and response size must be limited.

## Frontend
- Page size and JavaScript bundle size must be monitored; unnecessarily large libraries must not be added.
- Heavy components (charts, maps, 3D, editors) must be loaded only when needed (dynamic import / lazy loading).
- Content that can be processed on the server must not be moved to the client (e.g., server components should be preferred in Next.js).
- Images must be resized to the size they will be used at, served in modern formats (webp, avif), and off-screen ones must be lazy loaded.
- Fonts must be subset and served locally.
- Core Web Vitals values (LCP, INP, CLS) must be measured and target values must be set.
- In animations, frame rate must be limited, invisible elements must not be drawn, and resources (WebGL context, timers, event listeners) must be released when the component unmounts.
- Pages that stay open for a long time must be tested for memory leaks.

## Infrastructure and Cost
- Static files must be served through a CDN with long-term caching.
- Server resource usage (CPU, memory, disk, connection count) must be monitored, and alerts must be given before a bottleneck forms.
- When scaling is needed, the efficiency of the existing code must be improved first; a bigger server must be suggested as a last resort.
- The AI must anticipate the cost that will arise from increased usage of paid services in use (AI API, email, storage) and report it to the developer.
