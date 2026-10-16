# Color and Theme
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- Colors must be defined as variables (tokens) in a single place.
- Utility class names must not collide with color variable names (e.g. text-muted-foreground instead of text-muted).
- If Tailwind v4 is used, it must be taken into account that the translate property is applied separately in animations; only the moving axis must be written inside keyframes.
- Images must be resized to the size at which they will be used and served in a modern format (webp).
