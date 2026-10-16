# Node.js Server (NestJS / Express / Fastify)
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## When To Use
- Must be applied if the project has a Node.js-based server other than Next.js (NestJS, Express, Fastify, Hono).
- A Node.js LTS version must be used; the version must be pinned with .nvmrc / the engines field.
- stack/languages/typescript.md must be applied for language rules.

## Structure
- In new projects, NestJS should be preferred for large applications that need structure, and Fastify or Hono for lightweight APIs; if Express is used, version 5 should be preferred.
- Layers must be separated: route / controller, service (business logic), data access (repository); business logic must not be written in controllers.
- Configuration must be validated with a schema at startup (e.g. Zod, @nestjs/config + validation); the application must not start if an environment variable is missing.
- Error handling must be done in a central error middleware / exception filter (see code/error-handling.md).
- Either ES modules (ESM) or CommonJS must be chosen and used consistently across the project.

## Security
- All inputs must be validated with a schema (Zod, class-validator + ValidationPipe whitelist / forbidNonWhitelisted, Fastify JSON Schema).
- Security headers must be added with helmet / @fastify/helmet (see security/headers.md).
- CORS must be configured with an allowlist.
- Rate limiting must be added (express-rate-limit, @nestjs/throttler, @fastify/rate-limit) (see security/rate-limit.md).
- Request body size must be limited.
- CSRF protection must be added for cookie-based sessions (see security/csrf.md).
- Behind a proxy, trust proxy must be set only for the known proxy (see security/client-ip.md).
- Against prototype pollution, object merges with user input (merge, Object.assign) must be used carefully; __proto__ and constructor keys must be rejected.
- Commands containing user input must not be run with child_process; if needed, execFile with an argument array must be used.
- User input in file paths must be validated with path.resolve + a root directory check (path traversal).
- Regular expressions on user input must be checked for ReDoS risk.
- If JWT is used, the algorithm must be pinned (alg: none must be rejected), tokens must be short-lived and a revocation mechanism must exist.
- npm audit and a lock file must be used; npm ci must be used in CI instead of npm install.
- Uncaught errors and promise rejections (unhandledRejection) must be logged and the process must be restarted in a controlled way.

## Performance
- The event loop must not be blocked: synchronous file operations, large JSON processing and heavy computation must not be done during requests; worker_threads or a queue must be used.
- A database connection pool must be used and its size tuned.
- Independent asynchronous tasks must be run in parallel with Promise.all.
- Large data must be processed with streams, not loaded entirely into memory.
- Response compression must be done in the reverse proxy or the application.
- On multi-core servers, multiple processes (PM2 cluster, container replicas) must be run.
- Logging must be done with an asynchronous, fast library (pino).

## Data
- The ORM / query library must be defined in one place (Prisma, Drizzle, TypeORM, Kysely, postgres).
- Parameter binding must be used in raw queries.
- Migrations must be versioned and run in the deploy flow (see database/migrations.md).

## Testing
- Unit tests must be written with Vitest / Jest, and API tests with supertest / Fastify inject.
- Database tests must be done on a separate test database or with Testcontainers.

## Deploy
- Must run with NODE_ENV=production.
- Restarts must be ensured with a process manager (systemd, PM2, Docker).
- SIGTERM must be caught; a graceful shutdown must be done by closing open requests and connections.
- The container image must be kept small with a multi-stage build and run as a non-root user.

## Common Mistakes
- Synchronous operations that block the event loop.
- Using unvalidated req.body.
- Not catching async errors without an error middleware.
- Opening a new database connection per request.
- Ignoring unhandled promise rejections.

## Recommended Packages
- NestJS, Fastify, Hono, Express 5.
- zod, class-validator: validation.
- helmet, cors, rate limit packages.
- pino: logging.
- BullMQ, pg-boss: queues (see operations/queues.md).
- Prisma, Drizzle, Kysely: data access.
