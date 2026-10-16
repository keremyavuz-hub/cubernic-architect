# Logging
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## General Rules
- Logging must be done from a central module; console.log must not be used directly all over the code.
- Logs must be written in a structured (JSON) format: time, level, message, module, request id and related fields.
- Log levels must be used consistently: debug (development detail), info (important event), warn (unexpected but tolerated situation), error (failed operation), fatal (application cannot run).
- In production the log level must be configurable via an environment variable (e.g. LOG_LEVEL=info), and debug logs must be off in production.
- Every request must be assigned a request id that is present in all logs of that request; if Cloudflare is used, the CF-Ray value may also be recorded.
- Logs and the audit log must not be mixed up: logs are for technical monitoring and are kept for a short time; the audit log is the permanent record of business events and is kept in the database.

## What Should Be Logged
- Application start and stop, and configuration errors (missing environment variable) must be logged.
- Unexpected errors must be logged with their stack trace.
- Errors, timeouts and slow responses of external service calls must be logged.
- Slow requests and slow queries must be logged with a threshold (e.g. longer than 1 second).
- Security events (failed login, unauthorized access, limit exceeded, CSRF rejection) must be logged or written to the audit log.
- Start, end, duration and results of scheduled tasks must be logged.

## What Should Not Be Logged
- Passwords, tokens, API keys, session cookies and one-time codes must never be logged.
- Card details, ID numbers and special categories of personal data must not be logged.
- Personal data such as email, phone and IP must be logged only if needed and in line with the retention period, masked where possible (e.g. a***@domain.com).
- Request and response bodies must not be logged in full; only the necessary fields must be selected.
- User data written into logs must be stripped of line breaks and control characters.

## Retention and Storage
- Logs must be rotated on the server disk and kept for a limited time (e.g. 14–90 days).
- If there is more than one server, logs must be collected in a central place.
- The log retention period must be consistent with the privacy notice and the data retention policy.
- Legally required access logs (e.g. under Turkish Law No. 5651) must be kept separately and stored immutably for the required period.

## Recommended Libraries
- For simple projects, a small log module writing JSON with the built-in console is sufficient.
- For Node.js projects, pino can be suggested for structured and fast logging; winston is more flexible but heavier.
- The official transport of the chosen platform must be used for shipping logs.
