# Registration and Application Operations
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Decide First
- The developer must be asked which registration type the project will use, and only the relevant sections below must be applied.
- Individual user registration: everyone opens an account in their own name (e-commerce customer, community, app user).
- Company / customer based panel: an application is made on behalf of a company, the team approves it, and the company has multiple users and roles (B2B panel, supplier panel, dealer panel).
- Invite-only system: there is no external registration, accounts are opened only by administrators (internal tools, corporate panels).
- A project may use more than one type together (e.g., company application + the company inviting its own users).

## Common To Do (All Registration Types)
- The application's logo and a title suited to the purpose must be above the form.
- The form must ask only for truly necessary fields; information that can be collected later must be requested after registration.
- What each field in the form proves must be made clear. (E.g., a verified email only proves that the address is real and belongs to the person.)
- There must be an email address field.
- The email must be converted to lowercase and whitespace trimmed as it is typed.
- The email format must be checked with strict rules (no consecutive dots, extension at least 2 letters).
- Disposable email services (mailinator, yopmail, temp-mail, etc.) and their subdomains must be rejected.
- The MX record of the email domain must be checked and domains that do not receive email must be rejected. Registration must not be blocked on a DNS timeout.
- The email address must be verified; details are in email-verification.md.
- There must be a registration agreement / terms of use checkbox, and all agreement-related items must be applied according to legal/terms.md.
- There must be a link to the KVKK (Turkish data protection law) privacy notice, and a separate checkbox must be used for actions requiring explicit consent; details are in legal/privacy-kvkk.md and legal/consents.md.
- How the user can leave their account must be defined at registration time; details are in auth/account-closure.md.
- A hidden honeypot field must be added; if it is filled, the bot must be answered as if successful and no registration must be made.
- Bot protection (e.g., Cloudflare Turnstile) should be added. (Recommended)
- The form's native validation system must be disabled and replaced with custom validation messages
- Required fields in the form must be marked with *.
- The button must not be enabled until the form fields are filled and the agreement is accepted.
- While the form is submitting, a loader icon and an informative message must be shown.
- Outside the form area, at the top, there must be a "Already have an account?" text and a login button.
- When registration is complete, a "Verify your email" screen must replace the form, showing the address the email was sent to and a spam folder warning.
- If there is a pending unverified registration with the same email, the new one must replace it and a new verification link must be sent.
- There must be a waiting period between two registrations from the same IP (e.g., 3 minutes).
- There must be an hourly (e.g., 3) and daily (e.g., 10) registration cap per IP.
- Limit counts must be made only from the append-only activity log, not from deletable records.
- Limit checks must be done before expensive operations (DNS lookup, external API).
- For errors that require waiting, the user must be told the remaining time.
- Form validations must be checked separately on the backend as well as on the UI side.
- CSRF validation must be added to forms.
- Every registration must be written to the activity log.
- Old registrations that were never verified must be deleted by a periodic maintenance task.

## If Individual User Registration
- There must be first name and last name fields.
- Password and password confirmation fields must be on the registration form.
- Password rules must be applied, with an info icon and a rule list that is checked off as the user types.
- There should be a show/hide password eye icon. (Recommended)
- Free email services (Gmail, Hotmail, etc.) must be accepted.
- There may be a username field; if present, its uniqueness must be checked while typing. (Optional)
- There may be a phone field; if present, it must be collected with a country code and verified by SMS. (Optional)
- For age-restricted services, date of birth or age confirmation must be collected. (Optional)
- Marketing / commercial message consent must be collected with a separate checkbox and must be unchecked by default; details are in legal/consents.md.
- Social login options such as Google and Apple may be offered; agreement acceptance must also be collected with social login. (Optional)
- If the email is already registered, "this email is registered" must not be said; the same response must be given and a "you already have an account" email must be sent to the existing account owner. (Recommended)
- After the email is verified, the user must be able to log in automatically or be redirected to the login screen.
- Critical actions (payment, sharing, messaging) must be restricted until the email is verified.
- Profile information (address, photo, preferences) must not be requested on the registration form, but in a profile completion step after the first login.
- The user must be offered an option to delete their account themselves; details are in auth/account-closure.md.

## If Company / Customer Based Panel
- Registration must not open an account directly; it must be received as an application on behalf of a company, and the account must be opened after team approval.
- It must be accepted that the email does not prove the company, only that the applicant is a real person.
- Company authority must come not from the email domain but from a separate ownership verification (e.g., domain verification: meta tag, DNS record, file).
- The email domain must not be required to match the company's website domain; a company's email domain and store domain may differ.
- Free email services may be blocked or allowed; the developer must be reminded that most small businesses use Gmail. (Optional)
- The application form must ask only for email, contact person name and agreement acceptance; information such as company name, tax details, website and phone must be requested in the panel after the account is opened.
- There may be a contact person name field (Optional)
- The application form must not ask for a password; the password must be set via the invitation link sent after approval.
- Agreement items specific to company panels must be applied according to the "If Company / Customer Based Panel" section of legal/terms.md.
- Duplicate checks must be done by email, not by domain; different people from the same company must not delete each other's applications.
- If there is a verified pending application with the same email, the new application must be rejected and the user informed.
- The new application notification to the team must be sent after the email is verified.
- Internal process steps such as team review must not be shown to the applicant.
- The applicant should be given an expectation about the response time (e.g., 1–3 business days). (Recommended)
- The approval, rejection and invitation flow must be built according to the items in approval-invite.md.
- After the company account is opened, the company must be able to invite its own users with roles (owner, editor, viewer).
- Each company must see only its own data; details are in security/data-isolation.md.
- If a legal invoice or contract is required, company details (legal name, tax number, address) must be collected and verified in a separate step in the panel. (Optional)

## If Invite-Only System
- There must be no public registration or application page.
- On the login screen, instead of the "Don't have an account?" link, the message "Contact your administrator for an account" must be shown.
- Accounts must be opened only by authorized administrators via an invitation link.
- The invitation link must be time-limited and single-use, and valid only for the invited email.
- On accepting the invitation, the person must set their name and password.
- Pending invitations must be listable and cancellable.
- A corporate single sign-on (SSO: Google Workspace, Microsoft Entra) option may be offered. (Optional)
