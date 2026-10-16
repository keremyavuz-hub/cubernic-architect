# AI Development Environment Setup
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## General Rules
- AI tools, plugins, skills, MCP servers and hooks used in the project must be listed in a project document together with installation instructions (e.g., docs/GELISTIRME-ORTAMI.md).
- For each tool, the following must be written: what it does, the install command, how to verify the installation, whether it is installed at project or user level, its version, its license, and whether it sends data externally.
- A developer newly joining the project or a new AI session must be able to set up the same environment using this document.
- Before installing third-party plugins, skills and MCP servers, their source must be read, their publisher and license must be checked, and the installed version must be recorded; since they give the AI command execution and file access, they carry supply chain risk.
- The AI must not install a tool on its own; it must suggest the installation, state the justification and cost, and install it with the developer's approval.
- Secret keys of installed tools must be kept in environment variables and must not be written into configuration files and added to git.

## Context Mode (Context Protection)
- Context Mode is a plugin that processes the large outputs of commands the AI runs, files it reads and web pages in an isolated environment and returns only the result without filling the context; it prevents the AI's memory from filling up and its quality from dropping in long sessions: https://github.com/mksglu/context-mode
- In Claude Code it must be installed from the plugin marketplace: first run /plugin marketplace add mksglu/context-mode, then /plugin install context-mode@context-mode, and restart Claude Code (or /reload-plugins).
- Installation requires Claude Code version 1.0.33 or higher (claude --version).
- After installation, all checks passing must be verified with the /context-mode:ctx-doctor command.
- The plugin registers hooks automatically; the AI must perform reading, searching, testing, building, git history and web requests with the ctx_execute, ctx_execute_file, ctx_batch_execute, ctx_fetch_and_index and ctx_search tools.
- Bash must be used only for small-output tasks: moving / creating files (mkdir, mv, cp), git add / commit, echo.
- Files to be edited must be read with the normal read tool; context mode is for analysis, not for editing.
- At the start of each session, before responding to the user's first message, the context-mode skill must be loaded.

## Automatic Installation and Running in Every Session
- Plugins required by the project (e.g., Context Mode) must be defined in the project-level .claude/settings.json file and this file must be added to git; this way every developer and every AI session opening the project is directed to install / enable the same plugin automatically.
- The plugin marketplace must be defined with the extraKnownMarketplaces key and the plugin itself with the enabledPlugins key (e.g., "extraKnownMarketplaces": { "context-mode": { "source": { "source": "github", "repo": "mksglu/context-mode" } } } and "enabledPlugins": { "context-mode@context-mode": true }).
- Instructions that must run in every session must be delivered to the AI at session start with a project-level SessionStart hook (e.g., "load the context-mode skill before responding to the user's first message").
- The same instruction must also be written into the project rules file (CLAUDE.md / AGENTS.md); the rules file is read even if the hook does not run.
- If the plugin is not installed, the AI must notice this and suggest the install command to the developer; it must not install the plugin itself without the developer's approval.
- When a developer opening the project for the first time grants folder trust, they must accept the plugin install suggestion and verify with /context-mode:ctx-doctor after installation.
- If the same plugin is already defined in user-level settings (~/.claude/settings.json), the project setting does not conflict; the project setting must remain as a safeguard for new developers and new computers.
- The list of required plugins and installation steps must also be written in the project's development environment document (e.g., docs/GELISTIRME-ORTAMI.md).
- Where hooks are not supported or only the tools are wanted, it can be installed as MCP: claude mcp add context-mode -- npx -y context-mode (in this case there is no automatic routing).
- Usage statistics can be viewed with /context-mode:ctx-stats; updates must be done with /context-mode:ctx-upgrade.
- Its license is Elastic License 2.0 (not open source); internal use is fine, but the developer must be told that it cannot be offered to others as a service.
- The /context-mode:ctx-insight command redirects to a hosted dashboard; before using features that send data externally, which data is sent must be checked.
- Indexed content is kept in a persistent knowledge base; files containing secrets must not be indexed and, if needed, must be cleared with /context-mode:ctx-purge (this operation is irreversible and must be done with the developer's approval).

## Skills
- Skills give the AI a ready-made set of instructions and tools for a specific task (e.g., security audit).
- Skills can be installed with the Skills CLI: npx skills add <repo-url> --skill <skill-name>; if they will be used in all projects, --global must be added.
- Recommended security audit skill: Cloudflare security-audit (see ai/security-audit.md).
- Skills installed at project level (.claude/skills/) can be added to git; those installed at user level must be installed separately on each developer's computer.
- The installed skill's SKILL.md file and the scripts it runs must be read; if they contain unexpected network access, file deletion or reading of secrets, the skill must not be installed.
- A project skill can be written for recurring project-specific tasks (e.g., releasing, taking a database backup, auditing). (Optional)

## MCP Servers
- MCP servers give the AI access to external systems (database, GitHub, browser, documentation); only servers from trusted publishers must be installed.
- Each MCP server must be given the least privilege (e.g., a read-only user for the database, a token with access only to the relevant repository for GitHub).
- An MCP server that connects to the live database or live systems with write permission must not be installed.
- Project-level MCP configuration (.mcp.json) can be added to git, but it must not contain secret values; keys must be read from environment variables.
- Unused MCP servers must be removed; each server enlarges the AI's tool list.

## Project Rules File
- Every project must have a rules file for the AI: CLAUDE.md for Claude Code, AGENTS.md for other tools, .cursor/rules for Cursor.
- The rules file must include: the project's purpose and type, run commands (who starts the server), ports, data sources, security rules, deletion prohibitions (see ai/destructive-actions.md), commit / push rule, design rules and a link to this guide.
- The rules file must be kept short and up to date; details must be given via links to guide files.
- The rules file must be updated as the project changes and kept in git.

## Permission Settings and Hooks
- In the AI tool's permission settings (.claude/settings.json for Claude Code), destructive commands must be configured to require approval or be forbidden (e.g., rm -rf, DROP, TRUNCATE, git push --force, docker volume rm).
- Frequently used and safe commands (test, build, git status) can be added to the allow list to run without approval. (Optional)
- Hooks are scripts that run on every tool use by the AI; third-party hooks must be read before installation.
- Project hooks (e.g., pre-commit tests, secret key scanning) should be kept in git and documented. (Recommended)

## Memory and Documents
- The AI's persistent memory (Claude Code memory) must be used to hold personal preferences and working rules; project information must be kept in documents in git (system document, work log, this guide).
- When a rule in memory changes (e.g., whether a tool is used or not), the old rule must be deleted or updated; conflicting rules must not be left behind.

## Other AI Tools
- If the project is developed with more than one AI tool (Claude Code, Cursor, Codex, Gemini CLI), common rules must be kept in a tool-independent file such as AGENTS.md, and tool-specific files must link to it.
- For other tools supported by Context Mode and similar plugins, installation instructions must be taken from the plugin's own documentation.
