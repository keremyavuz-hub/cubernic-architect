# Django
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## When To Use
- Must be applied if Django is in requirements.txt / pyproject.toml.
- This file is written for Django 5.x; LTS versions (e.g. 5.2) should be preferred.
- stack/languages/python.md must be applied for language rules.

## Structure
- The project must be split into apps by domain; each app must be independent with its own models, views and tests.
- Business logic must be kept in service functions or model managers, not in views.
- Settings must be split by environment (base / dev / prod) and secrets must be read from environment variables (django-environ).
- Django REST Framework or Django Ninja must be used for APIs.

## Security
- DEBUG must be False in production.
- SECRET_KEY must be secret and strong.
- ALLOWED_HOSTS and CSRF_TRUSTED_ORIGINS must be defined explicitly.
- python manage.py check --deploy must be run before going live and its warnings must be resolved.
- SECURE_SSL_REDIRECT, SECURE_HSTS_SECONDS, SESSION_COOKIE_SECURE, CSRF_COOKIE_SECURE must be enabled in production.
- Behind a proxy, SECURE_PROXY_SSL_HEADER must be set correctly.
- CSRF middleware must not be disabled; csrf_exempt must only be used on webhooks whose signature is verified.
- The ORM must be used; user input inside raw() and extra() must be passed as parameters.
- In templates, |safe and mark_safe must only be used with sanitized content.
- In ModelForms / serializers, fields must be listed explicitly; "__all__" must not be used (mass assignment).
- Authorization checks must be done in every view (permission_classes, LoginRequiredMixin, has_object_permission); queries must be filtered by the user's / company's records.
- Password validators (AUTH_PASSWORD_VALIDATORS) must be enabled.
- The admin panel must be moved off the default /admin/ path, and extra protection (2FA, IP restriction) should be considered.
- Rate limiting must be done with DRF throttling or django-ratelimit.
- User uploads must be served under MEDIA_ROOT in a non-executable way (see files/uploads.md).

## Performance
- N+1 queries must be prevented with select_related and prefetch_related.
- Only the needed columns must be fetched with only / values.
- Large queries must be processed with iterator().
- F() expressions must be used for counter updates (race conditions).
- Caching must be done with Redis; template fragments and query results must be cached where appropriate.
- Persistent database connections (CONN_MAX_AGE) or a connection pool (Django 5.1+ psycopg pool) must be used.
- Static files must be served with WhiteNoise or a CDN after collectstatic.
- Query counts must be monitored in development with django-debug-toolbar.

## Data
- Migrations must be generated with makemigrations, reviewed and added to git.
- Data-losing migrations must not be applied without approval; the flush and sqlflush commands must not be run by the AI (see ai/destructive-actions.md).
- Multiple writes must be done inside transaction.atomic; side effects must be triggered after completion with transaction.on_commit.

## Queue
- Background jobs must be done with Celery (Redis / RabbitMQ) or Django 6 Tasks / Dramatiq (see operations/queues.md).
- Celery tasks must be defined with acks_late, task timeout and retry settings.
- Scheduled jobs must run on a single instance with Celery Beat.

## Testing
- Tests must be written with pytest-django; factory_boy must be used for test data.
- Authorization and company isolation tests must exist.

## Deploy
- Must run as WSGI / ASGI with Gunicorn / Uvicorn behind a reverse proxy.
- Deploy order: install dependencies, collectstatic, migrate, restart the application and workers.

## Common Mistakes
- Going live with DEBUG=True.
- Using fields = "__all__".
- Rendering user content with |safe in templates.
- Producing N+1 by calling relations in a loop.
- Not running check --deploy.

## Recommended Packages
- Django REST Framework, Django Ninja: API.
- django-environ: environment variables.
- django-allauth: authentication and social login.
- Celery, django-celery-beat: queue and scheduling.
- WhiteNoise: static files.
- django-axes: login attempt limiting.
- pytest-django, factory_boy.
