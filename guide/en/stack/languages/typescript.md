# TypeScript / JavaScript
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## When To Use
- Must be applied if TypeScript or JavaScript is used in the project.
- TypeScript should be preferred over JavaScript in new projects. (Recommended)

## Rules
- strict must be enabled in tsconfig; noUncheckedIndexedAccess and exactOptionalPropertyTypes should be considered.
- any must not be used; data of unknown type must be taken as unknown and validated.
- Data from external sources (request body, API response, JSON, environment variable) must be typed via schema validation (Zod, Valibot), not via type assertion (as).
- Non-null assertion (!) and @ts-ignore must not be used; if needed, @ts-expect-error must be written with a justification.
- Promises must always be awaited or deliberately marked with void; no unhandled promise must be left (no-floating-promises).
- === must be used instead of ==.
- Money and precise numeric operations must not be done with number; integers (cents) or a decimal library must be used.
- For date operations, attention must be paid to the Date object's time zone behavior; Intl or Temporal / date-fns must be used (see code/datetime-locale.md).
- Shared types must be defined in one place and derived from the database schema or API schema.
- ESLint (typescript-eslint, type-aware rules) and Prettier / Biome must be used.
- Type checking (tsc --noEmit) must run in CI.
- There must be a single package manager (npm, pnpm, yarn, bun) and the lock file must be kept in git.
- Dependencies must be kept few; packages must not be added for small tasks (see code/dependencies.md).
- New packages with postinstall scripts must be reviewed before installation (supply chain risk).
