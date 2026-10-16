# Client IP Address
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- The first value of the X-Forwarded-For header must not be trusted; the client can forge this value.
- Behind Cloudflare, the client IP must be read from the CF-Connecting-IP header.
- As a fallback, only the last X-Forwarded-For value added by our own proxy server must be used.
- IP reading must be done in a single function and the whole system must use this function.
- The server must only accept requests coming from Cloudflare IP ranges.
