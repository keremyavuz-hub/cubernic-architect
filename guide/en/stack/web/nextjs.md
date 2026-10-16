# Next.js
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## When To Use
- Must be applied if the next package is in package.json.
- This file is written for Next.js 15 / 16 and the App Router; in projects using the Pages Router, App Router-specific items must be adapted.
- The installed version must be read from package.json; version-specific changes (e.g. proxy.js instead of middleware.js, async params / cookies / headers) must be checked in the official upgrade notes.
- stack/languages/typescript.md must be applied for language rules.

## Structure
- The App Router folder layout must be used: routes under app/, shared components under components/, server-side business logic under lib/.
- Server Components must be used by default; "use client" must only be added to the smallest component that needs interactivity, browser APIs or state.
- Only necessary and serializable data must be passed as props to client components; whole record objects must not be carried to the client.
- Server-only code (database, modules using secret keys) must be marked with the "server-only" package to prevent it from accidentally entering the client bundle.
- Data-mutating operations must be done with a Server Action or Route Handler; business logic must live under lib/, and the action / handler must only be the entry point.
- layout, page, loading, error, not-found files must be used for their purpose; every route group must have an error.js and, where appropriate, a loading.js.
- Route groups ((group)) and private folders (_folder) must be used for organization.
- Common auth / redirect checks may be done in the proxy (middleware) file; however, authorization must not be left only to the proxy and must be repeated in the data access layer.
- Environment variables prefixed with NEXT_PUBLIC_ are embedded in the client bundle; a secret must never be defined with the NEXT_PUBLIC_ prefix.

## Security
- Server Actions are public POST endpoints; session and authorization checks must be redone inside every action.
- Server Action inputs must be validated with a schema (e.g. Zod); hidden fields coming from the client (id, company id, price, role) must not be trusted.
- In addition to Next.js's built-in Origin check for Server Actions, CSRF / Origin checks must be done in state-changing Route Handlers (see security/csrf.md); serverActions.allowedOrigins must not be widened unnecessarily.
- Authorization must not rely on proxy / middleware; middleware bypass vulnerabilities (e.g. CVE-2025-29927) have occurred in the past, so the check must also be done in the data access layer.
- A data access layer (DAL) must be created; session verification and company filtering must be done centrally in this layer (see security/data-isolation.md).
- Data returned from server to client must not contain sensitive fields (password hash, token, internal notes); DTOs / selected fields must be returned.
- React taint APIs (experimental_taintObjectReference) may be considered to prevent sensitive objects from passing to the client. (Optional)
- dangerouslySetInnerHTML must only be used with sanitized HTML (e.g. DOMPurify / sanitize-html).
- next/image remotePatterns must only allow trusted domains; the '**' wildcard must not be used (image optimization SSRF and cost risk).
- Security headers must be defined with next.config headers(); if needed, a nonce-based CSP must be generated in the proxy (see security/headers.md).
- Cookies must be written with cookies() set httpOnly, secure, sameSite.
- If a user-supplied address is used in redirect(), open redirects must be prevented and only internal paths allowed.
- Internal error details must not be shown on error pages and in error.js; in production they must be logged with the digest.
- Source maps (productionBrowserSourceMaps) must not be published publicly unless needed.
- poweredByHeader must be disabled.

## Performance
- Data must be fetched on the server in the component that uses it; independent requests must be run in parallel with Promise.all, without creating waterfalls.
- Repeated data calls within the same request must be deduplicated with React cache().
- Caching behavior must be chosen deliberately: in Next.js 15+, fetch and routes are not cached by default; pages that can be static must be made static / ISR, and user-specific pages must stay dynamic.
- If the version in use has cache directives such as "use cache", cacheLife, cacheTag, they must be used according to the official documentation.
- When data changes, the related cache must be cleared with revalidatePath / revalidateTag (see code/caching.md).
- Slow sections must be wrapped with Suspense, and the rest of the page must be sent first via streaming.
- Images must be loaded with next/image and fonts with next/font; the LCP image must be given priority / fetchPriority.
- Heavy client libraries (charts, maps, editors, 3D) must be loaded on demand with next/dynamic (see ui/animation.md).
- Third-party scripts must be loaded with next/script using an appropriate strategy (afterInteractive, lazyOnload).
- Bundle size must be checked regularly with @next/bundle-analyzer.
- The prefetch behavior of the Link component must be reviewed on pages with many links.
- In serverless environments the database connection pool must be tuned carefully; a new connection must not be opened per request.
- Work done after the response with after() (logging, analytics) must not extend response time; long jobs must be queued (see operations/queues.md).

## Data
- The ORM or query layer must be defined in one place (e.g. Drizzle, Prisma, postgres / pg); the database client must be kept as a global singleton so it does not multiply on hot reload in development mode.
- Migrations must be versioned with the ORM tool or SQL files (see database/migrations.md).
- Multiple writes inside a Server Action must be done in a single transaction.

## Forms
- Forms must be built with Server Action + useActionState; pending state must be shown with useFormStatus or isPending (see forms/buttons-loading.md).
- useOptimistic should be used if an optimistic UI is needed. (Optional)
- Server validation errors must be returned per field and form values must be preserved (see forms/validations.md).

## Testing
- Vitest or Jest must be used for unit tests and Playwright for end-to-end tests.
- Server Action and DAL functions must be testable by calling them directly.
- End-to-end tests should be preferred for async Server Components.

## Deploy
- next build must be error-free with its warnings reviewed; type and lint errors must not be ignored during build (ignoreBuildErrors must not be used).
- If running on your own server, output: "standalone" must be used, running behind a process manager and reverse proxy (Caddy / Nginx).
- If multiple instances run, cache and ISR data must be shared (cacheHandler) or the inconsistency must be accepted.
- With multiple instances, the Server Action encryption key (NEXT_SERVER_ACTIONS_ENCRYPTION_KEY) and build ID must be kept fixed.
- Static files and _next/static must be served with long-term caching.
- If Vercel is used, function duration, region and cost limits must be checked.

## Common Mistakes
- Forgetting the authorization check in a Server Action and only hiding the button in the UI.
- Defining a secret key with NEXT_PUBLIC_.
- Making the whole page "use client".
- Putting user-specific data in a static / shared cache.
- Causing hydration errors with values that differ between server and client (Date, Math.random, time zone).
- Fetching data inside useEffect; data must be fetched on the server.
- Not adding an error boundary (error.js).
- Opening remotePatterns to all domains.

## Recommended Packages
- zod: input validation.
- server-only: preventing server code from leaking to the client.
- Auth.js, Better Auth, a Lucia-like approach or your own session layer (see auth/session.md).
- Drizzle ORM, Prisma, postgres: data access.
- next-intl: multilingual setup (see code/i18n.md).
- @next/bundle-analyzer: bundle size analysis.
- @sentry/nextjs: error tracking (see operations/error-tracking.md). (Optional)
