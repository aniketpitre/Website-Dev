<!-- source: https://docs.workato.com/en/connectors/sap-ariba/new-updated-record-trigger | lastmod: 2026-06-30 -->
> The New/updated object trigger monitors SAP Ariba for new or updated records, such as a new contract workspace or event.

# SAP Ariba - New/updated object trigger

Use the **New/updated object** trigger to monitor SAP Ariba for new or updated records, such as a new contract workspace or event.

> **COMPATIBLE APIS**
> 
> The SAP Ariba connector supports multiple APIs, and each API provides access to different objects and operations. Refer to the [Available APIs](/en/connectors/sap-ariba#available-apis) section to identify the APIs compatible with this action.

## Input

| Input field | Description |
| --- | --- |
| Trigger poll interval | Determine how frequently to check for new events. |
| Object | Use the drop-down to select the type of object to activate trigger events, such as a Contract workspace. |
| When first started, this recipe should pick up events from | When you start recipe for the first time, it picks up trigger events from this specified date and time. Leave empty to get records created or updated one hour ago. This value can't be changed once the recipe has been run or tested. |

## Output

The output of this action is determined by the object selected in the input. Use the data tree in the recipe editor to see all available output fields for your specific object and map them to subsequent steps.

---
