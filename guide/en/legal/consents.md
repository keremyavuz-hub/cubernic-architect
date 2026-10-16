# Permissions, Consents and Consent Screens
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Developer Warning
- Contracts and legal texts produced based on this file are only ready-made draft content; they do not replace legal advice and do not provide a legal basis.
- When the AI produces a legal text or page, at the end of the work it must clearly tell the developer that the text is a draft and must not be published without being checked by a lawyer.
- In draft texts, information such as company title, address, tax information and competent court must not be invented; it must be left as square-bracket placeholders (e.g., [COMPANY TITLE]).
- The draft text's code or database must keep fields for draft status, last reviewer and lawyer approval date.
- Texts without lawyer approval must remain as open items in the go-live checklist.
- When legislation (KVKK (Turkish data protection law), Law No. 6563 (Turkish e-commerce law), Mesafeli Sözleşmeler Yönetmeliği (Distance Contracts Regulation), GDPR) changes, the developer must be reminded to check that texts are up to date.

## Common To Do
- A list of all permissions obtained in the application must be kept (e.g., terms of use, information notice read, explicit consent, commercial messages, cookies, publication consent).
- Each permission must be obtained with a separate checkbox; multiple permissions must not be combined in a single checkbox.
- Permission checkboxes must be unchecked by default.
- Approvals mandatory for the service (terms of use) and optional permissions (marketing) must be visually separated.
- Each permission text must have a link to the related full text next to it.
- Withdrawing a permission must be as easy as giving it.
- When a permission is withdrawn, the related operation (e.g., marketing sends, analytics) must stop immediately.
- When permission texts change, the version must be increased and, if needed, permission must be requested again from the user.

## Screens
- In registration and application forms, permission checkboxes must be placed right above the submit button at a readable size.
- Long texts (agreement, explicit consent) must open in a document view in full screen or a wide side panel, not in small boxes.
- Account settings must have a "My Permissions" or "Privacy and permissions" page.
- On the My Permissions page, each permission must be listed with its name, description, status (given / not given), date given and accepted text version.
- On the My Permissions page, optional permissions must be toggleable on and off with one click.
- Mandatory approvals (terms of use) must be readable on the My Permissions page, but withdrawing them must redirect to the account closure flow.
- The version of the accepted text at that time must be displayable to the user later.
- When a text version changes, a full-screen "Updated terms" screen must be shown at login, with a change summary and a link to the full text.
- When a permission change is made, a confirmation message must be shown on screen and, if needed, also sent by email.

## Recording and Storage
- Every grant and withdrawal of permission must be stored as a separate record; old records must not be updated or deleted; the record structure is in legal/consent-records.md.
- Every version of permission texts must be archived with its full text.
- The user's current permission status must be calculated from the latest record.
- Permission records must be exportable (audit, KVKK request, dispute).

## If Individual User System
- Commercial electronic message (email, SMS, call) permission must be obtained separately and be selectable per channel (email, SMS, call).
- In Turkey, commercial message permissions must be synchronized with İYS (İleti Yönetim Sistemi, Message Management System); permissions given in the application must be reported to İYS, and opt-outs coming from İYS must be applied in the application.
- Every marketing message must contain a one-click opt-out (unsubscribe) link.

## If Company / Customer Based Panel
- Publication consent, content usage permission and similar commercial approvals given by the company must be stored as explicit approval records.
- There must be a preview and explicit approval step before publishing, and an approval record (who, when, which content, which version) must be kept.
- For approvals given on behalf of the company, the approving user, their role and the company identity must be recorded.
- The company panel should have a screen showing the history of all approvals given by the company. (Recommended)
- Consent and opt-out options must also be offered for B2B commercial messages (promotional emails sent to companies).

## Recommended Platforms
- In projects with few permission types, permission management can be done in the application's own database. (Optional)
- If multi-channel marketing permissions and an audit trail are needed, consent / preference management platforms should be suggested: OneTrust Consent & Preference Management, Usercentrics, Didomi.
- For İYS integration, the İYS API can be used directly, or email / SMS service providers that are İYS integrators can be preferred; when choosing, the integrator list must be checked on the official İYS website.
- When suggesting a platform, its cost, data center location (cross-border transfer) and the exportability of permission records must be stated to the developer.
