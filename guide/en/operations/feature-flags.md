# Feature Flags and Gradual Rollout
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Common To Do
- Risky or unfinished features can be released turned off behind a flag; this avoids long-lived branches. (Optional)
- Flags must be able to be turned on per user, per company or by percentage.
- Flag checks must be done on the server side; endpoints of a disabled feature must also be disabled.
- Each flag's owner, purpose and removal date must be written down; fully enabled flags must be cleaned out of the code.
- Flags used as emergency kill switches (e.g. crawling, email sending) may be kept permanently.
- Flag changes must be written to the audit log.

## Recommended Platforms
- A simple settings table in the database: sufficient for small projects.
- Unleash, Flagsmith, GrowthBook (self-hosted), PostHog, LaunchDarkly. (Optional)
