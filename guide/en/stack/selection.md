# Framework Selection
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## When To Use
- Must be applied when a framework has not yet been chosen for a new project; if a framework is already chosen, this file must be skipped and stack/framework-rules.md must be applied.

## Questions To Ask
- The languages and frameworks the developer and team know must be asked; a known framework is usually the best choice.
- The project type must be asked: content / marketing site, panel, e-commerce, API, real-time application, mobile backend.
- SEO needs, hosting preference (own server, serverless, enterprise cloud) and budget must be asked.
- Whether any technology is mandated by the client or organization must be asked.
- How long the project will be maintained must be asked.

## Selection Criteria
- The framework must be mature, actively developed and have a long-term support (LTS) version.
- Community, documentation and ready-made package support must be sufficient.
- Hosting cost and ease must fit the project budget.
- The availability of people who could take over the project later must be considered.
- A structure heavier than the project needs must not be chosen (e.g. a microservice architecture for a simple marketing site).

## Decision
- If the developer states no preference, the AI must suggest at most two options with justification and briefly state their pros and cons.
- The decision and its justification must be written to the project rules file and a decision record such as docs/KARARLAR.md (see code/registry.md).
- The relevant file in the stack/ folder must be applied for the chosen framework.
