# Account Closure and Leaving the System
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Common To Do
- The user must be able to close or delete their account from within the app, without having to write to the support team.
- The account closure option must be clearly visible on the account settings page and must not be hidden or made difficult.
- Account closure must require extra confirmation as an irreversible action (e.g., a confirmation dialog and typing "DELETE", or re-entering the password).
- Before closing the account, the user must be clearly shown what will be deleted, what will be retained due to legal obligations, and for how long.
- Identity must be re-verified for an account closure request (password or a confirmation link sent by email).
- Instead of immediate deletion, there may be a grace period (e.g., 14 or 30 days); during this period the user must be able to undo the process by logging in. (Recommended)
- During the grace period the account must be inactive and the profile and content must not be visible to others.
- An informational email must be sent to the user when the closure request is received and when deletion is completed.
- When the account is deleted, all of the user's sessions must be closed and open invite and reset links must be revoked.
- Personal data must be deleted or irreversibly anonymized.
- Records with a legal retention obligation (invoices, terms acceptance, activity log) must not be deleted; they must be retained stripped of personal information or with restricted access.
- The user reference in the activity log must not break after deletion; the record must be preserved with an anonymous identifier.
- It must be possible to register again with the email address of a deleted account.
- The user should be able to download a copy of their data before deleting the account (data portability). (Recommended)
- A data export request must be prepared in the background, and when ready a time-limited, single-use download link must be sent by email.
- Opting out of marketing consents and notifications must be possible separately, without deleting the account.
- Every email must contain an unsubscribe link that works with one click (only in marketing and newsletter emails; not required in transactional emails).
- The log out button must be easily accessible on every page.
- An option to log out of sessions on all devices should be offered. (Recommended)
- Account closure, cancellation and deletion actions must be written to the activity log.
- The legal response time for an account closure request (at most 30 days for KVKK (Turkish data protection law)) must not be exceeded.

## If Individual User System
- The user must be able to close their own account alone.
- When closing the account, the user may optionally be asked for a reason for leaving; this question must not be mandatory. (Optional)
- If there is an active subscription, balance or pending order, the user must be informed before closing the account and told how these will be resolved.
- In mobile apps published on app stores, account deletion must be possible from within the app (Apple and Google rule).
- The user must be told in advance whether the public content they shared (comments, reviews) will be deleted or remain anonymous.

## If Company / Customer Based Panel
- A person leaving the company (giving up membership) and closing the company account must be offered as separate actions.
- A company member must be able to give up their own membership; this must not delete the company's data.
- The sole owner of the company must not be able to give up membership; they must first be asked to transfer ownership to another member.
- The company owner must be able to remove another user from the company, and the removed user's sessions in that company must be closed.
- Only the company owner must be able to close the company account, and the action must require extra confirmation and identity re-verification.
- Before closing the company account, what will happen to the company's published content (products, listings, store) must be clearly shown (unpublishing, transfer, retention).
- When the company account is closed, an informational email must be sent to all members.
- The company's data should be exportable before the company account is closed (e.g., CSV/Excel). (Recommended)
- Company data must be retained for the period specified in the contract, then deleted or anonymized.
- Resources verified by the company (domain, store) must be released when the account is closed, so another company can verify them.
- When a user's account is deleted, the data of the companies they are a member of must not be deleted.
- The platform administrator must be able to suspend a company; suspension must not mean deletion and must be reversible.

## If Invite-Only System
- Account closure must be requestable by the user and completed with administrator approval.
- When an employee of the organization leaves, the account must be deactivatable immediately by an administrator and all its sessions closed.
- Records created by and work owned by a deactivated account must be transferable to another user.

## If There Is a Mobile App
- If accounts can be created in the app, account deletion must also be startable from within the app (App Store and Google Play requirement); a request by email alone is not enough.
- For Google Play, an account / data deletion link accessible from outside the app must also be offered.
- When deleting accounts that use Sign in with Apple, the Apple token must be revoked.
