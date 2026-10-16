# Error Tracking, Observability and Alerts
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Decision
- Using an error tracking and observability tool is not mandatory; the decision must be made together with the developer based on the project's scale, budget and data location needs.
- A minimum level must exist in every project: structured logs, audit log, a central error handler and a health check endpoint (e.g. /api/health).
- An error tracking tool should be suggested if any of the following apply: the project has real users, there is more than one server, browser-side errors cannot be seen, errors are not noticed unless users report them, the team has more than one person.
- When choosing a tool, these criteria must be compared: free plan limit, monthly cost, data storage region (EU / US), self-hosting option, source map support, whether there is session replay, personal data masking.
- When suggesting a tool, the AI must state the cost and data location and must not add the tool to the project without the developer's approval.

## Error Tracking Tools
- Sentry: the most common error tracking tool; server and browser errors, performance monitoring, session replay, has a free plan, EU data region can be selected: https://sentry.io
- GlitchTip: Sentry-compatible, open source, can be self-hosted; a lighter and cheaper alternative: https://glitchtip.com
- Self-hosted Sentry: fully featured but requires significant server resources; must not be suggested for small projects.
- Bugsnag, Rollbar, Honeybadger: Sentry alternatives; can be chosen based on team habits.
- PostHog: offers error tracking and session replay together with product analytics; EU region can be selected: https://posthog.com
- Highlight.io / LaunchDarkly Observability and similar tools offer session-replay-focused monitoring. (Optional)
- In tools with session replay, form fields and personal data must be masked, and the privacy notice and cookie consent must be updated.

## Log Collection and Observability
- Better Stack (Logs + Uptime): log collection, monitoring and alerts in one panel, has a free plan: https://betterstack.com
- Axiom: affordable for high-volume logs, has a free plan: https://axiom.co
- Grafana Cloud (Loki, Prometheus, Tempo): open-source based, has a free plan; can also be self-hosted: https://grafana.com
- OpenTelemetry: vendor-neutral standard; recommended for sending telemetry to any desired tool, code does not change when the tool changes: https://opentelemetry.io
- Datadog, New Relic: comprehensive but expensive solutions for large enterprises.
- If Cloudflare is used, Workers Logs, Logpush and Web Analytics are no-cost or low-cost options.

## Uptime and Scheduled Task Monitoring
- Whether the application is up must be checked regularly from outside (uptime monitoring).
- Uptime tools: Better Stack Uptime, UptimeRobot (free plan), Uptime Kuma (open source, self-hosted).
- To catch scheduled tasks that never run, Healthchecks.io (free plan, open source) or Better Stack Heartbeat can be suggested.
- The health check endpoint must also check the database connection, but must not return internal information.

## Alerts
- Alerts must be defined for critical situations: application unreachable, error rate increased, scheduled task did not run, disk almost full, paid service spending increased unexpectedly.
- Alerts must go to the right person and the right channel (email, Slack, Telegram, SMS).
- To avoid alert fatigue, alerts must not be set up for trivial situations, and repeated alerts for the same error must be grouped.
- What each alert means and what must be done should be documented with a short note. (Recommended)

## Setup Rules
- Personal data and secret values must not be sent to the error tracking tool; the tools' data scrubbing settings must be enabled.
- Production, staging and local environments must be reported with separate environment names; local development errors must not be sent to the production project.
- Release information must be sent so that it is visible which error started in which release.
- Source maps must be uploaded to the error tracking tool but must not be publicly served.
- The tool used must be added to the third-party list in the privacy notice and to the library / service registry.
- The number of events sent must be sampled; the free plan limit must not be exceeded.
