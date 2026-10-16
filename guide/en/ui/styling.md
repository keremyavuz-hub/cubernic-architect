# Styling Rules (Tailwind and CSS)
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## General Rules
- Tailwind CSS must be used in interface designs.
- Styles must not be defined with the style attribute (style="..." or style={{...}}) inside HTML / JSX.
- <style> tags must not be written inside pages.
- All styles must be defined in CSS files and bundled during the build; a single minified CSS must be sent to the browser.
- Colors, spacing, fonts, shadows and border radii must be defined centrally in Tailwind theme variables (@theme in Tailwind v4); arbitrary color codes (such as #e8741f) must not be written in code.
- Dark theme and theme variables must be managed with CSS variables.

## Repeated Styles
- Class combinations repeated in multiple places (button, input, card, badge, form label) must be defined as component classes in a CSS file (e.g. .btn, .btn-primary, .input, .card inside @layer components).
- Component classes must be written with Tailwind's @apply directive or with theme variables.
- Long and hard-to-read class lists must be turned into a shared component class or a shared React component.
- Both a component class and a separate utility class list must not be used for the same look; there must be a single source.
- The developer must be reminded that Tailwind's own recommendation is not to abstract everything with @apply, and that utility classes can be used for one-off layout (flex, grid, spacing); the level of abstraction must be decided at the start of the project.

## Dynamic Values
- Values that change at runtime (progress bar width, user-selected color) must be given with a CSS variable and class instead of the style attribute (e.g. data-* attributes or Tailwind's arbitrary value classes).
- If there is no way other than the style attribute to provide a value (e.g. third-party component, animation library), only a CSS variable must be assigned, and the style itself must be written in the CSS file.
- Animations must be defined with @keyframes in the CSS file; writing styles with JavaScript must be limited to cases CSS cannot handle.

## Exceptions
- Inline styles are mandatory in email templates; email clients (Gmail, Outlook) partially or fully strip external and <head> CSS. Email templates are exempt from this rule.
- In email templates, styles must not be written by hand but generated via a template tool (React Email, CSS inlining tools such as juice) or a single layout function.
- Inline styles required by a third-party library are an exception; this must be noted with a comment in the code.

## CSS Quality
- Unused CSS must be purged during the build (Tailwind does this itself; additional CSS files must also be checked).
- !important must not be used; specificity issues must be solved by fixing the structure.
- Class names and theme variable names must not collide (e.g. text-muted colliding with --color-muted).
- Disabled states (:disabled), focus (:focus-visible), hover and aria states must be defined in component classes.
- Styles must be written mobile-first, and breakpoints must be consistent with Tailwind's standard breakpoints.
- Style files can be split by topic (base, components, animations) but must be imported from a single entry file.
