# ASP.NET Core
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## When To Use
- Must be applied if a *.csproj file in the project uses the Microsoft.NET.Sdk.Web SDK.
- This file is written for .NET 8 / 9 / 10; long-term support (LTS) versions should be preferred, and the target framework (TargetFramework) must be read from the csproj.
- stack/languages/csharp.md must be applied for language rules.

## Structure
- The project must be split into layers (e.g. Api / Web, Application, Domain, Infrastructure); in small projects a vertical slice (feature folder) structure may be preferred.
- Dependencies must be registered with the built-in DI; lifetimes (Singleton, Scoped, Transient) must be chosen correctly; a Scoped service (e.g. DbContext) must not be injected into a Singleton.
- Configuration must be read with the Options pattern (IOptions<T>, ValidateOnStart) and validated at startup.
- Either Minimal API or Controllers must be chosen and used consistently across the project.
- Long-running background work must be done with BackgroundService / IHostedService or a queue library.
- Development secrets must be kept in User Secrets, and in production in environment variables or a secret vault (Azure Key Vault etc.); secrets must not be written into appsettings.json.

## Security
- ASP.NET Core Identity, OpenID Connect or JWT Bearer must be used for authentication; a custom password hashing algorithm must not be written.
- Authorization must be policy-based ([Authorize(Policy = ...)], RequireAuthorization); the default policy (FallbackPolicy) must require authentication.
- Resource-based authorization (is the user the owner of a record) must be checked with IAuthorizationService.
- Antiforgery tokens must be used in Razor Pages / MVC forms; antiforgery validation must also be done on API endpoints with cookie authentication.
- Overposting in model binding must be prevented; entities must not be used directly as input models, DTOs / ViewModels must be used.
- Inputs must be validated with DataAnnotations or FluentValidation.
- In EF Core, FromSql / FromSqlInterpolated must be used instead of FromSqlRaw; user input must not be concatenated into raw SQL.
- Razor escapes automatically; Html.Raw must only be used with sanitized HTML.
- Rate limiting must be done with the built-in RateLimiter middleware (see security/rate-limit.md).
- HTTPS redirection and HSTS must be enabled in production.
- Behind a proxy, ForwardedHeaders middleware must be configured only for known proxies (see security/client-ip.md).
- CORS policies must be defined with explicit domains; AllowAnyOrigin and AllowCredentials must not be used together.
- DeveloperExceptionPage must be off in production; errors must be returned in ProblemDetails format without details.
- In a multi-server setup, Data Protection keys must be stored in a shared, persistent location; otherwise cookies and antiforgery tokens become invalid.
- Cookies must be set HttpOnly, Secure, SameSite.
- dotnet list package --vulnerable must be run regularly.

## Performance
- I/O operations must be done with async / await; blocking calls with .Result or .Wait() must not be made (the thread pool gets exhausted).
- HttpClient must be created with IHttpClientFactory; new HttpClient() must not be done per request.
- In EF Core, AsNoTracking must be used for read-only queries; only the needed columns must be fetched with Select.
- Relations must be loaded deliberately with Include; lazy loading must be kept off and N+1 prevented; AsSplitQuery should be considered for multiple Includes.
- Compiled queries (EF.CompileQuery) may be considered for frequently used queries. (Optional)
- Response compression, Output Caching / HybridCache and distributed cache (Redis) should be used as needed (see code/caching.md).
- DbContext pooling (AddDbContextPool) should be considered under high traffic.
- Large files and responses must be processed with streams.
- Native AOT and trimming should only be considered in compatible projects. (Optional)

## Data
- EF Core migrations must be versioned; in production they must be applied in the deploy step with a SQL script or migration bundle instead of automatic Migrate() at application startup.
- Data-losing migrations must not be applied without approval (see database/migrations.md).
- Concurrency tokens (RowVersion / xmin) must be used for concurrency (see code/idempotency.md).
- A global query filter must be used for company-scoped data (see security/data-isolation.md).
- Multiple writes must be done with a single SaveChanges or an explicit transaction.

## Testing
- Unit tests must be written with xUnit / NUnit, and integration tests with WebApplicationFactory.
- Database tests must be done with the real database engine (Testcontainers); the InMemory provider should not be preferred due to behavior differences.
- Nullable warnings and analyzers (TreatWarningsAsErrors) should be enabled in the build. (Recommended)

## Deploy
- Must be built with dotnet publish -c Release; ASPNETCORE_ENVIRONMENT=Production must be set in production.
- Kestrel must run behind a reverse proxy (Nginx / Caddy / IIS / YARP).
- Health checks (AddHealthChecks, MapHealthChecks) must be defined (see operations/uptime-incidents.md).
- Logging must be structured with ILogger and centrally collected with Serilog or OpenTelemetry.
- Container images must be built from official small images (chiseled / alpine) and with a non-root user.

## Common Mistakes
- Using .Result in async code.
- Creating a new HttpClient per request.
- Using an entity directly as API input / output.
- Injecting DbContext into a Singleton service.
- Not sharing Data Protection keys across multiple servers.
- Writing secrets into appsettings.json.
- AllowAnyOrigin + AllowCredentials.

## Recommended Packages
- ASP.NET Core Identity, Microsoft.Identity.Web: authentication.
- EF Core, Dapper: data access.
- FluentValidation: validation.
- Serilog, OpenTelemetry: logging and tracing.
- Hangfire, MassTransit, Quartz.NET: background jobs and queues (see operations/queues.md).
- Polly / Microsoft.Extensions.Http.Resilience: retry and circuit breaker (see code/external-requests.md).
- Testcontainers, xUnit.
