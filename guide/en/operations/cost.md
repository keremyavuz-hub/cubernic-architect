# Cost Management
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Common To Do
- All paid services used in the project, their plans, estimated monthly costs and who is billed must be listed in the documentation.
- A budget or spending alert must be set up for each paid service.
- Free tier limits must be written down; what happens when they are exceeded (stop, charge) must be known.
- Usage-billed services (AI APIs, email, SMS, storage egress, serverless functions) must have an upper limit so that abuse or a faulty loop cannot produce an unlimited bill.
- Before suggesting a new paid service or plan upgrade, the AI must state its cost and a free alternative (see ai/resource-usage.md).
- Unused servers, domains, storage and subscriptions must be reviewed regularly; the decision to delete belongs to the developer.
- Costs to be passed on to customers (usage per company) should be measured if needed. (Optional)
