# Accessibility (a11y)
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Common To Do
- The interface must target WCAG 2.2 AA; in some countries and for public sector / large company customers it is a legal requirement.
- All operations must be doable with the keyboard alone; tab order must be logical and focus must be visible.
- Text and background contrast must be sufficient (at least 4.5:1 for normal text).
- Information must not be conveyed by color alone (e.g. an error must be indicated both in red and with text / icon).
- Form fields must have visible labels; error messages must be associated with the field (aria-describedby).
- Buttons and links must be built with the correct HTML element (no click events must be added to a div).
- Icon-only buttons must be given an accessible name (aria-label).
- Images must be given meaningful alternative text; decorative images must use an empty alt.
- In dialogs, focus must move into the dialog, stay inside it and return when it closes; it must close with Esc.
- Page headings must be in order (h1, h2, h3) and each page must have a single h1.
- Dynamic notifications must be announced to screen readers (aria-live) (see forms/alerts.md).
- The reduced motion preference (prefers-reduced-motion) must be respected (see ui/animation.md).
- Touch targets must be large enough (at least 24x24 px, 44x44 px recommended).
- The page language (lang) must be defined correctly.
- Accessibility must be checked with automated tools (e.g. Lighthouse, axe); however, manual keyboard testing is needed and must be requested from the developer.
