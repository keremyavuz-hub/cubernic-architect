# Project Start
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## General Rules
- When starting a new project, the AI must ask the developer the questions in this file before writing code.
- Questions must be asked in groups with options, not one by one; answering must take the developer little time.
- Questions whose answer is clear from the project documents or existing code must not be asked again.
- Questions the developer answers with "I don't know" or "I'll decide later" must be recorded as open decisions and asked again when the related feature is reached.
- Answers must be written to the project rule file (CLAUDE.md / AGENTS.md) and the project document (e.g., docs/PROJE.md).
- Based on the answers, which guide files will and will not be applied must be listed and briefly confirmed with the developer.
- If the guide was added to an existing project later, these questions must not be asked all at once; the related question must be asked when the developer starts that structure (see ai/guide-activation.md).
- If the project type or scope changes later, these questions must be reviewed again.

## Project Identity
- The project's name, short purpose and target user must be asked.
- Whether the project is commercial, individual / personal or internal must be asked (see legal/project-assessment.md).
- On whose behalf the project will be published (individual, company, client) and whether it will be handed over to a client under contract must be asked.
- The target country / region and language (single language, multilingual) must be asked (see code/i18n.md).
- When the project will go live and its priority features must be asked.

## Project Type
- Whether there will be a mobile app, for which platforms (iOS, Android) and with which technology (React Native / Expo, Flutter, native) it will be developed must be asked (see stack/mobile/general.md).
- The project type must be asked: promotional site, blog / content site, e-commerce, panel / management application, SaaS, mobile app backend, API, tool / script.
- Whether there will be a panel and, if so, who will use it (administrator only, customers / companies, individual users) must be asked.
- Whether a multi-tenant structure (each company sees only its own data) is needed must be asked (see security/data-isolation.md).

## Users and Membership
- Whether there will be login must be asked (see auth/login.md).
- Whether there will be registration and its type must be asked: open registration, approved application, invite-only (see auth/register.md, auth/approval-invite.md).
- Whether email verification, password reset and account closure are needed must be asked.
- Whether social login (Google, Apple, etc.) or one-time code login is wanted must be asked. (Optional)
- Roles and permissions must be asked (e.g., administrator, company owner, company user).

## Data and Infrastructure
- The database preference and whether there is an existing data source must be asked (see platforms/postgres.md).
- Hosting (server, cloud, serverless) and domain / DNS management must be asked (see platforms/).
- Whether email sending is needed and which service will be used must be asked (see emails/).
- Whether there will be file / image uploads and where they will be stored must be asked.
- Whether payments will be accepted must be asked.
- External service / API integrations must be asked.
- How long data will be retained and the backup expectation must be asked (see legal/data-retention.md).

## Law and Compliance
- Whether personal data will be processed must be asked (KVKK (Turkish data protection law) / GDPR) (see legal/privacy-kvkk.md).
- The required legal pages must be asked: terms of use, privacy / information notice, cookie policy (see legal/legal-pages.md).
- Whether cookies and analytics / marketing tools (GTM, Analytics, etc.) will be used must be asked (see legal/cookies.md, platforms/google-tag-manager.md).
- The developer must be reminded that legal texts are drafts and do not replace legal advice.

## Interface and Design
- Whether there is a ready design, brand guide or example site must be asked (see ui/design-preferences.md).
- Light / dark theme, mobile priority and supported devices must be asked (see ui/theme.md, ui/responsive.md).
- Whether heavy visual elements such as animation, 3D or canvas are wanted must be asked (see ui/animation.md).

## Development Environment and Workflow
- The language / framework and package manager to be used must be asked; if no framework has been chosen, stack/selection.md must be applied; if one has been chosen, stack/framework-rules.md and the related framework file must be applied.
- Who will start the server and which port will be used must be asked.
- Whether automatic deploy (CI / CD) will be set up, with which platform and which environments (test, live) must be asked; if it will be set up, integrations must be set up by the AI with approval (see operations/deployment.md).
- The commit / push routine must be asked (see ai/git-commits.md).
- Whether mandatory AI tools (Context Mode, skills, MCP) should be installed must be asked (see ai/dev-environment.md).
- Whether an error tracking and logging tool is wanted must be asked (see operations/error-tracking.md). (Optional)
- The testing expectation must be asked (at what level, for which tasks). (Optional)
