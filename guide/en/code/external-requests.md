# Requests to External Sources and Crawling
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Common To Do
- Every request to external sources (API, website, feed, file server) must go through a central client; timeout, retry and rate limiting must be managed in one place.
- Every request must have a timeout; an unresponsive server must not lock up the application.
- Retries must be limited in number and use increasing backoff (exponential backoff + random jitter).
- On 429 (too many requests) and 503 responses, the Retry-After header must be respected and the request rate must be reduced.
- The same data must not be requested repeatedly; caching, ETag / If-Modified-Since and change checks must be used.
- An external source returning errors must not stop the whole application; the error must be logged, and stale data or a meaningful message must be shown.
- If requests are sent to user-supplied addresses, SSRF protections must be applied (see security/ssrf.md).
- External responses must be treated as untrusted data; they must not be written to the database or shown on the page without validation.

## API Usage
- The service's terms of use, rate limits and quotas must be read; usage must stay below the limits.
- For bulk operations, the service's batch endpoints must be preferred.
- For paid APIs, request count and cost must be monitored, and an alert must be raised on unexpected increases (see ai/resource-usage.md).
- API keys must be used only on the server side (see ai/secret-handling.md).

## Crawling / Data Collection
- Before crawling, the target site's terms of use and robots.txt file must be checked; disallowed paths must not be crawled.
- If the site offers an official API or feed (XML, JSON, sitemap), it must be used instead of scraping pages.
- The number of concurrent requests to the same server must be kept low (e.g., 1–2 concurrent requests per domain).
- A delay must be placed between requests (e.g., at least 1 second); the Crawl-delay value in robots.txt must be respected.
- If the remote server's response time increases or the error rate rises, crawling must automatically slow down and stop if needed.
- Crawls should be scheduled for hours when the remote site is not busy. (Recommended)
- A daily / hourly request cap must be set per domain.
- Requests must be sent with a User-Agent that identifies itself (project name and contact address); browser impersonation or block circumvention must not be done.
- Being blocked (403, captcha) must be treated as a warning; no attempt must be made to bypass the block, and the developer must be notified.
- Previously crawled pages must not be downloaded again if unchanged; crawl frequency must be adjusted to how fast the content changes.
- Images and large files must not be downloaded unless needed; downloaded ones must be stored and not downloaded again.
- The developer must be reminded about copyright, personal data and usage rights of collected data (see legal/project-assessment.md); this is not a legal assessment.
- Crawl jobs must run through a queue, able to resume from where they left off, and every run must be logged.

## For AI
- During development, the AI itself must not send unnecessary requests to external sources; it must not fetch the same page repeatedly or send bulk requests in a loop.
- Before running code that crawls or sends bulk requests, the AI must tell the developer the target, request count and rate, and must get approval.
- Live external services must not be loaded during testing; a small sample or mock responses must be used where possible.

## Measures To Suggest
- When starting work involving external requests or crawling, the AI must suggest to the developer, as a short list, the measures below that fit the project; the developer decides which ones to apply.
- A per-domain rate limiter (token bucket) and concurrency limit should be set up (e.g., p-limit / bottleneck for Node.js, aiolimiter for Python). (Recommended)
- A circuit breaker should be used; no requests should be sent for a while to a source that fails repeatedly. (Recommended)
- Jobs should run through a queue (e.g., BullMQ, pg-boss, a Postgres-based job table); resuming, retries and per-job timeouts should be managed on the queue. (Recommended)
- A per-domain status table must be kept: last request time, error count, average response time, block status, daily request count.
- The robots.txt file must be cached and refreshed regularly (e.g., daily); a ready-made library must be used for parsing (e.g., robots-parser).
- Unchanged pages must be skipped with conditional requests (ETag, Last-Modified) and content hashes.
- A sitemap- and feed-first crawling strategy must be applied; only changed URLs must be crawled.
- Crawl frequency must be adapted to content: frequently changing pages must be crawled more often, static pages rarely.
- There must be an emergency stop switch (environment variable or panel setting); all crawls must be stoppable in a single step.
- Monitoring and alerting must be set up: requests per domain, error rate, 429 / 403 counts, cost; a notification must go to the developer if a threshold is exceeded (see operations/logging.md, operations/error-tracking.md).
- A headless browser must be used only for pages that require JavaScript; plain HTTP requests must be preferred for others (for resource usage see ai/resource-usage.md).
- If the collected data contains personal data, filtering or anonymization must be suggested (see legal/privacy-kvkk.md; KVKK, Turkish data protection law).
- The course of action if the target site owner objects or blocks (stopping the crawl, adding the domain to a block list) must be defined in advance.
- Where appropriate, ready-made and compliant services may be suggested (e.g., official APIs, data providers, Common Crawl). (Optional)
