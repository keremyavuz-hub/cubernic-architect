# Form Validations
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- The form's native warning system must be disabled and replaced with custom validation messages.
- Validation rules must be written in a single place, and the UI and backend must use the same rule functions.
- The rules file must not include database or server modules and must be safely importable by the client.
- Form validations must be checked separately on the backend as well as on the UI.
- UI validation is only for user experience and must not be treated as a security check.
- A field must be validated when it loses focus.
- If a field has an error, it must be revalidated as the user types, and the error must disappear once fixed.
- Errors must not be shown as soon as the user starts typing.
- The border of an invalid field must be red and the field must be given the aria-invalid attribute.
- If there are errors on submit, focus must move to the first invalid field.
- The backend must accept only expected fields; if extra, duplicate or non-text fields arrive, the request must be rejected.
- Identity and authorization must be rechecked in every server action.
- User-provided values must be trimmed and normalized before saving (whitespace, lowercase).
