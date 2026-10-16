# Project Handover and Team Onboarding / Offboarding
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Common To Do
- A newcomer to the project must be able to run the project locally within one day by reading the documentation (see operations/documentation.md, ai/dev-environment.md).
- Which services the project has accounts on, who owns each account and who has access must be kept in an access list (only account and person info, not secret values).
- Domain, hosting, email and payment accounts must be under a company / project account, not a personal one.
- Secret values must be shared in a shared password manager (e.g. 1Password, Bitwarden); they must not be sent via chat or email.
- All access of a person leaving the team must be removed on the same day, and the secret keys they knew must be rotated.
- For projects delivered to a customer, a handover list must be prepared: source code, transfer of account ownership, documentation, backups, licenses, maintenance boundaries.
- After switching to the customer's accounts at handover, removal of the developer's access according to the contract must be planned.
