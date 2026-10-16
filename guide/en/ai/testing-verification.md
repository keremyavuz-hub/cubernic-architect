# AI and Testing / Verification
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## General Rules
- Before reporting a task as "done", the AI must verify that it works; compiling does not mean it works.
- At the end of every task, tests must be run and the build must be checked.
- The flow affected by the change must be tried end to end if possible (including database, email, redirects).
- When a new rule, limit or security check is added, an automated test verifying it must also be written.
- Both the success path and error paths must be tested: invalid input, unauthorized access, expired link, resubmission, parallel requests.
- Boundary values must be tested (empty, longest, one less / one more, special characters, Turkish characters).
- When testing external services themselves, official test keys and test addresses must be used; emails / SMS must not be sent to real people.

## Reporting
- The AI must clearly write what it tested, how it tested it, and the result.
- Untested parts must be stated separately (e.g., "I did not open and try it in the browser", "I did not try real email sending").
- If a test failed, this must not be hidden; it must be reported together with the error output.
- To make a test pass, the test must not be changed or the check loosened; first, why the code fails must be found.
- In cases that cannot be verified, how the developer can verify it must be described (which page to open, what they should see).

## Test Environment
- Tests should run in a separate test database or inside a rolled-back transaction where possible.
- Test data must be distinguishable, and only records the test created itself must be cleaned up (see ai/destructive-actions.md).
- Tests must not depend on each other or on execution order.
- Tests must be fast; slow tests must be able to run separately.
- Tests must not be run in production.

## Unnecessary Tests and Context Saving
- No unnecessary test must be run; tests must be run only when and as much as needed to prove the change is correct.
- Operations that fill the context must be avoided (long outputs, repeated runs, unnecessary page screenshots, large log dumps).
- If a visual check in the browser or on a device is needed, instead of trying it itself, the AI must ask the developer, briefly stating what to check and where.
