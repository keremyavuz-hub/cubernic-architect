# Form Buttons and Loading States
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- The button must not be enabled until the form fields are filled.
- A disabled button must be gray, have a not-allowed cursor, not change color on hover and not be clickable.
- Button hover styles must be applied only while the button is enabled.
- For fields autofilled by the browser, validation must be rerun with a short delay (e.g. 400 ms) on page load.
- The button must be locked while the form is submitting.
- The screen must be locked while the form is submitting.
- While the form is submitting, a loader icon must be shown appropriately and an informative message must be displayed to the user.
- During submission, the button text must change to fit the action (e.g. "Sending…", "Signing in…").
- Consecutive requests must not be sendable from the UI.
- Loading states must be shown for page transitions, tabs, pagination and filter forms.
- The button must not be enabled until the bot protection token is obtained.
