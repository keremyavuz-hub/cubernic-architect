# Audit Log
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- All company and user actions must be written to the audit log.
- The audit log must be append-only; it must not be updated or deleted.
- Each record must contain time, tenant, user, actor type, action, details and IP.
- Logins, logouts and failed login attempts must be recorded.
- Registration, verification, approval, rejection and invitation actions must be recorded.
- Password resets and changes must be recorded.
- Email sends and their errors must be recorded.
- Results of maintenance tasks must be recorded.
- Limit counts must be calculated from this log and the necessary indexes must be added.
- A screen showing the company its own audit log should be provided. (Recommended)
