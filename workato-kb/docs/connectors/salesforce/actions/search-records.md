<!-- source: https://docs.workato.com/en/connectors/salesforce/actions/search-records | lastmod: 2026-06-17 -->
> This action retrieves a list of Salesforce records that match the search criteria you provide.

# Salesforce - Search records action (batch)

This action retrieves a list of Salesforce records that match the search criteria you provide. Each job can retrieve up to 2,000 records.

> **ACTION TIMEOUT**
> 
> Some Salesforce fields are indexed, which allows queries on them to run faster and more efficiently. This action may fail due to a timeout if you search by unindexed fields, such as custom objects. Refer to the Salesforce [Improve Performance of SOQL Queries using a Custom Index](https://help.salesforce.com/apex/HTViewSolution?id=000006007&language=en_US) guide to improve the performance of search. Use the [Search records using SOQL](/en/connectors/salesforce/actions/search-records-soql) action for advanced search.

## Input

| Input fields | Description |
| --- | --- |
| Search for | Select the type of Salesforce object to search for. |
| Fields to retrieve | Select the fields to retrieve from the object. Workato retrieves all fields by default. Entering specific fields to retrieve improves recipe performance and mitigates [schema errors](/en/connectors/salesforce/troubleshoot-runtime#schema-errors). |
| Limit | Enter the maximum number of records to return each job. The maximum value for this field is 2,000. |
| On-behalf-of user email | Optional. Enter the email of a Salesforce user to impersonate. Contact your Workato Customer Success Manager to enable this field. This field only supports JWT connections. |

## Output

The output of this action varies based on your selected **Object** and **Fields to retrieve**. Refer to Salesforce's [Overview of Salesforce Objects and Fields](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm) guide for more information on available objects and fields.

---
