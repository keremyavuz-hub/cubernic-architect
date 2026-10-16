# Panel Tables
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## General Rules
- Every data table in panels must have pagination, filtering and sorting.
- Table behavior (pagination, filter, sorting, search, empty / loading state) must be provided by a single shared table component and a shared query helper; it must not be rewritten on every page.
- Pagination, filtering and sorting must be done on the server; the entire data set must not be pulled into the browser and filtered there.
- For small and fixed lists (e.g. settings lists not exceeding 20 records), client-side sorting is acceptable; this must be a deliberate choice.
- The table's current state (page, page size, filters, sorting, search) must be kept in the URL query parameters (e.g. ?sayfa=2&durum=bekleyen&sirala=created_at&yon=desc); so the link can be shared and the state is preserved on page refresh and the back button.
- When filters or sorting change, the page number must reset to 1.

## Pagination
- Page size must be selectable (e.g. 10, 25, 50, 100); the server must limit the maximum page size (e.g. at most 100).
- The total record count and the displayed range must be shown (e.g. "51–75 / 312 records").
- First, previous, next, last page buttons and page numbers must exist; in tables with many pages, page numbers must be abbreviated (1 … 4 5 6 … 20).
- In large tables (hundreds of thousands of rows), cursor / key-based pagination (keyset pagination) must be used instead of OFFSET.
- If the total count is very expensive, an approximate count or a "load more" button can be used. (Optional)
- When the page changes, it must scroll to the top of the table.

## Filtering and Search
- Filters must exist for the table's important columns: status, date range, type, owner, tag and similar.
- Text search must run with a short delay (debounce, e.g. 300 ms), not on every keystroke.
- Active filters must be visible (e.g. filter tags / chips) and clearable one by one or all at once.
- Date range filters must handle time zones correctly; the end date must cover the end of the day.
- In Turkish search, upper / lower case and İ / ı conversions must work correctly.
- Frequently used filter combinations may be savable. (Optional)
- If the filter result is empty, a "No results found" message and a clear-filters button must be shown.

## Sorting
- Sortable column headers must be clickable and the current sort direction must be shown with an icon.
- The default sorting must be meaningful (most often newest record on top).
- Sorting must always be completed with a unique secondary field (e.g. id); rows with equal values must not shift between pages.
- Text sorting must be language-aware (Turkish alphabetical order).
- The position of empty values in sorting must be consistent (NULLS LAST).

## Server-Side Security and Performance
- Sorting and filter parameters must be validated on the server against an allow list; a column name or direction from the user must not be written directly into the query (SQL injection).
- Page and page size must be converted to numbers and limited; invalid values must fall back to defaults.
- In multi-tenant systems, every table query must be filtered by the company / user in the session; another company's data must not be requestable via a filter parameter.
- Columns and rows the user must not see based on their role must be removed on the server.
- Frequently filtered and sorted columns must have an index.
- List queries must select only the columns shown in the table.
- If needed for search, full-text search (e.g. Postgres full text search, pg_trgm) must be used; in large tables, care must be taken with leading-wildcard LIKE ('%text%') queries.

## States
- While data is loading, a table skeleton or loading indicator must be shown; a busy state must be visible during page change, filtering and sorting.
- If the table contains no records, a descriptive empty state screen and, if applicable, a first-action button (e.g. "Add store") must be shown.
- In case of error, a retry option must be offered.
- Table height must not jump during loading.

## Row Actions and Bulk Actions
- Row actions (view, edit, delete) must be in a consistent place (end of row or three-dot menu).
- Delete and irreversible actions require confirmation; the confirmation dialog must state which record will be affected.
- If bulk selection exists, the number of selected records must be shown, and the number of records to be affected must be confirmed before a bulk action.
- It must be clearly stated whether "Select all" selects only the visible page or the entire filter result.
- Row actions must be shown according to the user's permissions, and permission must also be checked on the server.
- Every bulk and write action must be written to the activity log.

## Columns and View
- Column headers should stay fixed (sticky header). (Recommended)
- Showing and hiding columns may be provided; the preference may be remembered per user. (Optional)
- Numbers, amounts and dates must be right / consistently aligned and formatted according to the language.
- Long texts must be truncated; the full text must be readable in a tooltip or detail view.
- Status columns must be shown with colored badges; color must not carry meaning alone (text must also be present).

## Export
- For required tables, export (CSV / Excel) based on current filters should be offered. (Recommended)
- In the exported file, cells that could run as formulas (starting with =, +, -, @) must be neutralized (CSV injection).
- Large exports must be prepared in the background and a download link must be given when ready.
- Export must also be subject to permissions and company isolation, and be written to the activity log.
- The CSV file must be written with UTF-8 BOM so that Turkish characters are not corrupted in Excel.

## Mobile and Accessibility
- On small screens, the table must either be in a horizontally scrollable container or each row must turn into a card; the entire page must not scroll horizontally.
- Filters must be grouped in a collapsible panel on mobile.
- The table must be written with semantic HTML (table, thead, th scope, tbody); the sorted column must have aria-sort.
- Pagination and sorting controls must be usable with the keyboard.

## Recommended Libraries
- Simple tables do not need a library; a shared table component and a server-side query helper are enough.
- For complex tables (column hiding, virtual scrolling, grouping), TanStack Table, a headless library, can be suggested; the view is written with the project's own components.
- For URL state management, a small library such as nuqs or the built-in URLSearchParams can be used.
- For very large lists, virtual scrolling (TanStack Virtual) can be suggested.
