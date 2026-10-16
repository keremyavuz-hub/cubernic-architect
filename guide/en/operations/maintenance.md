# Scheduled Maintenance Tasks
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- The lifetime of every temporary record must be defined at the start of the project.
- Old records that were never verified must be deleted periodically (e.g. 7 days).
- Closed or expired sessions must be deleted periodically (e.g. 30 days).
- Used or expired one-time codes must be deleted periodically (e.g. 7 days).
- Automatic deletion must cover only ownerless and unverified records; it must not touch verified records or business data.
- Automatic deletion must be added to the project rules as a written exception.
- At most one batched reminder per day must be sent to the team for items awaiting a decision.
- If a reminder email cannot be sent, the record must not be marked as reminded and must be retried on the next run.
- Verifications that depend on external sources (domain ownership) should be rechecked periodically. (Recommended)
- The result of every maintenance run must be written to the audit log.
- The maintenance task must run daily on the server via cron.
