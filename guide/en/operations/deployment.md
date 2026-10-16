# Automated Deploy (CI / CD)
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## General Rules
- When the project is set up, the developer must be asked whether an automated deploy system will be set up (see project-start.md).
- If it will be set up, the AI should be able to set up the required integrations (repository, CI service, hosting, DNS, secrets); every change to an external system must first be listed and approved by the developer.
- The deploy flow must be documented (e.g. docs/DEPLOY.md): which branch goes where, which steps run, how rollback is done.
- Even if the setup is done by the AI, the first deploy to production must be started with the developer's approval.

## Environments
- At least two environments should be suggested: preview / test (staging) and production. (Recommended)
- Each environment must have its own database, domain and secrets; the test environment must not write to live data.
- The branch layout must be defined (e.g. main → production, dev → test, each PR → preview).
- An approval step (manual approval, protected branch) should be added for production deploys. (Recommended)

## Flow Steps
- Before every deploy, dependency installation, lint, type check, tests and build must run automatically; if one fails, the deploy must stop.
- Database migrations must run in a controlled way in the deploy flow; data-losing migrations must not run automatically and must require approval (see ai/destructive-actions.md).
- Deploys should be zero-downtime: switching between two instances in turn, routing traffic after a health check. (Recommended)
- A health check must be done after deploy; if it fails, there must be an automatic rollback or a notification.
- Each deploy must be recorded with version / commit info; it must be possible to return to the previous version in one step.
- The deploy result (success / failure) should be reported to the developer (email, Slack, Telegram etc.). (Optional)

## Secrets
- Keys needed for deploy must be kept in the CI service's secrets area (e.g. GitHub Secrets) and must not be written to the repository.
- The developer must enter secret values themselves; the AI must only write which variable is needed, where to get it and with which permission to create it (see ai/secret-handling.md, setup/env-catalog.md).
- Deploy keys must be created with least privilege (e.g. deploy user only, relevant server / project only).
- If deploying to a server via SSH, a separate deploy key and a restricted user must be used.

## Security
- Third-party actions running in CI must be used with a pinned version or commit.
- Secrets must not be used in PRs from outside contributors.
- Secret values must not appear in build output and logs.
- Dependency and security scanning should be added to the flow. (Recommended)

## Recommended Platforms
- GitHub Actions: general-purpose CI / CD if the repository is on GitHub; deploy to server via SSH, building Docker images.
- Vercel / Netlify: automatic preview and production deploys for Next.js and static sites.
- Cloudflare Pages / Workers: for static sites and edge applications (see platforms/cloudflare.md).
- Coolify / Dokploy / Kamal: Heroku-like deploys on your own server (e.g. Hetzner) (see platforms/hetzner.md). (Optional)
- GitLab CI: if the repository is on GitLab.

## If There Is a Mobile App
- Mobile builds and store submission must be automated with a separate flow (fastlane, EAS, Codemagic, Xcode Cloud) (see stack/mobile/general.md).
- Signing keys and certificates must be kept in CI secrets and also backed up in a secure vault.
- Releases must go to a test channel first, then to production in stages.
- Server-side deploys must not break old app versions.
