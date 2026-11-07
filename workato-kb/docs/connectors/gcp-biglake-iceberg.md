<!-- source: https://docs.workato.com/en/connectors/gcp-biglake-iceberg | lastmod: 2026-08-19 -->
> The GCP BigLake Iceberg connector integrates with Apache Iceberg tables managed by the BigLake Metastore on Google Cloud.

# GCP BigLake Iceberg

The GCP BigLake Iceberg connector integrates with Apache Iceberg tables managed by the BigLake Metastore on Google Cloud. It manages tables directly through the [BigLake API](https://cloud.google.com/bigquery/docs/reference/biglake/rest) and loads or queries data through the BigQuery Jobs API, automatically handling long-running jobs with built-in polling.

## Install GCP BigLake Iceberg from the community library

Complete the following steps to install the GCP BigLake Iceberg connector from the [community library](https://www.workato.com/browse/connectors):

1. Open the recipe editor and search for a connector. Alternatively, you can search for a connector in the [community library](https://www.workato.com/browse/connectors).
   
   ![Search for recipe editor](/assets/search-on-recipe-editor.VrZpf8zl.png)_Search for community connectors in the recipe editor_
   
2. Select the community connector you plan to install.
   
3. Click **Install** to install the connector from the community library.
   
   ![Click install](/assets/install-connector.BXpGZP9K.png)_Click **Install**_
   
4. Select **Release connector**. Alternatively, select **Review code** to review and modify the connector code before releasing it to the workspace.
   
   ![Release connector](/assets/release-and-review.kWToLwmF.png)_Release the connector_
   
5. Summarize any changes you made to the connector, then click **Release** to allow workspace collaborators to use the connector in recipes.
   
   ![The Confirm release dialog](/assets/release.CpEhhA-6.png)_The **Confirm release** dialog_
   

## Connection setup

The GCP BigLake Iceberg connector uses custom authentication with a Google Cloud service account and a JWT bearer token.

### Minimum and default scopes

Grant your Google Cloud service account the following minimum permissions:

- `biglake.tables.create`
- `biglake.tables.get`
- `biglake.tables.list`
- `bigquery.jobs.create`
- storage read/write access on your warehouse bucket.

Refer to the Google Cloud [Service accounts](https://cloud.google.com/iam/docs/service-accounts) documentation for more information about service accounts.

### GCP BigLake Iceberg set up

Complete the following steps to create a Google Cloud service account to establish a connection to GCP BigLake Iceberg in Workato:

1. Create a service account in your Google Cloud project and download its JSON key file. Refer to the Google Cloud [Create and delete service account keys](https://docs.cloud.google.com/iam/docs/keys-create-delete) documentation for detailed steps.
   
2. Grant the service account the permissions listed in [Minimum and default scopes](#scopes).
   
3. Enable the BigLake API (`biglake.googleapis.com`) and the BigQuery API (`bigquery.googleapis.com`) in your project. Refer to the Google Cloud [Enable and disable APIs](https://docs.cloud.google.com/endpoints/docs/openapi/enable-api) documentation for complete steps.
   

### Connect to GCP BigLake Iceberg using custom authentication

Complete the following steps to connect to GCP BigLake Iceberg in Workato:

1. Click **Create > Connection**.
   
2. Search for and select GCP BigLake Iceberg as your connection.
   
3. Enter a name for your connection in the **Connection name** field.
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Provide the email of the service account you created in the **Service account email** field, for example `name@project.iam.gserviceaccount.com`.
   
6. Copy and paste the private key from the downloaded service account JSON key file, including the `BEGIN`/`END` lines, into the **Private key** field.
   
7. Provide the default Google Cloud project ID billed for requests in the **Project ID** field, for example `my-gcp-project`.
   
8. Optionally, provide the default region for BigLake catalogs and BigQuery jobs in the **Default location** field, for example `us-central1` or `US`. You can override this value per action.
   
9. Click **Connect**.

---
