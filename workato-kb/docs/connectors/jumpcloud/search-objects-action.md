<!-- source: https://docs.workato.com/en/connectors/jumpcloud/search-objects-action | lastmod: 2026-06-29 -->
> The Search objects batch action in the JumpCloud connector searches for objects in batches and returns up to 100 results matching your criteria.

# JumpCloud - Search objects action (batch)

The **Search objects** batch action searches for JumpCloud objects in batches and returns a list of results matching the criteria you specify.

## Input

| Field | Description |
| --- | --- |
| Object | Select the type of object you plan to search for. |
| Search type | Specify whether to retrieve objects that **Contain** or **Equal** the search criteria. |

> **ADDITIONAL INPUT FIELDS**
> 
> The recipe editor generates additional input fields based on the **Object** type you select. Use these fields to specify the search criteria. Refer to JumpCloud's [API 1.0 documentation](https://docs.jumpcloud.com/api/1.0/index.html) for more information about the input fields for each type.

## Output

The **Search objects** action's output fields vary based on your selected **Object** type. Refer to JumpCloud's [API 1.0 documentation](https://docs.jumpcloud.com/api/1.0/index.html) for more information about the output fields for each type.

> **MAXIMUM OUTPUT LENGTH**
> 
> The **Search objects** action returns a maximum of 100 records from JumpCloud.

---
