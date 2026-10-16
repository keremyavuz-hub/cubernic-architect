# Login Operations
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- The application's logo must be above the form
- A title suited to the form's purpose must be created
- There must be an email address field.
- There must be a password field.
- There must be a forgot password link. The link must be positioned to the right of the password label, without overflowing the form field.
- There must be a remember me field (Optional)
- If remember me is checked the session must be long (e.g., 30 days), otherwise short (e.g., 12 hours), and it must be unchecked by default. (Optional)
- There should be a show/hide password eye icon. (Recommended)
- The form's native validation system must be disabled and replaced with custom validation messages
- The password field must be at least 8 characters.
- The password field must consist of mixed uppercase and lowercase letters and numbers.
- When choosing password rules, the current NIST 800-63B recommendation (length and breached password list checks instead of mandatory character mixing) must be reminded to the developer, and the decision must be left to the developer.
- The password format rule must not be applied on the login form; only check that it is not empty and not excessively long. Format rules must be applied on the account creation and password change forms.
- An upper limit must be set on the password field (e.g., 200 characters); huge input must not be sent to the password hash function.
- An info icon and a tooltip informing the user about the required password format must be designed for the password field.
- Required fields in the form must be marked with *.
- The button must not be enabled until the form fields are filled.
- If an error is received from the server after the user submits their credentials, it must be placed below the form with a proper warning text, matching the theme. Warnings must disappear automatically after a certain number of seconds.
- No distinction must be made between user not found and wrong password; the message "Email or password is incorrect." must be shown in both cases.
- Even if the user is not found, verification must be run against a dummy password hash so the account's existence cannot be inferred from the response time.
- The screen must be locked while the form is submitting.
- While the form is submitting, a loader icon must be shown appropriately with an informative message for the user
- Forms may appear with animation (Optional)
- If login and registration are on the same screen, switching must happen without a page reload, the address bar must be updated and the browser back button must work. (Optional)
- Outside the form area, at the top or bottom, a "Don't have an account? text, next to it a registration button with suitable text" must be added. The button must redirect to the relevant registration page.
- In company based panels, the registration button text must suit an application (e.g., "Company application"); in invite-only systems, instead of a registration button the message "Contact your administrator for an account" must be shown.
- Form validations must be checked separately on the backend as well as on the UI side.
- CSRF validation must be added to forms.
- Form submissions must not be sendable multiple times within 1 second, and this must be checked on the backend.
- Consecutive requests must not be sendable from the UI side.
- On the backend, bot protection, rapid submissions and consecutive registrations in a short time must be checked.
- A temporary lock must be applied after many failed attempts for the same email in a short time (e.g., 8 in 15 minutes).
- A temporary lock must be applied after many failed attempts from the same IP in a short time (e.g., 30 in 15 minutes).
- The lock message must tell the user how long they need to wait.
- If the login page is opened while a session exists, the user must be redirected to the panel.
- When arriving at the login screen after actions such as verification or password change, a single-line green info message must be shown above the form.
- All warning messages coming from the backend must be positioned appropriately on the UI side. Details about warning messages are given above.
