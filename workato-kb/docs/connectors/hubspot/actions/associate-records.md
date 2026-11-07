<!-- source: https://docs.workato.com/en/connectors/hubspot/actions/associate-records | lastmod: 2026-06-29 -->
> The Associate records action in the HubSpot connector lets you create an association between two records in your HubSpot instance.

# HubSpot - Associate records action

The **Associate records** action allows you to create an association between two records.

## Input

| Input field | Description |
| --- | --- |
| From | Expand the From section and use the **Object** menu to choose **Select from list** or **Use custom value**. This is the object you're associating. |
| Object ID | The ID of the record to associate. |
| Association types | Use the drop-down menu to choose **Select from list** or **Enter custom value**. Leave this field blank to create a default (most generic) association. |

## Output

If the request is successful, Workato returns a list of records associated with the selected records. You can use these datapills in subsequent recipe steps.

---
