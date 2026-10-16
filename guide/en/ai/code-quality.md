# AI and Code Quality
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## General Rules
- Architecture, naming, language file and library rules must be applied according to the files in the code/ folder.
- Written code must follow the project's existing coding style, naming, folder structure and comment density.
- Code must be readable; clear writing should be preferred over short but cryptic writing.
- The same logic must not be copied to multiple places; it must be kept in one place and shared (e.g., validation rules, email sending, IP reading).
- Unused code, outdated comments and temporary debug lines (console.log) must not be left behind.
- Comments must explain why the code does something, not what it does.
- Named constants must be used instead of magic numbers (e.g., RESET_MINUTES = 60).
- Functions must do a single job; very long functions must be split.

## Error Handling
- Errors must not be silently swallowed; they must either be handled or logged and passed up.
- Expected errors (invalid input, not found, unauthorized) must be shown to the user with a clear message; unexpected errors must be shown with a generic message and logged.
- External service errors must not crash the application's main flow (e.g., registration must not fail because an email could not be sent).
- If database operations are interrupted, data must not be left inconsistent; transactions must be used.

## Dependencies and Complexity
- A large library must not be added for a small task; if the language's or platform's own features are enough, they must be used.
- Before adding a new dependency, the developer must be informed with a justification.
- Excessive abstraction, flexibility added because it might be needed someday, and unused options must not be added.
- Deprecated framework APIs must not be used; code that produces warnings must be fixed.

## Change Size
- The smallest and cleanest change needed for the requested task must be made.
- Unrequested refactors must not be mixed into the work; if needed, they should be suggested separately.
- If a change contains more than one independent task, it must be split into separate commits.
