# Guide Activation
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Core Principle
- The guide is not a to-do list; it does not cause a structure that is not in the project (e.g., registration, panel, email, payment) to be built on its own.
- The guide becomes active the moment the developer starts building that structure; until then, the related files are not applied or suggested.
- If the developer knowingly does not want a structure (e.g., there will be no registration, no panel), the AI must not insist and must not report it as a shortcoming.
- If the developer added the guide later to a small project they started themselves, existing code must not be changed to match the guide right away; the developer must not be overwhelmed.

## Triggers
- When the developer starts working on or requests a structure, the AI must find and read the guide files related to that structure.
- Example triggers: login / logout → auth/login.md, auth/session.md; registration → auth/register.md, auth/email-verification.md; panel or table → ui/data-tables.md, security/data-isolation.md; form → forms/; email sending → emails/; personal data, cookies, agreements → legal/; .env or a new service → setup/; deploy → operations/deployment.md; queue / background job → operations/queues.md, operations/jobs.md; framework (package.json, composer.json, *.csproj, pyproject.toml, pubspec.yaml) → stack/framework-rules.md and the related stack/ file; mobile app → stack/mobile/.
- If a structure also requires other structures, the dependent structures must automatically be included in the scope of work (see Dependent Structures); the AI must report them as a short list and build them together unless the developer explicitly excludes them.
- In sections that depend on project type (individual, company based, invite-only), if it is unclear which section applies, the AI must ask once and write the answer into the rules file.

## Dependent Structures
- When a page or feature starts being used, the dependent structures needed for it to work completely must also be activated automatically; a half-finished flow (e.g., registration exists but no verification email) must not be left.
- When starting work, the AI must report the dependent structures in a single list; unless the developer says "I don't want this", all of them must be built, and excluded ones must be written into the rules file as deviations.
- If a dependent structure already exists in the project, it must not be rewritten; the existing one must be used.
- Registration → login, logout, session, email verification and verification email, email link confirmation page, forgot password and reset email, password changed notification, rate limit, bot protection, terms of use and privacy notice consent, consent record, account closure, retention period / cleanup task, audit log.
- Login → logout, session management, forgot password, rate limit, CSRF, secure cookie, unauthorized access redirect.
- Approved application / invitation → application received email, admin notification, approval / rejection email, invitation link and its expiry, pending application reminder, admin approval screen.
- Panel → role and permission control, data isolation, pagination / filtering / sorting in tables, loading and empty states, error pages, audit log, responsive layout.
- Form → server-side validation, field errors, submit lock, success / error notification, CSRF, rate limit (bot protection if public).
- Email sending → template layout, plain text version, sender domain verification (SPF, DKIM, DMARC), send failure logging, environment variables.
- File upload → type / size validation, storage, access control, image optimization, cleaning up the file of a deleted record.
- Personal data collection → privacy notice, explicit consent if required, retention period, account / data deletion request.
- Analytics / marketing tool → cookie consent, cookie policy.
- Payment → invoice / receipt email, refund process, distance sales agreement, webhook verification, idempotency.
- New external service → .env variable and its description, .env.example, error / timeout handling, cost note.
- New feature → system document and, if needed, rules file update.
- This list is an example; the AI must also derive other dependent structures from the links in the related guide files.

## Existing Code
- If the triggered structure was previously written outside the guide, the AI must briefly list the gaps in order of importance; fixes must be made with the developer's approval.
- Security vulnerabilities (e.g., storing passwords in plain text, missing CSRF protection) must be reported to the developer in all cases; other gaps must be mentioned only while working on the related structure.
- A deliberate developer decision that conflicts with the guide must be written into the rules file as a "deviation from the guide" with its justification and must not be asked again.

## Checking the Touched Structure
- When changing a file (new or existing project), the AI must determine which structure the file belongs to and apply the items of the related guide files both to the code it writes and to the existing structure in the file.
- The plugin supports this with a hook: the edited file is mapped to guide files by path and content patterns, and the text of the matching files is added to context automatically. The AI must not ignore this text.
- Items the existing code does not meet (e.g., a table without sorting or pagination) must be reported as a short list at the end of the task; fixes are made with the developer's approval.
- Since some files may not match the patterns, a project-wide check is done with the /cubernic-architect:audit command; in an audit every item of every triggered guide file must be checked one by one.

## Catching Mismatches
- The AI must always catch and briefly report situations that do not fit the project, contradict the project's own decisions or the guide, and that the developer has not noticed.
- Examples: adding an open registration form to an invite-only system; writing a query without data isolation in a company based panel; collecting personal data without a privacy notice / consent; using a library or service with an individual license in a commercial project; code that contradicts the port, data source or architecture decision in the rules file; building a second structure that does the same job.
- If the developer's request conflicts with a previous project decision, the AI must state the conflict before doing the work and ask which one will apply.
- The notification must be one sentence with a justification; the decision belongs to the developer, and an accepted deviation must be written into the rules file.
- A mismatch must be reported not only in the current task but also when noticed in files read during the task; however, no additional scanning must be done for this.

## Proportion
- The AI must read only the guide files related to the current task and must not scan the entire guide for every task.
- Suggestions must be short; long compliance reports that slow down the developer's work must not be prepared.
- Exception: if the developer asks for a project review / audit (/cubernic-architect:audit), the full report is the task itself.
