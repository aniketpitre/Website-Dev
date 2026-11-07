<!-- source: https://docs.workato.com/en/connectors/active_directory/new_entry_trigger | lastmod: 2026-06-29 -->
> The New entry trigger in the Active Directory connector monitors for newly created entries and fires when an entry matches your search filter.

# Active Directory - New entry trigger

The **New entry** trigger monitors Active Directory for newly created entries.

## Input

| Input field | Description |
| --- | --- |
| Sample entry DN | Specify the distinguished name (DN) of a reference entry. The trigger uses this entry's attributes as a template to retrieve values from newly created entries. |
| When first started, this recipe should pick up events from | Set the date and time to start picking up trigger events. This enables your recipe to capture past events. Refer to [Triggers](/en/recipes/triggers#since-from) to learn more about this input field. |
| Limit | Enter the maximum number of entries you plan to retrieve for each trigger event. The maximum value is 1,000 entries. |
| Entry search filter | Enter [LDAP filters](https://ldap.com/ldap-filters/) to add conditions that newly created entries must meet to trigger a job. For example, enter `(ou=Dev)(objectClass=Person)` to retrieve only `Person` entries from the `Dev` organization unit. |

## Output

The **New entry** trigger's output includes values from the newly created entry for each attribute defined by the reference entry.

---
