# Form Alert and Notification Messages
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- All alert messages coming from the backend must be positioned appropriately on the UI.
- Field errors must be shown directly below the related field in small red text.
- General errors must be shown above or below the form in a box matching the theme.
- Temporary info messages must disappear automatically after a set number of seconds.
- Errors the user must fix must stay on screen until fixed.
- Success messages must be visually distinguished in green tones and error messages in red tones.
- Error texts must be written in language the user understands and must say what they need to do.
- Technical error codes must not be shown to the user.
- For errors that require waiting, the remaining time must be stated (e.g. "Try again in 2 minutes").
- Messages that could reveal account existence must not be used.
- When redirecting to another page after an action, a one-line info message must be shown on the target page.
