# Two-Factor Authentication and Passkey
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Common To Do
- Two-factor authentication should be mandatory for administrator and privileged accounts. (Recommended)
- Two-factor authentication should be offered as optional for other users. (Optional)
- App-based one-time codes (TOTP: Google Authenticator, 1Password, etc.) must be preferred over SMS; SMS is vulnerable to code hijacking (SIM swap).
- Passkey (WebAuthn) support should be evaluated; it is passwordless and phishing-resistant. (Recommended)
- One-time backup codes must be given during setup, and they must be stored hashed.
- The TOTP secret key must be stored encrypted in the database.
- Code attempts must be subject to rate limiting (see security/rate-limit.md).
- Enabling and disabling two-factor authentication must require re-entering the password and must be notified to the user by email.
- An account recovery path for device loss must be defined in advance; the recovery process must not be a shortcut an attacker can use.
- Password reset must not bypass two-factor authentication.
