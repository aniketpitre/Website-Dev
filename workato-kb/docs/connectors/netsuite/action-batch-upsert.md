<!-- source: https://docs.workato.com/en/connectors/netsuite/action-batch-upsert | lastmod: 2026-09-08 -->
> The Upsert standard and custom records in batch actions in the NetSuite SOAP connector upsert multiple records synchronously for high-volume data loads.

# NetSuite SOAP - Upsert records in batch actions

The actions **Upsert standard records in batch** and **Upsert custom records in bulk** allow you to upsert in batch standard records or custom records.

These actions are synchronous, meaning that Workato sends a request to NetSuite to upsert a custom or standard record and then waits for Netsuite to complete before beginning other recipe actions. This is in contrast to our bulk actions which are asynchronous API calls - meaning Workato calls NetSuite and then must poll for the job status, which can cause delays and longer job times.

Synchronous actions can be especially useful during high volume data loads where ingestion time is critical.

> **API CONCURRENCY**
> 
> Synchronous actions may result in more performance benefits in terms of ingestion but also consume your organization's API concurrency. By default, this is set to 5 but you may have purchased more from NetSuite. At API concurrency of 5, this means that you may have up to 5 concurrent NetSuite requests across your workspace but allows you to ingest up to 5 times more records than our asynchronous bulk actions. However, you should be conscious of your concurrency quotas during large data volume loads, as this could also impact your other integrations that need concurrency. A simple way to limit API concurrency on Workato would be through [Recipe Concurrency](/en/recipes/settings#concurrency). Buying more API concurrency increases the number of batches you can process simultaneously in your workspace. Contact your Netsuite Customer Support Representative for more information.
> 
> One thing to note - Netsuite bulk actions, whilst less performant, utilize significantly less API concurrency since jobs are processed in a single queue on Netsuite.

## Limitations

Workato limits the processing time for each action to 180 seconds, but in some cases, NetSuite can take much longer to process synchronous API calls containing large batches of records. This can result in a timeout error in Workato. To prevent this, we recommend reducing your batch size for this specific record to ensure optimal processing in less than seconds.

## Input

Select the **Standard record** or **Custom record** that you plan to upsert.

In our example, we are updating a standard record and have selected **Customer**.

![Select Netsuite record](/assets/record-name-upsert.DzcLg1KY.png)_Select a NetSuite record_

### Field configuration

Configure the following input fields to shortlist which NetSuite fields you plan to use. Only shortlisted fields display in the action's input and output. This optimizes your NetSuite API requests and makes working with complex NetSuite objects containing hundreds of fields easier.

In this example, we used the fields **Company name**, **External ID**, and the custom field **Product interest**.

![Field configuration](/assets/fields-config-upsert.BbajeLue.png)_Shortlist NetSuite fields_

- Fields
  
- The Netsuite record's main fields that you plan to shortlist. If left blank, all fields are displayed in the input and output datatree.
  
- Custom fields
  
- The Netsuite record's custom fields that you plan to shortlist. If no fields are selected, Workato retrieves 50 custom fields by default.
  
- Custom segment schema
  
- If your Netsuite record has a custom schema, you can define the custom schema here.
  

### Record

The name of this section is dynamic and is based on the **Standard record** or **Custom record** you selected in the previous step. In our example, this section is named **Customers**.

You map the record's **External ID**. Based on this mapping, NetSuite updates the record if the provided External ID exists, or creates a new record if the provided External ID does not exist.

The following are all input fields in this section:

- Record source list
  
- You must provide a [list datapill](/en/features/list-management) here.
  
  For example, list of rows in a CSV file. The action automatically iterates through all items in the list and maps them to NetSuite records.
  
- External ID
  
- NetSuite records can have an External ID, which refers to the corresponding record ID from another system (for example, Salesforce record ID).
  
  When importing data from another system, NetSuite uses this to determine which record to upsert.
  
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
