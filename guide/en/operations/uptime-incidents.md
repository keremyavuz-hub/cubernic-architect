# Uptime Monitoring and Incident Management
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Monitoring
- The application must have a health check endpoint (e.g. /health); it must briefly check the state of the database and critical services and must not expose secret information.
- The production system must be checked regularly from outside (e.g. once a minute); if it is unreachable, a notification must go to the developer.
- SSL certificate and domain expiry dates must be monitored.
- Threshold alerts must be set up for disk, memory, CPU and database connection count.
- An alert must be set up for sudden increases in the error rate (see operations/error-tracking.md).
- Alerts must not be unnecessarily frequent; trivial alerts eventually lead to being ignored.
- A status page can be offered in customer-facing systems. (Optional)

## During an Incident
- Who does what during an incident and who is notified must be written down in advance (e.g. docs/OLAY.md).
- The first goal is to get the system working (rollback, cutting traffic); the root cause must be investigated afterwards.
- Every action taken during the incident must be noted with its time.
- When a security breach or personal data leak is suspected, legal notification obligations and deadlines (KVKK (Turkish data protection law) 72 hours) must be brought to the developer's attention; this is not legal advice.

## After an Incident
- A short post-incident review must be written: what happened, its impact, the root cause, measures to prevent recurrence.
- The review must be blameless and aimed at improving the system.
- Resulting measures must be recorded as tasks and tracked.

## Recommended Platforms
- UptimeRobot, Better Stack, Healthchecks.io, Uptime Kuma (self-hosted): uptime and cron monitoring.
- Grafana + Prometheus, Netdata, Hetzner Cloud monitoring: server resources.
