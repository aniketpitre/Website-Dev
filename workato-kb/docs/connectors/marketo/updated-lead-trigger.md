<!-- source: https://docs.workato.com/en/connectors/marketo/updated-lead-trigger | lastmod: 2026-06-29 -->
> The New/updated lead trigger in the Marketo connector picks up new or updated leads each poll interval, processed as separate jobs.

# Marketo - New/updated lead trigger

This trigger picks up new or updated leads in your Marketo instance. It checks for new or updated leads once every poll interval and Workato processes each lead as a separate job.

## Input

| Field | Description |
| --- | --- |
| Trigger poll interval | Specify how frequently to check for new events. This field defaults to five minutes if left blank. The minimum value allowed is five minutes. |
| When first started, this recipe should pick up events from | When you start the recipe for the first time, it picks up leads modified from this specified date and time. Defaults to fetching leads modified an hour ago if left blank. Refer to [Triggers](/en/recipes/triggers#since-from) to learn more about this input field. |
| Output fields | Select the fields you plan to use in your recipe. All fields are returned if left blank. However, leaving this field blank isn't recommended as it can result in timeout errors. |

Refer to the Marketo documentation for a [list of standard fields](https://experienceleague.adobe.com/en/docs/marketo-developer/marketo/rest/assets/list-of-standard-fields) available through the API. This list includes common fields but may not cover all input fields specific to this action.

## Output

The output datatree contains information about the lead, including all the fields defined under **Output fields** in the trigger configuration. By default, Workato retrieves the **Lead ID** and **Updated at** fields.

| Field | Description |
| --- | --- |
| Lead ID | The unique identifier of the lead. |
| Updated at | The time when the lead was last updated. |

---
