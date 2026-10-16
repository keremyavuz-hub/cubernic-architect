# Guide Maintenance, Versioning and Placement in the Project
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Version and Changelog
- The guide must have a version number, and it must be kept in .claude-plugin/plugin.json.
- Every change must be written to the repository root CHANGELOG.md with date, version and a short description.
- Rule changes that affect existing projects (e.g., a new mandatory security rule) must be marked separately.
- Every project must write the guide version it uses in its rule file (CLAUDE.md / AGENTS.md).

## Placement in the Project
- The guide must be added to the project as a cubernic-architect/ folder; a method must be chosen and written in the rule file:
- Copying: the simplest way; updates are moved manually. (Recommended, for small projects)
- Git submodule or subtree: updating from a single source; if the team is experienced with git.
- Project-specific changes must not be written to the guide files but to the project's own documents or the "deviations from the guide" section of the rule file; this avoids conflicts when the guide is updated.
- The rule file must state that the AI must read the guide and that README.md is the entry point.

## Updating
- When the guide is updated, the AI must compare the new items in the changelog with the project and briefly report the affected structures to the developer; the decision to apply them belongs to the developer (see ai/guide-activation.md).
- Lessons learned in a project that are also useful to other projects must be added to the guide in the same format.

## Writing Rules
- Every file must have this structure: title, fixed intro paragraph, section headings, items starting with "-" and phrased as "... must ... / ... should ...".
- Optional items must end with (Optional), recommended ones with (Recommended).
- Items that vary by project type must be split into "Common To Do", "If Individual User System", "If Company / Customer Based Panel", "If Invite-Only System" sections.
- Topics where a ready-made service can be suggested must have a "Recommended Platforms" section.
- Bold text, tags and nested items must not be used.
- A new file must be added to the README.md index with a short description.
