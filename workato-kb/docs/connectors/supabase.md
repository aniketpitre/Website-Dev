<!-- source: https://docs.workato.com/en/connectors/supabase | lastmod: 2026-10-13 -->
> Connect Supabase to Workato to query and update table rows, call database functions, manage storage objects, and trigger recipes on row changes.

# Supabase

[Supabase](https://supabase.com) is an open-source Postgres platform with an auto-generated REST API, object storage, and database webhooks. The Supabase connector lets you query and manage table rows, call database functions, and search or download storage objects in Workato.

Use the Supabase connector to:

- Query, insert, upsert, update, or delete rows in a Supabase table.
- Call a database function.
- Search or download objects in a storage bucket.
- Trigger a recipe when a row is inserted, updated, or deleted.

You can also use [custom actions](/en/developing-connectors/custom-actions) to build a custom HTTP request to any Supabase API endpoint. Refer to the Supabase [API](https://supabase.com/docs/guides/api) documentation for endpoint details.

## Install Supabase from the community library

Complete the following steps to install the Supabase connector from the [community library](https://www.workato.com/browse/connectors):

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

The Supabase connector uses API key authentication.

### Supabase setup for API key authentication

Complete the following steps to find your Supabase project URL and API key:

1. Sign in to your [Supabase](https://supabase.com/dashboard) account and open your project.
   
2. Go to **Project Settings > Data API** in the sidebar.
   
3. Copy and save the **API URL** for use in Workato. For example, `https://abcdefgh.supabase.co`.
   
4. Go to **Project Settings > API Keys**.
   
5. Copy and save a **Secret key** for use in Workato. For example, `sb_secret_Abcd`.
   

### Connect to Supabase using API key authentication

Complete the following steps to set up a Supabase connection in Workato:

1. Click **Create > Connection** or press C twice.
   
2. Search for `Supabase` and select it as your app.
   
3. Provide a name for your connection in the **Connection name** field.
   
   ![Supabase connection setup details](/assets/supabase-connection-setup.D-5aLBqe.png)_Supabase connection setup_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Enter the **Project URL**. This is the **API URL** in Supabase. Refer to [Supabase setup for API key authentication](#supabase-setup) for more information.
   
6. Enter the **API key**. Use the **Secret key** you saved from Supabase. Refer to [Supabase setup for API key authentication](#supabase-setup) for more information.
   
7. Click **Connect**.

---
