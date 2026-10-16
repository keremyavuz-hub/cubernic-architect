# Code Architecture
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Centralization
- Every shared concern must be written in a single place and every part of the application must use that single source: settings, constants, validation rules, texts, colors, permission checks, email sending, database access, error messages, date / currency formatting.
- Settings and constants (durations, limits, addresses) must not be scattered through the code; they must be kept as named constants in a central file.
- Environment variables must be read from a single module; process.env must not be read directly everywhere in the code.
- Design values (color, spacing, font, border radius) must be defined in a single theme / token file.
- UI texts must not be hardcoded; they must be read from language files (see code/i18n.md).
- If the same rule runs on both client and server, it must be shared from a single file.

## Code Duplication
- Code must not be duplicated; when the same logic is about to be written a second time, it must be extracted into a shared function, component or module.
- Before writing a new helper, the project must be searched for something that already does the same job.
- Code that looks similar but serves different purposes must not be forcibly merged; duplication must be shared only if it repeats the same rule / knowledge.
- Components duplicated by copy-paste (e.g., the same form field written separately on each page) must be turned into a shared component.

## Layers and Responsibilities
- The application must be split into layers: UI (pages and components), actions / API (request handling, validation, authorization), business logic (services), data access (database and external services).
- UI components must not access the database directly, and business logic must not be written inside UI code.
- Business logic must be kept in framework-independent modules (Next.js, Express, etc.), so command-line tools, background jobs and tests can use the same logic.
- External services (email, payment, storage, AI) must be kept behind a single adapter module; when the provider changes, only the adapter must change.
- Server-only code (database, secret keys) must not leak to the client side, and there must be a test that checks this.

## SOLID
- Single Responsibility: each module, class and function must do one thing and must have only one reason to change.
- Open / Closed: adding a new feature must require extending existing code, not modifying it (e.g., adding a new verification method by adding a new entry to the method list).
- Liskov Substitution: modules implementing the same interface (e.g., different email providers) must be interchangeable without issues.
- Interface Segregation: modules must not depend on functions they do not use; large interfaces must be split into small, purpose-specific parts.
- Dependency Inversion: business logic must depend on abstract interfaces, not concrete providers; the provider must be injectable from outside.
- SOLID principles must be applied according to the project's scale; unnecessary abstraction layers must not be created in a small project.

## Event Driven Structure
- If multiple independent tasks follow an operation (send email, write record, send notification, update statistics), they must be published as events rather than chained inside the main operation (e.g., an application.verified event).
- Event names must be past tense and domain-prefixed (e.g., user.registered, shop.verified, order.paid).
- Event listeners must be independent of each other; an error in one listener must not break the main operation or other listeners.
- Listeners that must not make the user wait must run in the background or in a queue.
- If completion of events is critical (payment, email), the event should first be written to the database and then processed (outbox pattern). (Recommended)
- The activity record (audit log) must be consistent with events; the same event names must be used where possible.
- In small projects, the event system must start with a simple publish / subscribe module; queue infrastructure must be added only when needed.

## Extensibility and Manageability
- Adding a new type (e.g., new verification method, new role, new email template, new language) must be possible by adding to a single list / registry.
- As condition chains (if / switch) grow, they must give way to a lookup table (map) or strategy structure.
- Features must be grouped into feature folders where possible; a feature's files must not be scattered across the project.
- New features should be able to be turned on and off with feature flags without deleting code. (Optional)
- Architectural decisions (why this structure was chosen, what the alternatives were) must be written to the architecture record file (see code/registry.md).
