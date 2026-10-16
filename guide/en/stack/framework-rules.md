# Framework Rules
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Core Principle
- Whatever framework and language the developer works with, the AI must follow all of that system's security, development, performance, testing, deployment and maintenance rules.
- The other guide files say what must be done; framework files say how to do it in that system. Both must be applied together.
- If the framework has a built-in solution (CSRF, validation, ORM, queue, cache, authentication), it must be used; custom code doing the same job must not be written.
- The framework's built-in security protections must not be disabled or bypassed; if disabling is necessary, it must be approved by the developer with a justification.
- The folder structure, naming and code layout recommended by the framework must be followed (see code/architecture.md, code/naming.md).

## Detection and Version
- The AI must read the framework and its version from the project (e.g. package.json, composer.json, *.csproj, requirements.txt / pyproject.toml, Gemfile, go.mod).
- Code must be written for the major version installed in the project; APIs from older or newer versions must not be used.
- The AI's knowledge may be older than the installed version; when unsure, the framework's official documentation or the installed package's own documentation must be checked.
- If the version in use is end-of-life (EOL) or about to be, the developer must be notified.
- The framework and its version must be written in the project rules file.
- If the project has more than one framework (e.g. Next.js front end + Laravel API), each part must be developed with its own framework rules.

## What To Check For Each Framework
- Security: authentication, authorization, CSRF, XSS (template escaping), SQL injection (ORM / parameterized queries), mass assignment, file uploads, secret variables, security headers, hiding error details in production, debug mode being off.
- Development: recommended project structure, layers, dependency injection, validation, error handling, logging, configuration and environment separation.
- Performance: query optimization and N+1, cache layers, server / client separation, static generation, bundle size, background jobs, connection pooling.
- Data: ORM, migrations, seeds, transaction usage.
- Testing: the framework's test tools and recommended test layout.
- Deploy: production build, environment variables, cache warming, health checks, zero-downtime switchover.
- Maintenance: upgrade path, deprecated features, security advisories.

## If There Is No Framework File
- If the guide has no separate file for the framework in use, the AI must cover the headings above using that framework's official documentation and built-in solutions.
- In that case the developer must be told that the framework file is missing, and adding what was learned in the project to the guide as a new framework file should be suggested.

## Writing Framework Files
- Each framework file must state at the top which major version it was written for.
- File sections must be in the same order: When To Use, Structure, Security, Performance, Data, Testing, Deploy, Common Mistakes, Recommended Packages.
- Framework files must not repeat the general guide files; they must link to them.
