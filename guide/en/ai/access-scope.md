# AI Access Scope
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Outside the Project Directory
- The AI must not leave the project directory (parent folders, sibling projects, home directory, system folders) without the developer's permission, and must not read, list or search files there.
- If access to a file outside the project is needed, the AI must first say which file will be accessed and why, and get permission.
- Permission is valid only for the stated file and the stated task; after the task is done, no independent research, browsing or additional reading must be done in the same place.
- Permitted external paths defined in the rules file (e.g., a shared data source) must be used only for the defined purpose.
- The AI's own workspace (temporary folder, its own memory files) is outside this restriction.

## Unnecessary Reading
- The AI must not read files it was not told about and that are unrelated to the task.
- Reading must be limited to the files the task requires; files must not be opened out of curiosity, for general scanning, or because "they might be needed".
- If the project as a whole needs to be understood, documents (rules file, system document) must be read first, and source code must be explored only as much as needed.
- Time and resources must not be wasted; the same file must not be read repeatedly, and research that will not contribute to the result must not be done.
