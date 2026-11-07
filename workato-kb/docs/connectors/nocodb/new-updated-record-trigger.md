<!-- source: https://docs.workato.com/en/connectors/nocodb/new-updated-record-trigger | lastmod: 2026-10-28 -->
> Start a recipe when rows in a NocoDB table are created or updated, using polling ordered by UpdatedAt.

# NocoDB - New/updated record trigger

The **New/updated record** trigger polls a NocoDB table for new or updated records based on the `UpdatedAt` field and starts a recipe for each record.

This trigger doesn't detect deleted records. Use it when your NocoDB instance can't reach Workato webhook URLs, such as when the instance lacks outbound internet access.

Use the [New/updated/deleted record trigger](/en/connectors/nocodb/new-updated-deleted-record-trigger)⁠ to detect new, updated, and deleted records in real time.

## Input

| Input field | Description |
| --- | --- |
| Base | Select the base ID, which starts with `p`. |
| Table | Select the table ID, which starts with `m`. |
| Where | Optional. Filter condition that limits which rows start the recipe. Workato combines it with the `UpdatedAt` cursor. |

## Output

| Output field | Description |
| --- | --- |
| Id | Primary key `Id` of the row. |
| Title | Row title. |
| CreatedAt | Timestamp when the row was created. |
| UpdatedAt | Timestamp when the row was last modified. |

---
