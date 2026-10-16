# Python
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## When To Use
- Must be applied if Python is used in the project.
- A supported Python 3 version must be used.

## Rules
- Dependencies must be managed with pinned versions (uv, Poetry or pip-tools + lock file).
- The project must run in a virtual environment (venv); packages must not be installed into the system Python.
- Type hints must be used; mypy or pyright must run in CI.
- Linting and formatting must be done with Ruff.
- External data must be validated with Pydantic or a serializer.
- pickle, yaml.load (without SafeLoader) and eval must not be used with untrusted data.
- subprocess must not run user input with shell=True.
- The secrets module must be used for random security values.
- Decimal must be used for money.
- Times must be handled with timezone-aware datetimes.
- Blocking calls (requests, time.sleep) must not be used in asynchronous code.
- pip-audit must be run regularly.
