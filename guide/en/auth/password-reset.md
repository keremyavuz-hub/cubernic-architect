# Password Reset and Change
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- There must be a forgot password link on the login form.
- The reset request form must contain only an email field.
- The same response must be given whether or not the account exists ("If an account is registered to this address, we have sent a link").
- The account's existence must not be inferable from the response time; sending the email must not delay the response.
- At most 3 reset links per hour must be created per account.
- At most 10 reset requests per hour must be accepted per IP.
- The reset request form should have bot protection. (Recommended)
- Links must not be sent to inactive accounts or accounts that do not yet have a password.
- The reset link must be unguessable (32-byte random code) and its hash must be stored in the database.
- The reset link must be short-lived (e.g., 60 minutes) and single-use.
- On an invalid or expired link, a "Request new link" button must be shown.
- The new password form must contain password and password confirmation fields.
- The password rules from account creation must be applied on the new password form.
- When the password is saved, the code must be consumed, other open reset links must be revoked and all of the user's sessions must be closed; these must be done in a single transaction.
- When the password changes, a "your password has been changed" email with date and time must be sent to the user.
- After the password change, the user must be redirected to the login screen with an info message.
- The ability to change the password from within the panel using the current password should be offered. (Recommended)
- Every reset request and password change must be written to the activity log.
- Expired reset records must be deleted by a periodic maintenance task.
