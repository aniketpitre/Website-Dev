<!-- source: https://docs.workato.com/en/connectors/outsystems/new-record-batch-trigger | lastmod: 2026-06-29 -->
> The New record batch trigger in the OutSystems connector runs when new records are detected in a module, returning them in configurable batches.

# OutSystems - New record batch trigger

The New record batch trigger runs when new records are detected in OutSystems. The trigger checks for new records every five minutes by default.

![New record batch trigger](/assets/new-record-batch-trigger.ZU624mOI.png)_New record batch trigger_

## Input

| Input field | Description |
| --- | --- |
| Module | Select the module you plan to monitor for new records. |
| Entity ID | Select the entity ID of the module you plan to monitor for new records. |
| Batch size | This determines the maximum number of messages per trigger event. The minimum is `1`, the maximum is `10,000`, and the default is `100`. |

## Output

| Output field | Description |
| --- | --- |
| Entity | The entity ID you selected to monitor. |
| Number of records | The number of new records detected. |

---
