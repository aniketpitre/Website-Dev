<!-- source: https://docs.workato.com/en/connectors/trackvia/update-record-action | lastmod: 2026-06-29 -->
> The Update record action in the TrackVia connector updates a record you specify by its ID in a selected application and view.

# TrackVia - Update record action

The **Update record** action updates a record you specify in TrackVia.

## Input

| Input field | Description |
| --- | --- |
| Application | Select the TrackVia application that contains the record you plan to update. |
| View | Select the TrackVia view that contains the record you plan to update. A TrackVia view is a set of filters and customizations linked to a data table in TrackVia. |
| ID | Specify the TrackVia ID of the record you plan to update. |
| Record | Optional. Enter new details for the object. This field contains a sub-field for each record element in your selected TrackVia **View**. |

## Output

| Output field | Description |
| --- | --- |
| Record ID | The TrackVia ID of the record. |
| ID | A numerical identifier indicating the creation order of records. |

> **ADDITIONAL OUTPUT FIELDS**
> 
> The **Update record** action generates additional output fields that contain values, metadata, or associated properties for each record element in your selected TrackVia **View**. Refer to TrackVia's [Field Types](https://help.trackvia.com/hc/en-us/articles/8811398834971-Field-Types) guide for more information on the elements of TrackVia records.

---
