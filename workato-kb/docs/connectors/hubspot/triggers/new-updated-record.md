<!-- source: https://docs.workato.com/en/connectors/hubspot/triggers/new-updated-record | lastmod: 2026-06-29 -->
> The New/updated record trigger in the HubSpot connector monitors new or updated records for a selected object and processes each one as a separate job.

# HubSpot - New/updated record trigger

The **New/updated record** trigger monitors new or updated records in your HubSpot instance. Each record is processed as a separate job. It checks for new jobs once every poll interval. To configure this action, you must first select the object you plan to trigger jobs off.

This trigger supports the following objects:

- Contact
- Company
- Deal
- Product
- Ticket
- Line Item
- Quote
- Custom Objects

## Input

| Input field | Description |
| --- | --- |
| Object | Select the type of object you plan to monitor. |
| Properties | If not configured, the default set of properties for each record type is returned. Configure this field to retrieve custom sets of properties. Custom fields are supported. |
| When first started, this recipe should pick up events from | Configure this field to retrieve records created since a specific time in the past. Leave blank to pull records from one hour ago. Refer to [Triggers](/en/recipes/triggers#since-from) to learn more about this input field. |

## Output

Workato returns an object representing each new or updated record in separate jobs. You can use these datapills in subsequent recipe steps. The output datapills depend on what you select in the **Properties** input field. If this field is blank, a default set of properties are returned.

---
