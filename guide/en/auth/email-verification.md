# Email Verification
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- After registration, a verification link must be sent to the user's email address.
- The verification link must be unguessable and consist of at least a 32-byte random code (base64url, 43 characters).
- The link path must be short and meaningless (e.g., /e/<code>); guessable paths such as /basvuru/dogrula?id=5 must not be used.
- The database must store the hash (SHA-256) of the code, not the code itself.
- The link must be time-limited (e.g., 48 hours) and single-use.
- When the link is used, the code must be deleted from the database.
- When the link is opened, verification must happen immediately and the user must be redirected to the login screen with a single-line message.
- If the risk of corporate email scanners pre-opening and consuming the link is critical, verification must be done with a separate "Verify" button. (Optional)
- Internal process steps such as team review must not be shown to the user.
- Verified, already verified, expired and invalid states must be shown with separate messages.
- On an expired link, the user must be able to get a new link by applying again with the same email.
- The new application notification to the team must be sent after the email is verified; unverified applications must not occupy the team.
- The verification action must be written to the activity log.
- Old registrations that were never verified must be deleted by a periodic maintenance task (e.g., 7 days).
