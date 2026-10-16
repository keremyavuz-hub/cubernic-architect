# Library Selection and Usage
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Built-in Solution First
- For any need, the native features of the language, runtime or framework must be used first.
- Libraries must not be added for tasks that built-in features can handle; examples: fetch (instead of axios), Intl (instead of date / currency formatting libraries), crypto (for password hashing and random codes), URL and URLSearchParams, structuredClone, Array and Object methods, CSS animations, the browser's dialog and form features.
- Libraries must not be added for small helpers that can be written in a few lines.

## If a Library Is Needed
- If the built-in solution is insufficient, the developer must be informed with a justification and approval must be obtained before a library is chosen.
- The following criteria must be checked when choosing: is it still maintained (last release date), download count and community, open security advisories, license (permissive licenses like MIT, Apache should be preferred; GPL / AGPL is risky in a commercial project), package size and tree-shaking support, number of dependencies, TypeScript support, whether it is paid.
- Harmless, small, low-dependency and free libraries must be preferred.
- There must not be more than one library doing the same job in the project.
- Only the needed part of a library must be imported.
- The package name must be spelled correctly and checked against the official source to avoid impostor (typosquatting) packages.
- If the chosen library is unsuitable or may cause problems later, alternatives must be suggested with their pros and cons.

## Usage and Maintenance
- Libraries must not be used directly everywhere; where possible they must be kept behind the project's own thin adapter module, so only the adapter changes when the library changes.
- Versions must be pinned with a lock file, and major version upgrades must be done by reading the changelog and with tests.
- Dependencies must be regularly security-scanned (npm audit) and unused libraries must be removed (e.g., depcheck, knip).
- Warnings for deprecated libraries and APIs must be tracked and a migration plan must be made.
- Libraries loaded from a CDN must use a pinned version.
- Every library used in the project must be written to the library registry file (see code/registry.md).
