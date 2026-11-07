<!-- source: https://docs.workato.com/en/connectors/gainsight-nxt/new-record-trigger | lastmod: 2026-07-22 -->
> The New record trigger monitors Gainsight NXT for new records created within a Gainsight NXT object you select, such as a company or person.

# Gainsight NXT - New record trigger

The **New record** trigger monitors `Gainsight NXT` for when a selected `Gainsight NXT` object, such as a **Company** or **Person**, is created.

## Input

| Input field | Description |
| --- | --- |
| Object type | Use the drop-down menu to select the object to monitor for new records. Options include **Company** and **Person**. |
| When first started, this recipe should pick up events from | Select the date and time when the recipe picks up records created from. Leave blank to fetch records created one hour ago. This value can't be changed after the recipe has been run or tested. |

## Output

Output fields are dynamically generated based on the object type you select. Refer to the [Gainsight NXT API](https://support.gainsight.com/gainsight_nxt/API_and_Developer_Docs/Company_and_Relationship_API/Company_API_Documentation) documentation for a complete list of output fields.

---
