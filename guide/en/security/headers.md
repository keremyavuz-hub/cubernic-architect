# Security Headers
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- The application must not be embeddable in other sites (X-Frame-Options: DENY and frame-ancestors 'none').
- Referrer-Policy must be same-origin; pages carrying a secret code in the URL must not leak the code outside.
- The X-Content-Type-Options: nosniff header must be added.
- Framework signature headers (X-Powered-By) must be disabled.
- A full Content-Security-Policy should be defined, with third-party scripts written into the allow list. (Recommended)
