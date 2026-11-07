<!-- source: https://docs.workato.com/en/connectors/salesforce/triggers/deleted-record | lastmod: 2026-06-17 -->
> This trigger monitors Salesforce for deleted objects of a type you specify.

# Salesforce - Deleted record trigger

This trigger monitors Salesforce for deleted objects of a type you specify.

The object picklist only fetches soft-deleted records which remain in Salesforce for a limited period (typically 15 days) after deletion and are stored in the Recycle Bin.

If you cannot find an object in the picklist, its records are likely hard deleted immediately upon deletion. Hard-deleted records are permanently removed from Salesforce and aren’t stored in the Recycle Bin. These objects aren’t supported by the **Deleted object** trigger.

To resolve the issue, configure the object so that its records are soft deleted and retained in the Recycle Bin for 15 days, if applicable. Junction records (used to create many-to-many relationships) are usually hard deleted and cannot be configured for soft-deletion. Contact your Salesforce administrator for more details about how your organization handles deletions.

## Input

| Input fields | Description |
| --- | --- |
| Object | Select the standard or custom object type to monitor. |
| Fields to retrieve | Select the fields to retrieve from the object. Workato retrieves all fields by default. Entering specific fields to retrieve improves recipe performance and mitigates [schema errors](/en/connectors/salesforce/troubleshoot-runtime#schema-errors). |
| When first started, this recipe should pick up events from | Set the date and time to start picking up trigger events. This enables your recipe to capture past events. Refer to [Triggers](/en/recipes/triggers#since-from) to learn more about this input field. |

## Output

The output of this trigger varies based on your selected **Object** and **Fields to retrieve**. Refer to Salesforce's [Overview of Salesforce Objects and Fields](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm) guide for more information on available objects and fields.

---
