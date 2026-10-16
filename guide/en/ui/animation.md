# Animation, Canvas and Performance
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Not Freezing the Screen
- Every canvas, WebGL, 3D or animated structure must be developed so that it does not freeze the page, the browser or the user's computer; the work must not be considered done until this is tested.
- Animation must not keep the main thread busy for long; work done in a single frame must not exceed 16 ms (60 fps) or 33 ms (30 fps), and long tasks over 50 ms must not occur.
- The animation loop must be built with requestAnimationFrame, not setInterval or setTimeout.
- The frame rate must be deliberately limited (e.g. 30 fps); drawing must not happen on every requestAnimationFrame call, and frames must be skipped based on elapsed time.
- The time spent per frame (delta) must be capped; when a tab returns after staying in the background for a long time, the animation must not experience a big jump or computation explosion in a single frame.
- Animation must not delay user interaction (clicking, typing, scrolling); there must be no stutter while typing into form fields and the INP value must stay good.
- No heavy computation must be done in mouse / touch events; events must only record the latest position, and computation must be done once per frame in the draw loop.
- Animation must not hold up loading when the page first opens; heavy libraries (three.js etc.) must be loaded with dynamic import after the content is visible.
- If scene setup (shader compilation, texture loading, geometry creation) freezes the main thread in one go, it must be split into parts or idle time (requestIdleCallback) must be used.
- Heavy computations (physics, particle simulation, large data) should be moved to a Web Worker where possible, and drawing to a Worker with OffscreenCanvas where possible. (Recommended)

## Pausing and Releasing Resources
- When the tab is hidden (visibilitychange), the animation must be stopped completely.
- When the canvas is not in the visible area of the screen (IntersectionObserver), the animation must be stopped.
- When a screen covering the animation (e.g. contract panel, modal) opens, the animation behind it must be stopped.
- If the user's reduced motion preference (prefers-reduced-motion) is on, the animation must be stopped or switched to a static image.
- When the component unmounts, requestAnimationFrame must be cancelled, event listeners and timers must be removed, WebGL resources (geometry, texture, material, shader, render target) must be disposed and the context must be released (forceContextLoss).
- Old canvases and contexts must not accumulate during page transitions and hot reload; the number of simultaneously open WebGL contexts must be checked.

## Quality and Adaptivity
- The pixel ratio must be limited (e.g. at most 1 or 1.5); full resolution on high-resolution screens multiplies GPU load.
- The WebGL context must be opened with a low-power preference (powerPreference: 'low-power'), and unnecessary features (antialias, preserveDrawingBuffer) must be kept off.
- Frame time should be measured; if the device cannot keep up, quality should be lowered automatically (pixel ratio, particle count, effect layers). (Recommended)
- A simplified version must be offered on low-power devices, on mobile and in battery saver mode.
- The number of loops and noise layers in shaders must be kept limited; no heavy per-pixel computation must be done.
- Invisible objects must be removed from the draw loop; no needless computation must be done for hidden objects.

## Memory and Garbage Collection
- No new object, array or vector must be created every frame inside the draw loop; objects must be created in advance and reused.
- Periodic stutters caused by the garbage collector must be checked in the Performance panel.
- Memory usage must not grow over time on a page left open for a long time.

## Errors and Fallback
- If WebGL is not supported, the context cannot be created or the context is lost (webglcontextlost), the page must not crash; a static image or simple background must be shown.
- An animation error must not affect the rest of the page (forms, buttons); the animation component must run inside its own error boundary.
- If the animation content is decorative from an accessibility standpoint, it must be hidden from screen readers (aria-hidden).

## Testing Method
- When development of an animated page is finished, a recording must be taken in the browser's Performance panel, and long tasks and frame times must be examined.
- Low-power device conditions must be tried with CPU throttling (e.g. 4x / 6x throttling).
- The page must be left open for at least 15–30 minutes and it must be checked that memory and CPU usage do not grow and the browser does not slow down.
- The tab must be sent to the background and brought back to check that the animation stops and resumes correctly.
- It must be checked that there is no stutter by typing into forms and scrolling the page while the animation is running.
- Total resource usage must be checked by opening the same page in multiple tabs.
- It must be checked that no accumulated canvases or contexts remain after page transitions and back / forward navigation.
- Heating and battery consumption should be checked on a mobile device. (Recommended)

## General Rules
- Deprecated library APIs must not be used, and console warnings must be resolved (e.g. performance.now() instead of THREE.Clock).
- Mouse-following rings, circles and swirl effects that always spin in the same direction must not be used.
- Animations must be designed to be consistent with the brand and design language, simple and non-distracting.
- The value an animation adds to the page must be weighed against its resource cost; if needed, a static image or CSS animation should be suggested.
- Simple motions (fade, slide, float) must be done with CSS animations instead of JavaScript and canvas; only the transform and opacity properties must be animated.

## Lesson (Example Project)
- In one project, a three.js background animation froze the browser after a while; the causes were unreleased WebGL contexts, unlimited frame rate, high pixel ratio and hidden objects continuing to be drawn. Fix: 30 fps limit, pixel ratio 1, low-power preference, removing hidden objects from the loop and forceContextLoss on unmount. These checks must be applied from the start in every animation.
