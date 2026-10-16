# Error Handling
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## General Rules
- Error handling must be centralized: error types, error codes, user messages and logging logic must be defined in a single module.
- Errors must be split in two: expected errors (invalid input, unauthorized, not found, limit exceeded, conflict) and unexpected errors (bug, database outage, external service crash).
- Expected errors must be shown to the user with a clear message and must not be sent to the error tracking tool as errors.
- Unexpected errors must be shown to the user with a generic message ("Something went wrong, please try again"), and their details must be sent to the log and the error tracking tool.
- Errors must not be silently swallowed; empty catch blocks must not be written, and at least logging must be done.
- Each error type must have a fixed code (e.g., RATE_LIMITED, NOT_FOUND, FORBIDDEN, VALIDATION_FAILED); the UI message must be selected from the language file based on this code.
- Error messages shown to the user must not contain stack traces, queries, file paths, internal IDs or version information.

## Server Side
- Server actions and API endpoints must return expected errors in a consistent shape (e.g., { error: { code, message, fields } }).
- Correct HTTP status codes must be used in API responses (400, 401, 403, 404, 409, 422, 429, 500, 503).
- Unexpected errors must be caught in a central error handler, logged and converted into a generic response.
- External service errors (email, payment, AI) must not crash the main flow; the result must be logged and retried if needed.
- Retryable errors (timeout, 429, 503) must be retried a limited number of times with increasing backoff; errors that must not be retried (400, 401, 403) must not be retried.
- Database operations must be rolled back on error; data must not be left half-written.
- Known database error codes (e.g., unique violation) must be translated into meaningful messages for the user.
- Uncaught exceptions and unhandled promise rejections must be caught and logged at the process level.

## UI Side
- React projects must have error boundaries at page and section level (in Next.js, error.js and global-error.js).
- There must be a 404 page matching the design for pages not found (in Next.js, not-found.js).
- Error screens must offer the user what they can do (try again, go to home page, contact support).
- Network errors and timeouts must be reported to the user, and form data must not be lost.
- Unexpected errors occurring in the browser must also be sent to the log or error tracking tool.
- A short error ID (request ID) should be shown on the error screen for support; when the user reports it, it must be findable in the logs. (Recommended)

## Background Jobs
- Scheduled jobs and queue jobs must log every error; no job must be left failing silently.
- It must also be noticed when a job does not run at all (e.g., the job sending a ping to a monitoring URL on each successful run).
- Jobs that fail after a set number of attempts must be moved to a dead-letter queue and the developer must be notified.
