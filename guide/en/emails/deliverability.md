# Email Deliverability
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- The sender domain must be verified with the email provider.
- An SPF record must be defined on the sender domain, and there must be only one SPF record.
- DKIM records must be defined on the sender domain.
- A DMARC record must be defined on the sender domain; reports must initially be monitored with p=none, then tightened.
- Before going live, test emails must be sent to Gmail, Outlook and a corporate address to check they do not land in spam.
- An email forwarding rule must be set up only for addresses that receive replies; it is not needed for the noreply address.
