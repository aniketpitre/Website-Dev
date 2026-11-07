<!-- source: https://docs.workato.com/en/connectors/netsuite-rest/search-records-action | lastmod: 2026-06-17 -->
> The Search records action enables you to search and filter records from NetSuite.

# NetSuite REST - Search records action

The **Search records** action allows you to search for records in NetSuite. You can either enter a **Search query** or use the **Search settings** input fields to filter records. If you specify both, Workato prioritizes the **Search query** field.

You can only use fields with known data types to filter the input fields. To filter by other fields, use a custom **Search query**.

> **PREREQUISITES**
> 
> The **Search records** action has the following prerequisites in NetSuite:
> 
> - Your account must have the **SuiteAnalytics Workbook** feature enabled.
> - Your role must have the **SuiteAnalytics Workbook (View)** permission.
> 
> Refer to the NetSuite [Prerequisites and Setup for REST Web Services](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_5085602973.html#subsect_158219919831) guide for more information about the features and permissions required for REST Web Services.

## Input

| Input fields | Description |
| --- | --- |
| Record | Select a [NetSuite record](#record-types) to retrieve, or toggle this field to enter a custom record type ID. |
| Search query | Provide a search query to filter records, such as `email START_WITH barbara`. Refer to the [NetSuite Records Catalog](https://system.netsuite.com/app/recordscatalog/rcbrowser.nl) for more information on field names, types, and availability. |
| Search settings | Expand this section to configure search settings. |
| String fields | Select the search operator for all String fields. Default is **CONTAIN**. |
| Number fields | Select the search operator for all Integer, Number, Float, Double, and Duration fields. Default is **EQUAL**. |
| Date/Time fields | Select the search operator for all Date, Time, and DateTime fields. Default is **ON**. |
| Limit | Specify the number of records to retrieve on a single page. The maximum is `1000`. The default is `200`. |
| Offset | Specify the starting position for retrieving records. The default is `0`. |

Additional fields load dynamically based on your selected record type. Refer to the NetSuite [Record Filtering and Query](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_1540810947.html) documentation for more information about how to use this action.

### Record types

This action supports the following record types:

- Account
- Accounting period
- Advanced intercompany journal entry
- Assembly item
- Billing account
- Billing schedule
- Bin
- Bin transfer
- Cash refund
- Cash sale
- Change order
- Charge
- Check
- Class
- Commerce category
- Consolidated exchange rate
- Contact
- Contact category
- Contact role
- Cost category
- Credit card charge
- Credit card refund
- Credit memo
- Currency
- Customer
- Customer category
- Customer deposit
- Customer payment
- Customer refund
- Customer subsidiary relationship
- Department
- Deposit
- Deposit application
- Description item
- Discount item
- Email template
- Employee
- Estimate
- Event
- Expense category
- Expense report
- Fulfillment request
- Inbound shipment
- Intercompany journal entry
- Intercompany transfer order
- Inventory adjustment
- Inventory cost revaluation
- Inventory count
- Inventory item
- Inventory number
- Inventory transfer
- Invoice
- Item fulfillment
- Item group
- Item receipt
- Job
- Job status
- Job type
- Journal entry
- Kit item
- Location
- Markup item
- Message
- Nexus
- Non-inventory purchase items
- Non-inventory resale item
- Non-inventory sale item
- Opportunity
- Other charge for purchase item
- Other charge for resale item
- Other name
- Other name category
- Payment item
- Phone call
- Price book
- Price level
- Price plan
- Pricing group
- Project task
- Purchase order
- Requisition
- Return authorization
- Sales order
- Sales tax item
- Service purchase item
- Service resale item
- Service sale item
- Ship item
- Statistical journal entry
- Subscription
- Subscription line
- Subscription plan
- Subscription term
- Subsidiary
- Subtotal item
- Task
- Tax type
- Time bill (track time)
- Transfer order
- Unit of measure
- Usage
- Vendor
- Vendor bill
- Vendor category
- Vendor credit
- Vendor prepayment
- Vendor prepayment application
- Vendor return authorization
- Vendor subsidiary relationship

Refer to the NetSuite [REST Web Services Supported Records](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_1558962745.html) documentation for more information.

## Output

| Output fields | Description |
| --- | --- |
| Items | A list of records returned as a result of the search. |
| Internal ID (items) | The internal ID of the record. |
| Links (items) | A list of links associated with the record. |
| Rel (links) | The relationship type of the link. For example, `self`, `next`, `prev`, `first`, or `last`. |
| Href (links) | The URL endpoint for the linked resource. |
| Has more | Indicates whether there are more records associated with the search query that weren't included in the output. |
| Count | The number of records returned in the current response. |
| Offset | The starting index of the records in the current response relative to the full result set. |
| Total results | The total number of results matching the search criteria. |

---
