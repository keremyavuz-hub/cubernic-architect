# Confirmation Pages Opened by Email Links
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## General Rules
- Every page opened by an email link (verification, reset, invitation, unsubscribe, undo) must match the design language, be simple and mobile friendly.
- Link addresses must contain unguessable codes and use short, meaningless paths (e.g. /e/<code>, /s/<code>, /davet/<code>).
- When the page opens, the code's status must be checked and a separate screen or message must be shown for each status: valid, expired, used, invalid.
- On the expired or invalid link screen, the user must be offered a next step (e.g. "Request a new link", "Resend the application").
- Error screens must not leak internal information such as whether the account exists or why the code is invalid.
- Internal process steps (team review, next operations) must not be shown on the page; the user must be told only the result that concerns them.
- Pages must not be indexed by search engines (noindex).
- These pages must be protected with Referrer-Policy, and the code in the address must not leak to other sites.
- Analytics / advertising tags must not run on these pages; the code in the address must not be sent to third parties.

## Automatic Action or Button Action
- Performing the action immediately when the link opens (automatic verification) is the easiest path for the user; after the action the user must be redirected to the sign-in screen or panel with a one-line notice.
- Since corporate email security scanners can open links in advance, irreversible or critical actions (account deletion confirmation, email change, payment) must be performed with a button on the page and a server action.
- On password reset and invitation pages, only the form must be shown when the link opens, and the code must be consumed when the form is submitted.
- Unsubscribe links must work with one click; no additional sign-in or confirmation must be required.
- Which method is chosen and why must be agreed with the developer and documented.

## After the Action
- When the action succeeds, the user must be redirected to a logical next page (sign-in screen, panel, settings).
- The redirected page must show a short notice line describing the result (e.g. "Your email address has been verified.").
- If the user is already signed in, they must be redirected directly to the panel.
- When the same link is opened a second time, the action must not be repeated and a meaningful message must be shown to the user (e.g. "This address is already verified.").
- Every action must be written to the activity log.

## Example Project
- In Markapolitan Vitrin: /e/<code> performs email verification on open and redirects to the sign-in screen with a notice line; /s/<code> shows the password reset form; /davet/<code> shows the invitation acceptance form.
