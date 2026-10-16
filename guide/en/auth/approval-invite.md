# Application Approval and Invitation
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## When To Use
- It must be used in systems where user registration goes through team approval (company / customer based panel) or where accounts are opened only by invitation.
- This file must not be applied in systems where individual users open accounts directly.

## To Do
- Only applications with a verified email must be approvable.
- The same application must not be approved or rejected twice; the record must be locked during the operation.
- Approval and rejection must be possible from the admin screen.
- A command line tool may exist as a backup, but the screen and the command must call the same function. (Optional)
- The admin screen must be visible only to platform administrators and must return 404 to unauthorized users.
- On the admin screen, pending, approved and rejected applications must be separated with tabs.
- Approval and rejection must additionally ask a confirmation question, and the server must also check the confirmation field.
- On approval, the account or company must be created and a time-limited (e.g., 7 days), single-use invitation link must be sent to the applicant.
- The invitation link must be unguessable and its hash must be stored in the database.
- On accepting the invitation, the person must set their name and password.
- The invitation must be valid only for the invited email.
- On rejection, a polite informational email must be sent to the applicant.
- Automatic rejection must not be done; rejection must be a deliberate decision.
- For verified applications awaiting a decision, at most one batched reminder per day must be sent to the team.
- Notification emails sent to the team must contain a button leading to the relevant admin screen instead of a command.
- Every approval, rejection and invitation action must be written to the activity log together with the person who performed it.
