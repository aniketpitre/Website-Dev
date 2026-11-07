<!-- source: https://docs.workato.com/en/connectors/hubspot/actions/update-records-batch | lastmod: 2026-06-29 -->
> The Update records batch action in the HubSpot connector lets you update existing records such as contacts, companies, and deals in batches.

# HubSpot - Update records action (batch)

The **Update records** batch action enables you to update existing records in your HubSpot instance in batches.

This action supports the following objects:

- Contacts
- Companies
- Deals
- Ticket
- Products
- Line items

> **CONTACT BATCH UPDATE OPERATION**
> 
> Batch operations for contacts are limited to batches of 10. [Learn more](https://developers.hubspot.com/docs/guides/api/crm/objects/contacts).

## Input

| Input field | Description |
| --- | --- |
| Object | Select the object you plan to update in batches. |

Additional input fields are available based on the object you select.

## Output

| Output field | Description |
| --- | --- |
| Status | The status of the batch update operation. |
| Requested at | Timestamp indicating when the batch update request was submitted. |
| Started at | Timestamp indicating when the batch update processing began. |
| Completed at | Timestamp indicating when the batch update processing finished. |
| Links | A set of URLs for checking the batch status or retrieving results. |
| Results | A list of updated records returned from the batch operation. |
| ID (results) | The unique identifier of the updated record. |
| Created at (results) | Timestamp indicating when the record was originally created. |
| Updated at (results) | Timestamp indicating when the record was last updated. |
| Archived (results) | Indicates whether the record is archived. |
| Archived at (results) | Timestamp indicating when the record was archived, if applicable. |
| Properties (results) | A collection of updated property values for the record, based on the object schema. |

---
