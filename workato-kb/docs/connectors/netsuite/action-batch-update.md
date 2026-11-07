<!-- source: https://docs.workato.com/en/connectors/netsuite/action-batch-update | lastmod: 2026-09-08 -->
> The batch update actions in the NetSuite SOAP connector update multiple standard or custom records synchronously and return success and failure data.

# NetSuite SOAP - Update records in batch actions

The actions **Update standard records in batch** and **Update custom records in batch** allow you to update standard records or custom records in batches. These actions return the IDs of records successfully uploaded to NetSuite and the list of data that failed to upload to NetSuite.

These actions are synchronous, meaning that Workato sends a request to NetSuite to update a custom or standard record and then waits for Netsuite to complete before beginning other recipe actions. This is in contrast to our bulk actions which are asynchronous API calls - meaning Workato calls NetSuite and then must poll for the job status, which can cause delays and longer job times.

Synchronous actions can be especially useful during high volume data loads where ingestion time is critical.

> **API CONCURRENCY**
> 
> Synchronous actions may result in more performance benefits in terms of ingestion but also consume your organization's API concurrency. By default, this is set to 5 but you may have purchased more from NetSuite. At API concurrency of 5, this means that you may have up to 5 concurrent NetSuite requests across your workspace but allows you to ingest up to 5 times more records than our asynchronous bulk actions. However, you should be conscious of your concurrency quotas during large data volume loads, as this could also impact your other integrations that need concurrency. A simple way to limit API concurrency on Workato would be through [Recipe Concurrency](/en/recipes/settings#concurrency). Buying more API concurrency increases the number of batches you can process simultaneously in your workspace. Contact your Netsuite Customer Support Representative for more information.
> 
> One thing to note - Netsuite bulk actions, whilst less performant, utilize significantly less API concurrency since jobs are processed in a single queue on Netsuite.

## Limitations

Workato limits the processing time for each action to 180 seconds, but in some cases, NetSuite can take much longer to process synchronous API calls containing large batches of records. This can result in a timeout error in Workato. To prevent this, we recommend reducing your batch size for this specific record to ensure optimal processing in less than seconds.

## Input

Select the **Standard record** or **Custom record** that you plan to update.

In our example, we update a standard record and select **Customer**.

![Select Netsuite record](/assets/record-name-update.DS3bs8oq.png)_Select a NetSuite record_

### Field configuration

Configure the following input fields to shortlist which NetSuite fields you plan to use. Only shortlisted fields display in the action's input and output. This optimizes your NetSuite API requests and makes working with complex NetSuite objects containing hundreds of fields easier.

In this example, we used the fields **Company name** and **Internal ID**.

![Field configuration](/assets/fields-config-update.BsV_6hLC.png)_Shortlist NetSuite fields_

- Fields
  
- The Netsuite record's main fields that you plan to shortlist. If left blank, all fields are displayed in the input and output datatree.
  
- Custom fields
  
- The Netsuite record's custom fields that you plan to shortlist. If no fields are selected, Workato retrieves 50 custom fields by default.
  
- Custom segment schema
  
- If your Netsuite record has a custom schema, you can define the custom schema here.
  
- Line item custom fields
  
- The Netsuite record's line item custom fields to be shortlisted. If no fields are selected, Workato retrieves 50 custom fields by default.
  
- Line item custom segment schema
  
- If your Netsuite line item has custom schema, you can define the custom schema here.
  

### Record

The name of this section is dynamic and is based on the **Standard record** or **Custom record** you selected in the previous step. In our example, this section is named **Customers**.

You must map the record's **Internal ID** so NetSuite knows which records to update.

The following are all input fields in this section:

- Record source list
  
- Provide a [list datapill](/en/features/list-management) here. For example, list of rows in a CSV file. The action automatically iterates through all items in the list and maps them to NetSuite records.
  
- Internal ID
  
- ID of the NetSuite record. NetSuite uses this to determine which record to update.
  
- Record fields
  
- Here you must map the datapills under the list datapill provided previously. For example, CSV column names under the CSV Rows list datapill. The action automatically iterates through all items in the list and maps them to NetSuite records.
  

## Output

- Number of processed records
  
- The total number of records processed.
  
- Number of successful records
  
- The number of records successfully created.
  
- Number of failed records
  
- The number of records failed to be created.

---
