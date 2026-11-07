<!-- source: https://docs.workato.com/en/connectors/salesforce/triggers/new-record | lastmod: 2026-05-28 -->
> This trigger checks Salesforce for newly created objects every five minutes.

# Salesforce - New record trigger

This trigger checks Salesforce for newly created objects every five minutes.

## Input

| Input fields | Description |
| --- | --- |
| Object | Select the object type to monitor. |
| Fields to retrieve | Select the fields to retrieve from the object. Workato retrieves all fields by default. Entering specific fields to retrieve improves recipe performance and mitigates [schema errors](/en/connectors/salesforce/troubleshoot-runtime#schema-errors). |
| When first started, this recipe should pick up events from | Set the date and time to start picking up trigger events. This enables your recipe to capture past events. Refer to [Triggers](/en/recipes/triggers#since-from) to learn more about this input field. |

## Output

The output of this trigger varies based on your selected **Object** and **Fields to retrieve**. Refer to Salesforce's [Overview of Salesforce Objects and Fields](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm) guide for more information on available objects and fields.

---
