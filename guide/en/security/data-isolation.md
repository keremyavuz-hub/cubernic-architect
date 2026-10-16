# Authorization and Data Isolation
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## When To Use
- In systems where multiple companies or customers use the same application (multi-tenant), it must be applied in full.
- In individual user systems, the items about each user seeing only their own data must be applied; the company and role items must be skipped.

## To Do
- Each company must see only its own data.
- In multi-tenant systems, every query must be filtered by the tenant ID in the session; the tenant ID must not be taken from the client.
- Role and permission must be re-checked in every server action.
- An attempt to access a record belonging to another tenant must return "not found".
- Admin pages must return 404 to unauthorized users.
- Write operations must only be open to authorized roles (owner, editor); viewers must only be able to read.
- A domain or unique resource must be verifiable by only one tenant.
