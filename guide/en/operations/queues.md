# Queue Systems
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## When To Use
- A queue must be used for work that lengthens request time, depends on external services, or is bulk or scheduled: sending email / SMS / notifications, import / export, image / video processing, feed sync, crawling, report generation, sending webhooks, AI calls.
- A queue must not be set up for simple and fast tasks; it adds unnecessary infrastructure maintenance.
- For general background job rules, see operations/jobs.md.

## Choosing a Queue
- Infrastructure already used in the project should be preferred; if only Postgres exists, a Postgres-based queue should be considered first (pg-boss, Graphile Worker, Laravel database driver, Hangfire SQL).
- If high volume, low latency or many workers are needed, a Redis-based queue should be considered (BullMQ, Laravel Horizon, Sidekiq, Celery + Redis).
- If event distribution between services or very high volume is needed, a message broker should be considered (RabbitMQ, Kafka, NATS, AWS SQS, Cloudflare Queues).
- If the framework has a built-in queue system, it must be used (Laravel Queue, Django + Celery, ASP.NET + Hangfire / MassTransit, NestJS + BullMQ) (see stack/framework-rules.md).
- The choice and its rationale must be written to the decision registry (see code/registry.md).

## Job Design
- Each job must have a single responsibility and be small and independent.
- A record ID, not large data, must be passed to the job; the job must read current data from the database when it runs.
- Job payloads must not contain secrets (passwords, tokens, API keys); queue data may be visible in logs and dashboards.
- Every job must produce the same result when run more than once (idempotent); queues guarantee at-least-once delivery, so a job may run twice (see code/idempotency.md).
- Multiple pending instances of the same job for the same record must be prevented with a unique key (job id / unique job).
- The job must check whether the record is still valid (e.g. email must not be sent to a deleted user).
- Jobs must be enqueued after the database transaction completes; otherwise the job looks for data not yet saved (after commit / outbox).
- When the job payload structure changes, old jobs still waiting in the queue must still be able to run; version information should be added to the job payload. (Recommended)

## Retries and Errors
- The number of attempts, increasing wait time (exponential backoff + random jitter) and timeout must be defined for each job type.
- Permanent errors (invalid data, deleted record, 4xx response) must not be retried; transient errors (timeout, 5xx, 429) must be retried.
- Jobs that exhaust all attempts must not be lost; they must be kept in a failed jobs list (dead-letter) with the error reason.
- Failed jobs must be inspectable and re-runnable from a dashboard or a command.
- An alert must go to the developer when the number of failed jobs exceeds a threshold.
- Errors must be sent to the error tracking tool with the job name and record ID (see operations/error-tracking.md).

## Concurrency and Ordering
- The number of workers and each worker's concurrency must be set according to server resources and the database connection count (see ai/resource-usage.md).
- Jobs that make requests to an external service must be limited according to that service's rate limit (see code/external-requests.md).
- Jobs where order matters (e.g. consecutive updates to the same record) must be processed sequentially with the same group / partition key.
- Jobs that modify the same resource must use locks or atomic updates against race conditions.
- Jobs with different priorities must be split into separate queues (e.g. critical: password reset email, normal: notification, low: report); slow jobs must not delay critical jobs.
- In multi-tenant systems, one company's large job must not delay other companies' jobs; per-company concurrency or fair ordering must be applied.

## Scheduled and Delayed Jobs
- Scheduled jobs (cron) must not run on multiple servers at the same time; a single runner or a lock must be used.
- Instead of long delayed jobs (e.g. a reminder after 48 hours), a periodic job that scans due records should be preferred; long-waiting jobs may be lost during deploys and queue changes.
- Each run of a scheduled job and its result must be recorded.

## Deploy and Operation
- Workers must run in processes separate from the web server and be kept alive with a process manager (systemd, PM2, Supervisor, Docker restart policy).
- During deploy, workers must finish their current job and shut down cleanly (graceful shutdown); an interrupted job must be retryable.
- Workers must also be restarted when new code is deployed; otherwise old code keeps running.
- Workers should be restarted after a certain number of jobs or time to guard against memory leaks. (Recommended)
- Queue infrastructure (Redis, etc.) must run with persistent storage and backups; jobs must not be lost on restart.
- Redis / the broker must not be publicly exposed, and must be protected with a password and TLS where possible.

## Monitoring
- Queue length, wait time, processing time, success / error rate and worker count must be monitored.
- An alert must be raised if queue length keeps growing (workers cannot keep up).
- If a queue dashboard is used, it must be accessible only to administrators and require authentication (Horizon, Bull Board, Flower, Hangfire Dashboard).
- In an emergency, a specific queue or job type must be stoppable in a single step.

## Testing
- Jobs must be testable by calling them directly without the queue.
- Retry, double execution and permanent error behavior must be tested.
- Tests must not make requests to real external services.

## For AI
- AI must not empty or delete the queue, pending jobs or the failed jobs list without the developer's approval (see ai/destructive-actions.md).
- Before enqueuing bulk jobs, the number of jobs and their impact (number of emails to send, number of external requests, cost) must be told to the developer.

## Recommended Platforms
- pg-boss, Graphile Worker: Node.js + Postgres.
- BullMQ (+ Bull Board): Node.js + Redis.
- Laravel Queue + Horizon: Laravel.
- Celery (+ Flower), Dramatiq, RQ: Python.
- Hangfire, MassTransit: .NET.
- Sidekiq / Solid Queue: Ruby on Rails.
- RabbitMQ, Kafka, NATS: inter-service messaging.
- AWS SQS, Google Cloud Tasks, Cloudflare Queues, Inngest, Trigger.dev: managed queues.
