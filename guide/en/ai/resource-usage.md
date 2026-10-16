# AI and Resource Consumption
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Before Development
- Before developing a feature, the AI must anticipate the feature's CPU, RAM, GPU, database, disk, network and external service consumption, and if serious consumption is expected, it must inform the developer in advance.
- How the feature's consumption will grow as user count, data volume and time increase must be considered (constant, linear or uncontrolled).
- For every structure that runs continuously, repeats itself or grows indefinitely (loop, timer, animation, queue, cache, log, table), an upper limit and a stop condition must be defined.
- For every expensive operation a user can trigger, an abuse scenario must be considered and a limit must be set (e.g., what happens if it is triggered a hundred times per second).
- Measures against resource consumption must be suggested together with the feature, not left to be added later.
- After development, consumption must be measured if possible and compared with expectations.

## CPU
- Heavy computations (image processing, large file conversion, bulk data processing, PDF / Excel generation) must be done in a background task, not during the request.
- In the browser, heavy computations must not block the main thread; Web Workers must be used if needed.
- Infinite or very frequent loops and timers (setInterval, polling) must not be used; frequency must be chosen according to need and stopped while the page is not visible.
- In regular expressions (regex) working on user input, the risk of catastrophic backtracking must be checked and input length must be limited.
- Password hashing (scrypt, bcrypt, argon2) is deliberately slow; it must not be called without a rate limit and input length must be limited.
- How many CPU-intensive jobs can run at the same time must be limited (concurrency limit).

## RAM (Memory)
- Large datasets must not be loaded into memory at once; pagination, streams or chunked processing must be used.
- File upload and download operations must be processed as streams without loading them fully into memory.
- In-memory caches must have a maximum size and duration, and old entries must be evicted (LRU, TTL).
- In long-lived server processes, module-level arrays, maps and listeners that grow continuously must not be created.
- Event listeners, timers, subscriptions and connections must be cleaned up when the component or operation ends.
- Size limits must be set on request and response bodies.
- Pages and processes that stay open for a long time must be tested for memory leaks.

## GPU and Animation
- In WebGL, canvas and 3D animations, frame rate must be limited (e.g., 30 fps); 60 fps must be used only if really needed.
- Pixel ratio must be limited (e.g., at most 1 or 1.5); drawing at full resolution on high-resolution screens strains the GPU exponentially.
- Animation must be stopped while the page or tab is not visible (visibilitychange) and while the element is not on screen (IntersectionObserver).
- If the user's reduced motion preference (prefers-reduced-motion) is on, animation must be stopped or simplified.
- When the component unmounts, the WebGL context, textures, geometries and shaders must be released (dispose, forceContextLoss).
- Invisible objects must be removed from the render loop, and unnecessary layer and particle counts must be reduced.
- The number of loops and noise layers inside shaders must be kept limited.
- Animation must be tested on low-power devices (mobile, old laptops) and, if needed, a simplified version must be provided.
- More than one WebGL context must not be opened on the same page; browsers have a context count limit.

## Database
- The result count of every query must be limited; unlimited list queries must not be written.
- Frequently run queries must be supported by indexes, and queries that do full table scans must be identified.
- Table growth rate must be anticipated; for tables that grow indefinitely (logs, audit log, sessions, notifications), a retention period and cleanup task must be defined.
- The connection pool must be kept limited and there must be no leaked (unclosed) connections.
- Database transactions must be kept short; external service calls, email sending or long computations must not be done inside a transaction.
- Locks must be of a non-waiting type or have a timeout; requests waiting on locks must not exhaust connections.
- Instead of the UI polling the database at frequent intervals, real-time notifications when needed or less frequent polling should be preferred.
- Bulk updates and deletions must be done in batches; millions of rows must not be locked at once.
- Database disk usage, connection count and slow queries must be monitored.

## Disk
- Log files must be rotated (log rotation) and old logs must be deleted.
- Temporary files must be deleted when the operation ends, and temporary folders must be cleaned regularly.
- File size and total quota limits must be set on user uploads.
- Backups must not accumulate on the same disk; they must be deleted according to the retention period.
- Docker images, old builds and unused volumes must be monitored so they do not fill the disk (deletion must be done with the developer's approval).
- An alert must be defined for disk usage (e.g., 80 percent).

## Network and External Services
- For every external request, a timeout, retry count and wait time (exponential backoff) must be defined; infinite retries must not be done.
- A storm of requests triggering each other on failure (retry storm) must not occur.
- External services' rate limits and quotas must be respected, and 429 responses must be handled correctly.
- Usage of paid external services (AI, SMS, email, maps, storage) must be protected with per-user and daily limits, and a spending limit and alert must be set up.
- For AI calls, token limits, maximum output per request and cache usage must be evaluated.
- Large responses must be compressed, and unnecessary data must not be sent to the client.
- For real-time connections (WebSocket, SSE), connection count and closing idle connections must be planned.

## Background Tasks and Scheduled Jobs
- Scheduled tasks must not overlap; a new run must not start before the previous one finishes (lock or single-instance check).
- The maximum run time of tasks must be limited.
- Tasks must not be clustered on the same minute (e.g., every hour on the hour); they must be spread across different minutes.
- Failed jobs in queues must not be retried forever; after a certain number of attempts they must be moved to a dead-letter queue.
- Queue length must be monitored, and an alert must be given in case of backlog.

## Monitoring and Alerts
- In production, CPU, memory, disk, database connections and response time must be monitored, and alerts must be sent when thresholds are exceeded.
- Usage and billing of paid services must be monitored, and alerts must be given on unexpected increases.
- Load testing before important features should be suggested (e.g., k6, autocannon). (Recommended)
- For resource problems, measurement (profiling) must be done first; changes must not be made based on guesses.

## Development Environment
- Watchers, development servers and containers running in the development environment must be able to be shut down when not in use.
- The AI must shut down processes it started in the background when the task is done and must not leave processes running forever.
- If a situation straining the developer's computer is noticed (e.g., an animation freezing in an open tab, a memory leak), its cause must be investigated and reported.
