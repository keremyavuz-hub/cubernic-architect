# General Form Rules
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- Every field must have a visible label; the placeholder must not be used instead of a label.
- The placeholder must be a realistic but neutral example (e.g. first.last@example.com).
- A short gray help text should be shown below fields, and when an error occurs the error must be written in place of this text. (Recommended)
- Fields must use the correct type and autocomplete values (email, current-password, new-password, name).
- Auto-capitalization and spell check must be turned off in the email field.
- Every field must have a maximum character limit, and the server must enforce the same limit.
- Unnecessary fields must not be requested; information that can be collected later must be removed from the form.
- Required fields in the form must be marked with *.
- The first field of the form must be focused when the page opens.
- The form must be fully usable with the keyboard, and the focus order must be logical.
- When an error is returned from the server, entered values must be preserved and the form must not be cleared (password fields may be excluded).
- Data-changing actions must be explicitly triggered, and irreversible actions such as deletion must require additional confirmation.
- Deletion confirmation must also be checked on the server side with a separate confirmation field.
- A hidden honeypot field should be added. (Recommended)
