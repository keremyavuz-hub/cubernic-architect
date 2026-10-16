# Email Sending
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- Email sending must be done from a single module; if the provider changes, only this module must change.
- If the API key is not defined, the system must not crash; the email must be skipped and logged to the console.
- User flows (sign-up, approval) must not stop because an email could not be sent.
- A timeout (e.g. 10 seconds) must be set on the email request.
- Every send and error must be written to the activity log.
- Sends that could reveal account existence (password reset) must not delay the response.
- Team notification addresses must support more than one address (comma-separated), and a separate email must be sent to each recipient.
- If the sender address is noreply, the footer must say "Please do not reply".
- If replies are wanted, a reply_to address should be used. (Optional)
- A tag indicating the email type should be added to emails. (Recommended)
- Links in emails must be generated from the production address (PANEL_URL).
