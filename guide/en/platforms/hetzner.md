# Hetzner Server Settings
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- In the firewall, ports 80 and 443 must be opened only to Cloudflare IP ranges.
- The SSH (22) port must be opened only to administrator IP addresses.
- All other ports must be closed.
- It must be checked that no connection can be established when a request is sent directly to the server's IP address.
- If there is a site on the same server that is not behind Cloudflare, it must be moved before the firewall rule.
- The application must listen only on 127.0.0.1, and a reverse proxy (Caddy, Nginx) must be exposed to the outside.
- The reverse proxy must forward the Host and X-Forwarded headers correctly.
- Scheduled maintenance tasks must be set up with cron, and the minute value must be chosen other than :00.
- Automatic security updates and fail2ban should be installed. (Recommended)
- Platform changes must not be made without the developer's explicit approval.
