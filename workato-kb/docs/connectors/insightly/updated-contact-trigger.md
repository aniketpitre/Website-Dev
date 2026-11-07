<!-- source: https://docs.workato.com/en/connectors/insightly/updated-contact-trigger | lastmod: 2026-06-29 -->
> The Updated contact trigger in the Insightly connector picks up contacts updated in your Insightly instance, processing each as an individual job.

# Insightly - Updated contact trigger

This trigger picks up contacts that are updated in your Insightly instance. Each updated contact is processed as an individual job.

## Input

| Input field | Description |
| --- | --- |
| Trigger poll interval | How often to poll for updated contacts. |
| When first started, this recipe should pick up events from | Contacts updated after this time are processed by the recipe. If left blank, the default is set to **one hour** before the recipe is first started. Refer to [Triggers](/en/recipes/triggers#since-from) to learn more about this input field. |

## Output

The output of this trigger is a datatree that contains information about the updated [contact](https://api.insightly.com/v3.1/Help#!/Contacts/GetEntities).

---
