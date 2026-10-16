# CSRF Protection
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- CSRF checks must be added to forms.
- Every request that changes data (other than GET, HEAD, OPTIONS) must come only from the application's own address.
- The Origin header must be compared against the list of allowed addresses.
- If the Origin header is missing, the Sec-Fetch-Site value must be same-origin; if that is also missing, the request must be rejected.
- null origin and similar address tricks (e.g. site.com.evil.com) must be rejected.
- An explicit rule must be applied in addition to the framework's own CSRF protection; it must be independent of the reverse proxy configuration.
- The session cookie must be SameSite=Lax or Strict.
- The production address must be read from an environment variable and must always be defined when going live.
- Unit tests must be written for the CSRF rule.
