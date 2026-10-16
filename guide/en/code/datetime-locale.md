# Date, Time, Currency and Turkish
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Date and Time
- Times must be stored in the database in UTC with a time-zone-aware type, and shown to the user in their own time zone.
- Server, database and application time zone settings must be written in the documentation.
- Date formatting must be done with a single helper function or Intl.DateTimeFormat.
- Date-only fields (birthday, due date) must be stored so they are not affected by time zone shifts (date type).
- Duration calculations (e.g., 48 hours) must use server time; client time must not be trusted.
- Dates created on the server and re-rendered on the client must be formatted with the same time zone; otherwise a hydration mismatch occurs.

## Currency and Numbers
- Monetary amounts must be stored and calculated without decimal errors (see database/schema.md).
- Amounts must always be stored together with their currency.
- Number and currency formatting must be done with Intl.NumberFormat (Turkish: 1.234,56 ₺).
- Rounding rules (tax, discount) must be defined and applied in a single place.

## Turkish
- The locale must be specified for upper / lower case conversion (toLocaleLowerCase("tr"), toLocaleUpperCase("tr")); otherwise I / ı, İ / i conversions break.
- When searching and comparing, Turkish characters must be normalized or locale-aware comparison must be used (Intl.Collator("tr")).
- Sorting must follow the Turkish alphabet (positions of Ç, Ğ, İ, Ö, Ş, Ü); an appropriate collation (e.g., tr-TR-x-icu) must be used in the database.
- When creating slugs, Turkish characters must be converted correctly (ğ→g, ı→i, ş→s).
- Email addresses must be lowercased when compared; however, a locale-independent conversion must be used, not the Turkish locale rule.
- Text files and the database must be UTF-8.
