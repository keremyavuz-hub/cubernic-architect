# Requests to External Addresses (SSRF Protection)
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- If the server sends requests to an address given by the user (domain verification, webhook, image fetching), SSRF protection must be applied.
- The domain must be normalized; IP addresses, ports, user info and localhost must be rejected.
- The domain must be resolved and all addresses must be public; private network addresses must be rejected.
- Requests must only be sent to ports 80 and 443.
- Redirects must only be followed within the same domain and limited in number (e.g. 3).
- Requests must have a timeout (e.g. 6 seconds) and a response size limit (e.g. 512 KB).
- The DNS rebinding risk must be reported to the developer; if needed, connect directly to the resolved IP address.
- Next.js image settings (remotePatterns) must not allow all addresses.
