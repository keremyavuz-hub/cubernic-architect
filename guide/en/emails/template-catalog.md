# Standard Email Templates Catalog
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Usage
- The templates needed in the project must be selected from this catalog according to the project type and presented to the developer as a list.
- Each template must follow the common layout, tone and coding rules in emails/templates.md.
- For each template, the sending trigger, recipient, subject, preview text, main button and security note must be defined.

## Account and Identity
- Email verification: sent right after sign-up; must include the verification button, link duration, single-use notice and an "if you did not sign up, ignore this" note.
- Welcome: sent after the email is verified or the account is opened; must include first steps, the panel link and support information. (Recommended)
- Password reset: sent after the request; must include the reset button, duration (e.g. 60 minutes), single-use notice and an "if you did not request this, your password will not change" note.
- Password changed: sent when the password changes; must include date / time, notice that sessions were signed out and an "if this was not you, contact us immediately" warning.
- Email address change: a verification link must be sent to the new address and a "your address was changed" notice to the old address; a link to undo the change must be added to the old address email. (Recommended)
- Sign-in from a new device / location: on sign-in from an unrecognized device, must include date, browser, approximate location and a "if this was not you, change your password" link. (Optional)
- Two-step verification code / magic link: must include a short-lived code or link, request time and device information; the code must not be written in the subject line.
- Two-step verification enabled / disabled: must be sent as a security change notification.
- Too many failed sign-ins / account locked: may include the lock duration and a password reset link. (Optional)

## Application, Approval and Invitation (Company Based Panel)
- New application (to team): must include the applicant's email, application number and a button to the admin screen.
- Pending application reminder (to team): must include a summary list and an admin screen button, and must be sent at most once a day.
- Application approved + invitation: must include the company name, account creation button, invitation duration and single-use notice.
- Application rejected: must be polite and short; if a reason is given it must be kept general, and a contact path must be stated if there is a reply address.
- Team member invitation: must include the inviting person, company name, role and accept button.
- Role changed / removed from company: must include who made the change, the date and the new status.
- Company suspended / reactivated: must include the reason (general), effects and a contact path.

## Account Closure and Data
- Account closure request received: must include the deletion date, undo period and undo link.
- Account deleted: must include confirmation that deletion is complete and information on data retained for legal reasons.
- Data export ready: must include a time-limited, single-use download link.

## Payment and Subscription (If Any)
- Payment received / order confirmation: must include amount, taxes, product / service, date and invoice link.
- Invoice ready: must include the invoice number and download link.
- Subscription renewal reminder: must include the renewal date, amount and how to cancel.
- Payment failed: must include the reason (general), retry date and a link to update the payment method.
- Subscription canceled: must include until when access will continue.
- Refund issued: must include the amount and processing time.

## Notification and Digest
- Action result notifications (e.g. content published, domain verified, verification lost) must include the result, the related record and the panel link.
- Daily / weekly digest emails must be disableable by the user and must include a link to the notification preferences page.
- System outage / maintenance announcement: must include date, duration and effects.

## Example Project
- Templates in Markapolitan Vitrin: email verification, new application (to team), pending application reminder (to team), application approved + invitation, application rejected, password reset, password changed (lib/mail.js).
