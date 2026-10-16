# Secret Keys
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- Secret keys must not be asked of the AI, printed, or pasted into the conversation.
- The developer must write secret keys into the environment file themselves.
- Whether keys are set must be checked without showing their values.
- Environment files (.env) must not be added to git.
- Variables sent to the client (NEXT_PUBLIC_) must contain only public information.
- Database and server modules must not enter client components, and a test checking this must be written.
- A separate, least-privileged API key must be used for each environment and project.
