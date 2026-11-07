<!-- source: https://docs.workato.com/en/connectors/recipeops/triggers/account-connected | lastmod: 2026-07-03 -->
> The Account connected trigger in the RecipeOps connector monitors selected connections and fires when those connections connect successfully.

# RecipeOps - Account connected trigger

This trigger monitors selected connections and triggers when the connections are connected successfully.

* * *

## Input

| Field | Description |
| --- | --- |
| **Apps to monitor** | Select app connections to monitor. |

* * *

## Output

| Field | Description |
| --- | --- |
| **Connection ID** | The ID of the connection. |
| **Name** | The display name of the connection. |
| **Application** | The type of the connection. For example: **PostgreSQL** |
| **Authorization error** | If an authorization error occurred, this will contain the error message. |
| **Authorized at** | The time the connection was authorized. |
| **Connected by user** | Details about the user who created the connection. This field has some additional sub-fields:
| Field | Description |
| --- | --- |
| **User ID** | The workspace ID where this connection is located. |
| **User name** | The user's name. |
| **User email** | The user's email address. |

 |

* * *

## Resources

- [RecipeOps overview](/en/connectors/recipeops)
- [RecipeOps actions](/en/connectors/recipeops#actions)
- [RecipeOps triggers](/en/connectors/recipeops#triggers)

---
