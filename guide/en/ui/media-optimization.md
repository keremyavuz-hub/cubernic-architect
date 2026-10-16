# Image and Media Optimization
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Images
- Images must be resized to the largest size at which they will be displayed; original large files must not be sent to the page.
- Photos must be served in modern formats (AVIF, WebP); if a fallback format is needed for old browsers, it must be provided with the picture tag.
- Logos, icons and simple drawings should be SVG where possible; SVG files must be optimized (e.g. SVGO).
- Multiple sizes must be provided with srcset and sizes for different screen sizes.
- Every image must specify width and height (or aspect-ratio); there must be no layout shift (CLS) while the page loads.
- Images in the off-screen part of the page must be lazy loaded (loading="lazy"); the main image first visible on the page must be loaded with priority (fetchpriority="high").
- Images must have meaningful alt text; decorative images must use alt="".
- If Next.js is used, the image optimization component (next/image) should be preferred; remote image permissions must be limited to only the needed domains.
- Images uploaded by users must be resized and compressed on the server, and metadata (EXIF, location info) must be removed.
- Image processing must be done in the background or in an image service, not during the request.
- Images must be served with long-term caching and through a CDN; the file name must change when the content changes.

## Video and Animation Files
- Video files must be served in compressed formats (MP4 / H.264, WebM) and at display size.
- Autoplaying background videos must be muted, short and small; they must be paused on mobile and under the "reduce motion" preference.
- Video or animated WebP must be used instead of GIF.
- A cover image (poster) must be provided for videos; the video must not be downloaded as soon as the page opens (preload="none" or "metadata").
- For long videos, a streaming service (Cloudflare Stream, Bunny Stream, YouTube) should be suggested.

## Fonts
- Fonts must be self-hosted; only the used weights and character subset (Latin + Turkish characters) must be loaded.
- The WOFF2 format must be used.
- font-display: swap must be used, and the main font must be preloaded (preload).
- In Next.js, next/font can be used; it downloads the font itself and serves it locally.
- Variable fonts should be preferred when multiple weights are needed.

## Icons
- Only the used icons must be imported from icon libraries (e.g. individual imports from lucide-react); the entire icon set must not enter the bundle.
- SVG icons must be used instead of icon fonts.

## Measurement and Checks
- Page weight, image sizes and Core Web Vitals values must be measured with Lighthouse or PageSpeed Insights.
- A size budget per image should be set (e.g. main image under 200 KB, small images under 50 KB). (Recommended)
- No new image added to the project must be committed without being optimized.

## Recommended Platforms
- Squoosh, sharp or ImageMagick can be used to pre-optimize images.
- For dynamic image resizing and format conversion, Cloudflare Images, Cloudinary, imgix or Bunny Optimizer can be suggested; the cost must be stated to the developer.
