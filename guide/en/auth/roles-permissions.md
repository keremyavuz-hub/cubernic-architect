# Roles and Permissions (RBAC)
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Common To Do
- Roles and what each role can do must be written in the project document as a table (permission matrix).
- Permission checks must be done through a single central function (e.g., can(user, "product.publish", resource)); role comparisons scattered across pages must not be written.
- Permission checks must always be done on the server side; hiding a button in the UI does not count as protection.
- The default state must be "unauthorized"; any action not explicitly permitted must be denied.
- On unauthorized access, the existence of the resource must not be revealed (404 if needed).
- Role changes must be written to the audit log.
- When a user's role is downgraded or their account is closed, their open sessions must be invalidated.
- The last administrator must be prevented from deleting themselves or their role.

## If Company / Customer Based Panel
- Platform roles (e.g., platform administrator) and in-company roles (e.g., company owner, company user) must be kept separate.
- If a user can have different roles in more than one company, the role must be stored on the user-company relationship.
- The company owner must be able to invite users to their own company and assign roles; they must not be able to access another company.

## Viewing as a User (Impersonation)
- If an administrator needs to view the panel through a user's eyes for support, this feature must be available only to platform administrators. (Optional)
- In this mode a prominent warning must be on screen, and the start and end must be written to the audit log.
- In this mode sensitive actions such as password change, payment and permanent deletion must be blocked.
