<!-- source: https://docs.workato.com/en/connectors/workato-edi | lastmod: 2026-10-21 -->
> The Workato EDI connector, powered by Orderful, enables you to automate EDI workflows, exchanging purchase orders, invoices, and shipment notices.

# Workato EDI connector

The Workato EDI connector, powered by Orderful, enables seamless and automated Electronic Data Interchange (EDI) between businesses and their trading partners using Orderful’s modern cloud EDI platform. Use this connector to exchange critical business documents, such as purchase orders, invoices, and shipment notices in standardized EDI formats within Workato’s low-code automation environment.

> **WORKING WITH THE WORKATO EDI CONNECTOR**
> 
> The Workato EDI connector includes a **New transactions in polling bucket** trigger, which monitors a polling bucket for new transactions in Orderful. This trigger automatically approves delivery for each transaction it retrieves and clears your bucket right after retrieval to avoid data duplication. Note that the `Delivery status` of retrieved transactions shows as `Sent` rather than `Delivered`. This is because the status is captured at the moment of retrieval before the approval completes.

## API version

The Workato EDI connector uses the [Orderful API v3](https://docs.orderful.com/v3.0/reference/overview).

## Supported data formats

The Workato EDI connector supports the following formats:

- **EDIFACT**
- **X12**
- **Any File** (custom EDI). Send and receive files in formats other than standard EDI, such as custom JSON, XML, CSV, PDF, and JPEG. Use the [Send transaction file](/en/connectors/workato-edi/send-transaction-file) and [Download transaction file](/en/connectors/workato-edi/download-transaction-file) actions. Refer to the Orderful [EDI vs Any File](https://docs.orderful.com/docs/standard-edi-vs-any-file) documentation for more information.

> **JSON REPRESENTATION**
> 
> Workato represents EDIFACT and X12 transactions as JSON. Transaction data uses JSON structure rather than raw EDI segments in recipes.

## How to connect to the Workato EDI connector

Complete the following steps to establish a connection to Workato EDI in Workato:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select **Workato EDI** as your connection on the **New connection** page.
   
3. Enter a name for your connection in the **Connection name** field.
   
   ![Create connection](/assets/connection-setup.D2MVKvhA.png)_Create your connection_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Data center** drop-down menu to select the data center for your Workato EDI account. Defaults to **US**.
   
6. Enter your Orderful **API key**.
   
   You can retrieve your API key from Orderful in **Settings > API Credentials**.
   
7. Click **Connect**.

---
