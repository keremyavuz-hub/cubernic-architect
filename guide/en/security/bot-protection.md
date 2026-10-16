# Bot Protection
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- On the backend, bot protection, rapid repeated submissions and back-to-back registrations in a short time must be checked.
- Public forms and forms that send email (registration, password reset) must use bot protection such as Cloudflare Turnstile.
- Bot protection must not show puzzles to the user; it must only ask for a short confirmation in suspicious cases.
- The bot token must be verified on the server side with the provider's verification service.
- The form the token was issued for (action) must be checked; a token from one form must not be valid on another.
- The token must be single-use and refreshed after every submission.
- If the verification service is unreachable, the request must be rejected.
- If the key is not defined, the check must be skipped in local development; in production the keys must always be defined.
- A hidden honeypot field must be used as a second layer.
- IP-based limits must be used as a third layer.
