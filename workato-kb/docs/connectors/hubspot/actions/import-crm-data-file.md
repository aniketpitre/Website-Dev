<!-- source: https://docs.workato.com/en/connectors/hubspot/actions/import-crm-data-file | lastmod: 2026-06-30 -->
> The Import CRM data action in the HubSpot connector lets you bulk import data from a CSV file into a HubSpot object such as contacts or deals.

# HubSpot - Import CRM data action

The **Import CRM data** action allows you to import data in HubSpot in bulk. Your file size must be less than 512 MB and must have less than 1,048,576 rows.

## Input

| Input field | Description |
| --- | --- |
| File name | Provide a unique name for the file. |
| Object | Use the drop-down menu to choose **Select an object** or **Enter object ID**. You can select any standard HubSpot object, including contacts, companies, deals, and more. |
| Operation | Use the drop-down menu to choose **Select operation** or **Enter operation**. This sets the operation used for the import. |
| Import name | Enter a unique name for the import. This is used to identify the import. |
| CSV file input | Describe your CSV file and column names. |
| File contents | CSV file contents are used to bulk upload records in HubSpot. Ensure that the CSV contains unique column names for all fields. The import file must contain at least two rows. |
| Column separator | Use the drop-down menu to select the column separator you plan to use. For example, comma (`,`) or pipe (`|`). |
| Column names | Click **Use a sample file** to use a sample file to input all column names at the same time. If you do not have a sample file, click **Add column name** to manually enter your column names. |
| Use CSV column names as HubSpot field names | This field is optional. Select **Yes** if you plant to map CSV columns to HubSpot object fields automatically. The CSV file must have a header line with column names matching the object fields. |
| Association | This field is optional. Select the objects for association. If you have multiple associations, ensure that the CSV column names are unique and mapped to the correct object. |
| Wait for HubSpot to process all records? | Select **Yes** or **No** from the drop-down menu. If **Yes** is selected, the action returns when HubSpot processes all the rows in the CSV file. If **No** is selected, the action moves to the next recipe action after the CSV file is uploaded to HubSpot. |

## Output

Workato returns a record representing each imported record. You can use these datapills in subsequent recipe steps.

---
