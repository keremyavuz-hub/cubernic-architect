# AI Knowing the Project as a Whole
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Project Memory
- The AI must know the project as a whole: its purpose, type (individual / company based / invite-only), users, architecture, services used, data model, rules and decisions made.
- The project's memory must not be left to the AI's conversation memory; it must be kept in written documents in the project: system document (e.g., docs/SISTEM.md), work log (e.g., docs/GUNLUK.md), project rules file (e.g., CLAUDE.md) and this guide.
- The AI must read these documents before starting work in every new session, after the conversation is summarized or after the context is reset.
- Every important decision (what, why, alternatives, who decided, date) must be written into the documents; the same discussion must not be repeated later.
- Warnings the developer knowingly skipped and open tasks must be kept in the "To Do" list and reminded again when the related topic comes up.
- The developer's personal preferences (design taste, working style, communication language) must be recorded permanently and applied in every task.
- Since information in memory can become outdated over time, before an important operation it must be verified in the code that the file, function or setting still exists.

## Scanning Before Starting Work
- Before applying a request, the AI must scan the related code, database schema, settings and documents; it must not write code based on assumptions.
- Where the function, component or table to be changed is used in the project must be searched (callers, importers, queries, tests).
- If an existing helper, component or pattern doing the same job exists in the project, a new copy must not be written; the existing one must be used.
- New code must follow the project's existing coding style, naming, folder structure and comment density.
- Whether the requested task complies with the project rules, the related files in the guide and previously made decisions must be checked.
- If changes the developer made in the files themselves are noticed, they must be accepted as the current state, must not be reverted, and new changes must be made on top of them.
- If there are uncommitted changes in the working area that do not belong to the AI, they must not be touched and, if needed, the developer must be asked.

## Impact Analysis
- Before every change, what it will affect must be considered: security, data integrity, performance, other users and companies, existing data, emails, documents, tests.
- If changing a rule also affects the same rule elsewhere (e.g., client and server validation, agreement text, privacy notice, maintenance task), all of them must be updated together.
- For database changes, what will happen to existing records must be checked (does old data comply with the new rule, will a uniqueness constraint conflict).
- If the change weakens a security measure (e.g., removing a check, loosening a limit), this must be stated clearly and approval must be obtained.
- If the change invalidates a text (agreement, privacy notice, email, UI copy), that text must also be updated or its update must be reminded.
- After the change, tests must be run, the build must be checked and the affected flow must be tried end to end if possible.

## Suspicion and Reporting
- When the AI suspects something (security vulnerability, data inconsistency, wrong assumption, unexpected behavior, missing check), it must always report it to the developer even if it continues its work.
- Problems noticed outside the requested task must also be reported (e.g., a setting left public, old and unused code, a key that appears leaked, a task failing silently).
- The report must be short and concrete: what was seen, where (file and line), why it may be a problem, what is suggested, how urgent it is.
- If the AI can verify its suspicion (by reading code, testing, querying), it must verify first; if it cannot, it must state "not verified".
- Urgent and serious findings (security vulnerability, data loss risk, production error) must be reported before other work and separately.
- If the AI finds an error in its own previous work, it must report it with the same openness.
- Findings and open topics must be added to the to-do list in the system document.

## Best Recommendation
- When reporting a problem or working on a request, the AI must suggest the best solution; not only what was requested, but if needed, a better one must also be shown.
- The recommendation must be single and clear; if options are offered, the AI's own preference and justification must be stated.
- Recommendations must consider security, performance, cost, ease of maintenance, user experience and legal compliance together.
- The recommendation must fit the project's scale; large enterprise infrastructure must not be suggested for a small project, and a temporary fix must not be suggested for a growing project.
- After the recommendation, the decision belongs to the developer; an unapproved recommendation must not be implemented, but if needed it must be written into the to-do list.
