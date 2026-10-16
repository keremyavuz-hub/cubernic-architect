# Laravel
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## When To Use
- Must be applied if the laravel/framework package is in composer.json.
- This file is written for Laravel 11 / 12; the installed version must be read from composer.lock and upgrade notes must be checked.
- stack/languages/php.md must be applied for language rules.

## Structure
- Laravel's default folder structure must be preserved; business logic must be kept in Action / Service classes, not in controllers.
- Controllers must be kept thin: validation in a Form Request, authorization in a Policy, business logic in a service / action class, response via a Resource.
- Routes must be named (->name()) and links must be generated with route().
- Configuration values must be read from config/ files; env() must only be used in config files (env() returns null after config:cache).
- Events and listeners (Event / Listener) must be used to separate side effects (see code/architecture.md).
- Dependencies must be injected via the service container.

## Security
- APP_DEBUG must absolutely be false in production; if left on, environment variables and stack traces can leak.
- APP_KEY must be strong, secret and not shared between environments; changing it invalidates encrypted data and sessions.
- @csrf must be used in forms; VerifyCsrfToken exceptions must only be defined for webhooks whose signature is verified.
- $fillable must be defined explicitly on models; $guarded = [] must not be used, and request()->all() must not be passed directly to create / update (mass assignment).
- After validation, only $request->validated() data must be used.
- {{ }} must be used in Blade; {!! !!} must only be used for sanitized HTML.
- In raw queries (DB::raw, whereRaw, orderByRaw), user input must be passed as bound parameters; the sort column must be chosen from an allowlist.
- Authorization must be done with Policy / Gate; authorize() or the can middleware must be used on every controller action.
- Route model binding must be used together with company scoping (scopeBindings or global scope) (see security/data-isolation.md).
- Official packages (Breeze, Jetstream, Fortify, Sanctum) should be preferred for authentication; API tokens must be issued with Sanctum, limited by ability.
- Rate limiting must be done with RateLimiter and the throttle middleware (see security/rate-limit.md).
- For file uploads, mimes / max rules must be used; files must be kept under storage/app/private, and storage:link must be used deliberately for public ones (see files/uploads.md).
- Fields that must be stored encrypted must use the encrypted cast.
- Behind a proxy, TrustProxies must be set only for real proxy IPs (see security/client-ip.md).
- The session cookie must be set secure, http_only and same_site.
- The .env file and the storage/ folder must not be accessible from the web root; the web root must be public/ only.
- composer audit must be run regularly.

## Performance
- N+1 queries must be prevented with eager loading (with, load); Model::preventLazyLoading() must be enabled in development.
- Model::preventSilentlyDiscardingAttributes() and preventAccessingMissingAttributes() should be enabled in development. (Recommended)
- Large data operations must be done with chunk / chunkById / lazy / cursor.
- In production, config:cache, route:cache, view:cache, event:cache and composer --optimize-autoloader must be used (php artisan optimize).
- OPcache must be enabled; Laravel Octane may be considered in suitable projects (watch out for state leaks in Octane). (Optional)
- The cache and session driver in production must be Redis or database instead of file (mandatory in multi-server setups).
- Long jobs must be queued (ShouldQueue) (see operations/queues.md).
- Frequently used queries must be cached with Cache::remember / flexible and cleared when the related data changes.
- Pagination must be done with paginate / cursorPaginate (see ui/data-tables.md).
- Assets must be built with Vite, and the npm run build output must be used in production.

## Data
- Schema changes must be done with migrations; in production migrate --force must only run in the deploy flow.
- Commands such as migrate:fresh, migrate:reset, db:wipe must never be run by the AI (see ai/destructive-actions.md).
- Multiple write operations must be done inside DB::transaction.
- SoftDeletes must be used on models that need soft delete, and permanent deletion must follow the retention period (see legal/data-retention.md).
- Factories and seeders must be used for test / development data; test data must not be created in production.
- Company-scoped models must filter by company with a global scope.

## Queue and Scheduling
- Queue jobs must be defined with ShouldQueue; tries, backoff, timeout, maxExceptions values must be set on every job.
- Jobs that must be unique must be protected with ShouldBeUnique, and jobs that modify the same record with WithoutOverlapping.
- Jobs queued inside a database transaction must be queued with afterCommit.
- Failed jobs must be kept in the failed_jobs table and be re-runnable with queue:retry; the AI must not run queue:flush.
- Horizon must be used with Redis queues, and the Horizon panel must only be open to administrators.
- Scheduled tasks must be defined with Schedule in routes/console.php; onOneServer must be used in multi-server setups and withoutOverlapping for long tasks.
- queue:restart must be run after deploy.

## Testing
- Pest or PHPUnit must be used; tests must run on a separate test database with RefreshDatabase / DatabaseTransactions.
- External effects must be faked with Mail::fake, Queue::fake, Http::fake, Storage::fake.
- Tests must be written for Policies and authorization rules.
- Larastan / PHPStan and Laravel Pint must be used for code quality.

## Deploy
- Deploy order: composer install --no-dev --optimize-autoloader, npm run build, migrate --force, optimize, queue:restart.
- Maintenance mode (down / up) must be used with a secret bypass key when needed.
- For zero-downtime deploys, release folders and symlinks (Envoyer, Deployer) or containers must be used.
- storage/ and bootstrap/cache must be writable, and code files must not be writable by the web server user.
- The log channel in production must be a daily rotating file or a central log service (see operations/logging.md).

## Common Mistakes
- Going live with APP_DEBUG=true.
- Mass assignment with $guarded = [] and request()->all().
- Using env() in controllers.
- Allowing access to another company's record via route model binding without a Policy.
- Producing N+1 queries by calling relations inside a loop.
- Not restarting queue workers after deploy.
- Leaving Telescope / Debugbar enabled in production.

## Recommended Packages
- Laravel Sanctum, Fortify, Breeze: authentication.
- Laravel Horizon: Redis queue management.
- Laravel Pulse: performance monitoring. (Optional)
- Larastan, Laravel Pint, Pest.
- spatie/laravel-permission: roles and permissions (see auth/roles-permissions.md).
- spatie/laravel-activitylog: audit log (see operations/audit-log.md).
- spatie/laravel-backup: backups (see database/backup.md).
- Sentry Laravel: error tracking. (Optional)
