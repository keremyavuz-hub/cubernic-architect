# PHP
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## When To Use
- Must be applied if PHP is used in the project.
- A supported PHP version (8.x still under security support) must be used.

## Rules
- declare(strict_types=1) must be used in every file.
- Parameter, return and property types must be declared; mixed must not be used unless necessary.
- readonly properties, enums and constructor property promotion must be used where appropriate.
- PHPStan / Larastan must run at a high level (at least 6, target max).
- Code style must comply with PSR-12 / PER; Pint or PHP-CS-Fixer must be used.
- Autoloading must be done with PSR-4.
- User input must not be decoded with unserialize (object injection); JSON must be used.
- eval, exec, shell_exec, system must not be used with user input.
- password_hash / password_verify must be used for passwords.
- random_bytes / random_int must be used for random values; rand / mt_rand must not be used for security.
- === must be used for comparisons; hash_equals must be used for comparing secrets.
- In production display_errors must be off, log_errors on, and expose_php disabled.
- OPcache must be enabled in production.
- composer.lock must be kept in git, and composer install --no-dev must be used in production.
- composer audit must be run regularly.
