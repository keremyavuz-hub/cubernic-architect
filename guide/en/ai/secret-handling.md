# AI and Secrets
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Absolute Prohibitions
- The AI must never show, print, quote, summarize or reveal values in .env, .env.local, .env.production and similar environment files in the session.
- This prohibition applies even if the developer asks; the value already exists in the developer's own file and there is no need to bring it into the session.
- Secret values (API key, password, token, database connection URL, private key, webhook secret) must not be read into the AI's context; the file must not be read as a whole and must not be dumped to the screen with commands such as cat / head / grep.
- Secret values must not be written by the AI to any external service, web request, search query, issue / PR description, commit message, log file, document or memory file.
- Secret values must not be hard-coded into test scripts, sample code, the .env.example file or error messages.
- The AI must not ask the developer to paste a secret value into the chat; the developer must write values into the file themselves.
- If the developer accidentally pastes a secret value into the chat, the AI must not repeat or use the value and must suggest that the key be considered leaked and rotated.

## Allowed Checks
- The AI may only check whether a variable is defined, empty / filled, or matches the expected format; the output must contain only the variable name and filled / empty / valid / invalid information.
- If a format check is needed, not the value itself but its length or the type of its prefix (e.g., "test key or live key") must be reported.
- Application code must read secret values from environment variables; when writing code, the AI must use the variable name and must not need to know the value.

## Leak Prevention
- Reading environment files must be forbidden in the AI tool's permission settings (for Claude Code, in .claude/settings.json: "permissions": { "deny": ["Read(./.env)", "Read(./.env.*)"] }); .env.example can be kept outside this prohibition.
- Environment files and files containing secrets must not be added to context / indexing tools such as Context Mode; if added, they must be cleared with the developer's approval.
- If there is a chance of secret values appearing in command output (e.g., env, printenv, docker inspect, connection error messages), the output must be filtered or masked.
- Application logs, error tracking tools and audit logs must mask secret values (see security/secrets.md, operations/logging.md).
- Environment files must be in .gitignore; before committing, the AI must check that no secret value enters git.
- If a secret value is suspected to have leaked, the AI must immediately report it to the developer and suggest rotating the key on the relevant platform.
