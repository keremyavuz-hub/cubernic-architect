# In-Product AI Features
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## When To Use
- Must be applied if the product being developed has a feature that uses an AI model (LLM, image, audio); for the AI assistant used during development, see the ai/ folder.

## Common To Do
- Model calls must be made only on the server side; the API key must not be given to the client.
- The model provider and model name must be defined in a single place and must be changeable.
- Request / token quotas must be set per user and per company; cost must be monitored and there must be a budget alert (see operations/cost.md).
- User input and external content read by the model (web page, file, email) must be treated as data, not instructions; system instructions and user data must be separated against prompt injection.
- Model output must be treated as untrusted data: it must not be rendered directly as HTML, must not be inserted into queries or commands, and structured output must be validated with a schema.
- Where the model can call tools (deleting data, sending email, payment), tools must be defined with least privilege, and irreversible actions must require user confirmation.
- The model's access to company data must be filtered per company; one company's data must not enter the context of another company's request.
- Sending personal data to the model provider must be stated in the privacy notice, and cross-border transfer must be assessed (see legal/privacy-kvkk.md; KVKK, Turkish data protection law); this is not legal advice.
- Whether the provider uses the data for training and its retention period must be checked.
- AI-generated content should be indicated as such to the user. (Recommended)
- Responses must be shown with streaming, and timeout and error cases must be handled.
- A cache must be used if the same response is sufficient for the same input.
- Regular evaluation should be done with a set of sample inputs / expected outputs for quality. (Recommended)
