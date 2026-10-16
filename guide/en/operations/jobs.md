# Background Jobs and Scheduled Tasks
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Common To Do
- Long-running work (email, import, image processing, sync, reports) must run as background jobs, not during the request.
- Jobs must run through a queue; the queue must not lose jobs when the server restarts.
- Every job must be written so that running it more than once gives the same result (idempotent) (see code/idempotency.md).
- Failed jobs must be retried a limited number of times with increasing backoff.
- Jobs that keep failing must be moved to a separate list (dead-letter), reported to the developer and be manually re-runnable.
- Every job must have a timeout; a stuck job must not lock the queue.
- The same scheduled task running on multiple servers at the same time must be prevented with a lock (e.g. Postgres advisory lock).
- The last run time and result of scheduled tasks must be recorded; an alert must be raised for a task that does not run at the expected time (e.g. Healthchecks.io, Cronitor).
- Jobs must process large data in chunks; memory and database load must be limited (see ai/resource-usage.md).
- Queue length and job durations must be monitored.
- Scheduled tasks that delete data must not be added without the developer's approval (see ai/destructive-actions.md).

## Recommended Platforms
- pg-boss, Graphile Worker: queue on Postgres; requires no extra infrastructure.
- BullMQ: Redis-based queue.
- System cron / systemd timer: simple scheduled tasks.
- Cloudflare Queues / Cron Triggers, Inngest, Trigger.dev: managed background jobs. (Optional)
- For detailed rules on queue systems, see operations/queues.md.
