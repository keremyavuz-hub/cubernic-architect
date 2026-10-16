# SEO and Sharing
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Public Pages
- Every page must have its own unique title and description (meta description).
- Open Graph and Twitter card tags and a share image must be defined for sharing.
- Every page's canonical address must be specified; the same content must be prevented from appearing at multiple addresses.
- Sitemap.xml and robots.txt must be created and added to search engine tools (Google Search Console).
- Structured data (JSON-LD: Organization, Product, BreadcrumbList, Article) must be added for suitable content.
- URLs must be readable, permanent and lowercase; changed URLs must be 301 redirected.
- Content must be rendered on the server side; content rendered only on the client may not be indexed.
- Page speed and Core Web Vitals (LCP, INP, CLS) must be monitored (see ui/media-optimization.md, ai/performance.md).
- Multilingual sites must use hreflang tags (see code/i18n.md).
- The 404 page must be meaningful and return the correct status code.

## Panel / Login-Required Areas
- Panel, login, registration and email link pages must not be indexed (noindex, robots.txt).
- Test / preview environments must be fully closed to search engines (noindex + password or IP restriction).
