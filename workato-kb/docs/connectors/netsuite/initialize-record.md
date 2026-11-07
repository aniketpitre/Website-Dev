<!-- source: https://docs.workato.com/en/connectors/netsuite/initialize-record | lastmod: 2026-05-22 -->
> The Initialize record action creates a new NetSuite record that is pre-filled with data from a related record

# NetSuite SOAP - Initialize record action

The **Initialize record** action creates a new NetSuite record with data from a related record. You can use this action to create records like Cash Sales or Item Fulfillments based on existing transactions. This action retrieves all relevant fields and line items from the source record, removing the need for additional lookups or manual field mapping.

## Input

| Input field | Description |
| --- | --- |
| Record | Specify the NetSuite record type to initialize. Options include: Assembly Build, Assembly Unbuild, Cash Sale, Credit Memo, Customer Payment, Customer Refund, Estimate, Invoice, Item Fulfillment, Item Receipt, Return Authorization, Vendor Bill, Vendor Credit, Vendor Payment, Work Order Close, Work Order Completion, Work Order Issue |
| Reference record | Select the related record type to use as a reference. Options vary based on the selected record: **Assembly Build**: Assembly Item, Sales Order, Work Order; **Assembly Unbuild**: Assembly Build, Assembly Item; **Cash Sale**: Customer, Estimate, Opportunity, Sales Order; **Credit Memo**: Cash Sale, Invoice, Sales Order; **Customer Payment**: Credit Memo, Invoice, Sales Order; **Customer Refund**: Credit Memo, Customer Payment; **Estimate**: Customer, Opportunity; **Invoice**: Estimate, Opportunity, Sales Order; **Item Fulfillment**: Sales Order, Transfer Order; **Item Receipt**: Purchase Order, Transfer Order, Return Authorization; **Return Authorization**: Cash Sale, Invoice, Sales Order; **Vendor Bill**: Purchase Order; **Vendor Credit**: Purchase Order, Vendor Bill; **Vendor Payment**: Vendor Bill, Vendor Credit; **Work Order Close**: Work Order; **Work Order Completion**: Work Order; **Work Order Issue**: Work Order |
| Reference record ID | Provide the internal ID of the reference record in NetSuite. |

## Output

The output schema is dynamically generated based on the selected record type. It includes the fields relevant to the initialized record.

---
