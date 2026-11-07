<!-- source: https://docs.workato.com/en/connectors/zendesk/updated-record-trigger | lastmod: 2026-06-29 -->
> The New/updated record trigger in the Zendesk connector picks up new or updated users, tickets, or organizations in batches at each poll interval.

# Zendesk - New/updated record trigger (batch)

Use this trigger to pick up recent activity in your Zendesk [users](/en/connectors/zendesk/user-fields), [tickets](/en/connectors/zendesk/ticket-fields), or [organizations](/en/connectors/zendesk/organization-fields).

This trigger monitors and picks up new or updated records in your Zendesk instance. Records are batched and processed at regular poll intervals.

> **Role privileges**
> 
> You need a Zendesk account with the Administrator role to use this trigger in your recipe.

![New/updated record trigger](/assets/updated-record-trigger.BBF0LDkU.png)_New/updated record trigger_

### Input field

| Input field | Description |
| --- | --- |
| From | Records created or updated after this time will be processed by the recipe. If left blank, the default date will be set to **one hour** before the recipe is first started. |
| Object | Select the object to be monitored - **User**, **Ticket**, or **Organization**. |
| Batch size | The number of records to retrieve for each job. The max batch size is 1000. |

### Output field

| Output field | Description |
| --- | --- |
| First ID | The unique Zendesk ID of the first record. |
| Last ID | The unique Zendesk ID of the last record. |
| `Records` | An array of records. The full list of **object attributes** will be returned for each record. |

Click here for a full list of [user outputs](/en/connectors/zendesk/user-fields#user-output-fields), [ticket outputs](/en/connectors/zendesk/ticket-fields#ticket-output-fields), or [organization outputs](/en/connectors/zendesk/organization-fields#organization-output-fields).

---
