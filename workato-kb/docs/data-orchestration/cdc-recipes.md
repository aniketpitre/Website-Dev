<!-- source: https://docs.workato.com/en/data-orchestration/cdc-recipes | lastmod: 2026-06-30 -->
> Explore example Change Data Capture (CDC) recipe patterns for extracting data in bulk and batches from SaaS, databases, file systems, and on-premise sources.

# Example Change Data Capture (CDC) recipes

This guide provides examples of different recipe design patterns you can use for CDC (Change Data Capture). These examples demonstrate how you can extract data in bulk and in batches from the following sources:

- SaaS
- Databases
- File systems
- On-premise systems

## SaaS

### Batch extraction from Salesforce

This recipe demonstrates how you can use batch triggers for CDC. This recipe extracts new/updated records in batches from a source system (Salesforce) and loads it into a data warehouse (Snowflake).

![Batch extraction recipe](/assets/di-cdc-batch-extract-db.CpYAC-TN.png)_Batch extraction from Salesforce_

#### Recipe walkthrough

1. Configure the **New/updated records in Salesforce batch** trigger. This trigger monitors Salesforce for changes. The trigger exports the records in batch when records are added or updated.
   
2. Upsert the data extracted from Salesforce into Snowflake using the **Upsert batch of rows** action.
   

* * *

## Databases

### Scheduled bulk extraction from a database

This example demonstrates how to extract data from databases in bulk. This recipe extracts data from PostgreSQL and loads it into Snowflake.

![Bulk extraction from database recipe](/assets/di-cdc-bulk-extract-db.CsxZDNTo.png)_Bulk extraction from PostgreSQL_

### Supported databases

The following database connectors support bulk actions:

- Snowflake
- PostgreSQL
- MySQL

#### Recipe walkthrough

1. Set up a **Scheduler** trigger and determine the frequency of bulk extractions.
   
2. Export data in bulk using the **Export query result** from PostgreSQL action.
   
3. Upload the file to an external staging location such as an S2 bucket using the **AWS S3 Upload file** action.
   
4. Load the exported data into a table in Snowflake using the **Bulk load to table from stage** action.
   

* * *

### Batch extraction from a database

This example demonstrates how to extract data from databases in batches and load them to a destination.

![Batch extraction from database recipe](/assets/di-cdc-batch-extract-db.CpYAC-TN.png)

#### Supported databases

All of Workato's database connectors support batch extraction, including:

- Snowflake
- SQL Server
- PostgreSQL
- Oracle
- MySQL
- Redshift

#### Recipe walkthrough

1. Export new/updated records in batches from PostgreSQL using the **New/updated rows** in PostgreSQL trigger.
   
2. Upsert the exported rows into your data warehouse such as SQL server using the **Upsert batch of rows** in SQL server action.
   

* * *

## File systems

File connectors in Workato enable users to extract data from file systems using **download** actions that are compatible with streaming. Pairing this action with a downstream system that is compatible with bulk loads facilitates data extraction from file systems and loading into databases or data warehouses.

You can also pair download actions with bulk actions in app connectors to extract data from file systems and send your data to applications as a whole.

* * *

### Bulk extract from FileStorage and load to Snowflake

This example demonstrates how to load aggregated data in Workato FileStorage into a data table in a data warehouse (Snowflake).

![Bulk extract and load recipe](/assets/di-file-connectors-extract.BmHGjw-N.png)_Extract data in bulk from FileStorage and load to Snowflake_

#### Recipe walkthrough

1. Use the **New file in Workato FileStorage** trigger to monitor a specific directory for new files. A new recipe job begins when files are added to the directory.
   
2. Upload the files in bulk to Snowflake using the **Upload file to internal stage** action.
   

* * *

### Bulk extract data from SFTP to Salesforce

This example demonstrates how to sync leads data in SFTP into a cloud CRM system (Salesforce).

![Extract bulk data recipe](/assets/di-sftp-salesforce-extract-bulk.DK7ZlVSJ.png)_Extract data in bulk from SFTP and load to Salesforce_

#### Supported connectors

The following connectors support bulk downloads.

All file connectors:

- On-prem files
- Workato FileStorage
- SFTP
- FTP/FTPS
- Google Drive
- Microsoft OneDrive
- Microsoft Sharepoint
- Box
- Dropbox
- BIM 360
- Egnyte

All data lake connectors:

- AWS S3
- Azure Blob Storage
- Google Cloud Storage

#### Recipe walkthrough

1. Use the **New file** trigger to monitor SFTP for new files. A new recipe job begins when new files are detected in the partner server.
   
2. Use the **Download file** from SFTP server action to fetch the file contents and stream it to the next action.
   
3. Use the **Create leads in bulk** in Salesforce action to consume the streamed bulk data, load it into Salesforce, and create leads.

---
