<!-- source: https://docs.workato.com/en/connectors/hibob/new-event-trigger | lastmod: 2026-06-17 -->
> The New event trigger monitors HiBob for new events in real-time.

# HiBob - New event trigger (real-time)

The **New event** trigger monitors HiBob for new events in real-time.

> **PREREQUISITES**
> 
> You must have at least one employee in HiBob to use this trigger. Create an employee, then re-connect to HiBob if an employee doesn't already exist.

## Input

| Input field | Description |
| --- | --- |
| Object | Select a HiBob object to monitor. |
| Event type | Select an event type to monitor. |

### Configuration in HiBob

Complete the following steps to register this webhook URI in HiBob:

1. Configure the [Input fields](#input) for this trigger. A webhook URI generates in the **Help** section.
   
2. Copy the webhook URI for use in HiBob.
   
3. Sign in to HiBob as an administrator.
   
4. Go to **System Settings Integrations > Webhooks**.
   
5. Click **Manage**.
   
6. Enter a **Name** for the webhook.
   
   ![The Add webhook modal](/assets/add-webhook.DRC2nKMZ.png)_The **Add webhook** modal_
   
7. Enter the **Endpoint URL** generated in Workato.
   
8. Use the **Events** drop-down menu to select the **Event type** you specified in Workato.
   
9. Click **Add**.
   

## Output

Output fields load dynamically based on the object and event type you select. For example, the following fields appear if you select the **Task** object and **Task status updated** event:

| Output field | Description |
| --- | --- |
| Company ID | Unique identifier of the company within HiBob where the task status update occurred. |
| Type | Event type indicating that the `To Do` status of a task has changed. |
| Triggered by | Unique identifier of the user or system that performed the task update. |
| Triggered at | Date and time (with timezone) when the task status was updated. |
| Version | API event version, specifying the schema version for this event data. |
| To do IDs | Unique identifiers of the `To Do` tasks impacted by this event. |
| To do requested for IDs | Identifier of the user for whom the "To Do" task was created/requested. |
| To do assignee IDs | Identifier of the user assigned to complete the `To Do` task. |
| New status | Updated status of the task, indicating it has been marked as `Closed`. |

---
