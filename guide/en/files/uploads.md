# File Upload and Storage
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Common To Do
- Uploadable file types must be limited with an allowlist; the file's content (magic bytes) must be checked, not the extension.
- File size must be limited on both the client and the server.
- The uploaded file's name must not be used; a random name must be assigned by the server, and the original name stored only in the database.
- Files must not be saved in the application code directory or anywhere they can be executed directly.
- Files should be kept in object storage (S3 compatible); there should be no dependency on the server disk. (Recommended)
- Private files must be served not via a public URL but via a time-limited signed URL.
- Location and device information (EXIF) must be stripped from images.
- Since SVG and HTML files can carry XSS, they must be rejected, sanitized, or served as a download (Content-Disposition: attachment).
- Files uploaded by users should be scanned for viruses (e.g., ClamAV). (Recommended)
- Images must be resized and converted to a modern format after upload (see ui/media-optimization.md).
- Large files must be uploaded in chunks or directly to storage (presigned upload); they must not pass through the application server.
- Files of deleted records must also be cleaned up according to the retention period; no orphan files must remain.
- An upload quota (total size per user / company) must be defined.

## If Company / Customer Based Panel
- Files must be stored in paths separated by company ID (e.g., companies/<id>/...); access control must still be done on the server.
- It must not be possible to reach another company's file by guessing a company's file URL.

## Recommended Platforms
- Cloudflare R2: no egress fees, S3 compatible (see platforms/cloudflare.md).
- Hetzner Object Storage, Backblaze B2, AWS S3: S3 compatible storage.
- Cloudflare Images, imgproxy: image transformation and resizing.
