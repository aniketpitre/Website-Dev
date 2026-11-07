<!-- source: https://docs.workato.com/en/connectors/outlook/search-calendar-action | lastmod: 2026-06-29 -->
> The Search calendar action in the Outlook connector lets you retrieve calendars that match your criteria, with batches of up to 1000 results.

# Outlook - Search calendar action (batch)

This action retrieves the calendar details that match your criteria in Outlook.

## Input

| Field | Description |
| --- | --- |
| Shared calendar | Provide the email address of the user who owns the shared calendar, so Workato can fetch the shared calendars. For example, `support@example.onmicrosoft.com`. If left blank, Workato shows your default calendars. |
| Filter | Query to filter the records you want. |
| Search by | Search for specific Outlook calendars by specifying search by fields. Fields you can search by include **Name**, **Color**, **Is default calendar?**, **Default online meeting provider**, **Can view private items?**, **Is tallying responses?**, and **Is removable?** |
| Limit | Maximum number of rows to return. Limit is 1000 and default is 10. |
| Offset | The number of rows to skip. For example, 100. |

## Output

| Field | Description |
| --- | --- |
| Calendar | A list of calendars matching the search criteria. |

---
