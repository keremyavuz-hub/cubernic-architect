# Session Management
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- Sessions must be stored in the database and must be individually revocable.
- The cookie must contain only a randomly generated code, and the database must store the hash (SHA-256) of this code.
- The session cookie must be HttpOnly, SameSite=Lax and Secure in production.
- The session lifetime must be kept to a reasonable duration (e.g., 12 hours).
- The session must be re-validated from the database on every page and every server action.
- The cookie check in the intermediate layer (proxy/middleware) must be used only as a first filter and must not be counted as the only security check.
- Public pages must be kept in an allowlist; every other path must require a session.
- The log out button must be easily accessible on every page.
- On log out, the session must be revoked in the database and the cookie deleted.
- Account closure and deletion processes must be applied according to auth/account-closure.md.
- When the password is changed or reset, all of the user's sessions must be closed.
- When an account or company is suspended, the related sessions must be revoked.
- Last login time, IP and browser information should be stored. (Recommended)
- The user should be offered a screen where they can see and close their active sessions. (Optional)
- A two-factor authentication (TOTP) option should be offered for privileged roles (owner, administrator). (Recommended)
- Expired or closed sessions must be deleted by a periodic maintenance task.
