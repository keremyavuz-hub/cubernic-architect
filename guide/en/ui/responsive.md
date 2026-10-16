# Responsive Design
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## General Rules
- Every page and component must be developed to work properly on phone, tablet, laptop and wide screens; the work must not be considered done without a responsive check.
- Design must be written mobile-first; base styles must be for small screens, and large screen styles must be added with breakpoints.
- Breakpoints must be defined in a single place in the project and be consistent with Tailwind's standard breakpoints (sm 640, md 768, lg 1024, xl 1280, 2xl 1536).
- No horizontal scrollbar must appear on the page at any width.
- Flexible units (%, fr, rem, min(), max(), clamp()) must be used instead of fixed pixel widths.
- The page head must have the correct viewport setting (width=device-width, initial-scale=1); user zoom must not be blocked.
- If a component changes based on its own container's width, container queries should be used. (Recommended)

## Widths To Test
- Every page must be checked at least at these widths: 320 (small phone), 375 / 390 (common phone), 768 (tablet portrait), 1024 (tablet landscape / small laptop), 1280 and 1440 (laptop / desktop), 1920 and above (wide screen).
- Phones in landscape orientation must also be checked, especially on pages using full-screen height.
- Content must remain usable when browser zoom is increased to 200% (accessibility).
- In addition to the developer tools device view, testing should also be done on a real phone where possible.

## Layout
- Card grids must reduce the column count based on screen width (e.g. 6 / 3+3 / 2+2+2 / 1); a single card must not be left alone on a row.
- Two-pane layouts (e.g. form on the left, image / animation on the right) must collapse to a single column on small screens; the decorative pane must be hidden or shrunk on mobile.
- The sidebar must turn into a collapsible menu on mobile, and background scrolling must be locked when it opens over the content.
- On small screens, tables must either be inside a horizontally scrollable container or turn into a card view; the entire page must not scroll horizontally.
- Modals and panels must be shown full-screen or as a bottom sheet on mobile.
- Badges, button groups and texts must wrap to the next line or be shortened when they do not fit; they must not overlap.
- Font sizes must scale with screen size; headings must not overflow on small screens (clamp() is recommended).
- On wide screens, text line length must be limited for readability (e.g. max-w-prose).

## Overflow and Long Content
- Long words, email addresses, domains, addresses and codes must not overflow their container (break-words, break-all or truncate must be used).
- The full text of truncated texts must be viewable when needed (title attribute or tooltip).
- User-entered content (company name, product name) must be tested at its longest.
- In languages with long words such as Turkish, button and menu texts must be checked on narrow screens.
- Items inside flex and grid must be checked for overflow caused by a missing min-w-0.

## Touch Screens
- Clickable elements must be large enough to press comfortably with a finger (at least 44 x 44 px) and have enough space between them.
- There must be no functions visible only on mouse hover; the same function must be reachable by tapping on touch screens.
- Tooltips and dropdown menus must be openable and closable by tapping.
- Scrolling, dragging and swipe gestures must not block the page's normal scrolling.

## Mobile Browser Specifics
- Form field font size must be at least 16 px; otherwise iOS Safari zooms the page when the field is tapped.
- Form fields must open the correct keyboard type (type="email", type="tel", inputmode="numeric").
- When the mobile keyboard opens, the active form field and the submit button must remain visible.
- For full-screen height, dynamic units (100dvh, 100svh) must be used instead of 100vh; the mobile browser address bar must not cut off content.
- On notched and rounded-corner screens, safe area insets (env(safe-area-inset-*)) must be taken into account.
- Fixed / sticky top and bottom bars must not cover too large a part of the content on small screens.

## Images and Media
- Images must not overflow their container (max-width: 100%) and must keep their aspect ratio.
- Small images must be sent to small screens (srcset and sizes); see ui/media-optimization.md.
- Heavy animations and background videos must be simplified or stopped on mobile.

## Checklist
- A responsive check must be done after every new page and every UI change.
- When the AI finishes UI work, it must state which widths it checked, and if it could not check, it must state that clearly.
- If the AI cannot check in a browser, it must verify that responsive classes, overflow safeguards and mobile behaviors exist in the code and write to the developer which widths they should look at.
