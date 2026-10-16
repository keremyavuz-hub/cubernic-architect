# Account and Identity Security
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- Passwords must be stored with a slow hash function (scrypt, bcrypt or argon2).
- An upper limit must be set on password length.
- All single-use codes (session, invite, verification, reset) must be generated from at least 32 random bytes and stored as a hash in the database.
- Code and password comparisons must be constant-time.
- The existence of an account must not leak; the login error, reset response and response time must be the same.
- Two-step verification should be offered for privileged roles. (Recommended)
