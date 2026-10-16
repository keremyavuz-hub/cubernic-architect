# Naming Standards
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## General Rules
- The project's naming standard must be decided at the start of the project, documented and applied consistently across all code.
- In-code names (variable, function, file, table) must be written in a single language; the recommended language is English.
- URLs and texts visible in the UI may be in the user's language (e.g., /giris, /basvuru); this decision must be made at the start of the project.
- Names must describe what they do; abbreviations, single-letter names (except loop counters) and meaningless names (data, temp, obj, x2) must not be used.
- The same concept must be referred to by the same name throughout the project (e.g., it must not be called firm in one place and company in another).
- Turkish characters (ç, ğ, ı, ö, ş, ü) must not be used in file, folder, variable and database names.

## Files and Folders
- File and folder names must be lowercase with hyphens (kebab-case): password-reset.js, domain-verify.js.
- Names required by the framework must be kept (e.g., Next.js page.js, layout.js, route.js; [param] folders).
- Component files must follow the single rule chosen by the project (either kebab-case: apply-form.js or PascalCase: ApplyForm.jsx); the two rules must not be mixed.
- Test files must carry the name of the file they test (e.g., forms.test.js).
- Components belonging to only one page must be kept in that page's _components folder, shared components in the components folder.
- Migration files must be named with a sequence number and a descriptive name (e.g., 0007_password_resets.sql).

## In-Code Names
- Variable and function names must be camelCase: sendMail, verifyShop, firmId.
- Component and class names must be PascalCase: ApplyForm, PanelLayout.
- Constants must be UPPER_SNAKE_CASE: PASSWORD_MIN, RESET_MINUTES.
- Boolean variables must start with is, has, can, should: isAdmin, hasPassword, canEdit.
- Function names must start with a verb: getSession, createInvite, validateShop.
- Event handlers must use the on / handle prefix: onSubmit, handleVerify.
- Server actions must carry the Action suffix: loginAction, addShopAction.
- Environment variables must be UPPER_SNAKE_CASE with a service prefix: RESEND_API_KEY, TURNSTILE_SECRET_KEY.

## Database
- Table names must be plural and snake_case: users, firm_members, password_resets.
- Column names must be snake_case: created_at, email_verified_at.
- Timestamp columns must be named with _at, date columns with _on, boolean columns with is_ / has_: verified_at, is_platform_admin.
- Foreign keys must be named with the singular table name and _id: firm_id, user_id.
- Index and constraint names must indicate the table and purpose: applications_pending_email_uq, sessions_user_idx.

## Event, Record and Tag Names
- Activity record and event names must be written in domain.action form, lowercase and past tense: login.failed, shop.verified, application.approved.
- Email tags, analytics events and log types must follow the same naming convention.
