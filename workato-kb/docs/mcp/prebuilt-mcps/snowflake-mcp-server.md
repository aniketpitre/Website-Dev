<!-- source: https://docs.workato.com/en/mcp/prebuilt-mcps/snowflake-mcp-server | lastmod: 2026-09-08 -->
> Use the Snowflake Data Explorer MCP server to connect your LLM to Snowflake with tools to discover, understand, and retrieve data.

# Snowflake Data Explorer MCP server

The Snowflake Data Explorer MCP server enables LLMs to discover, understand, and retrieve data from Snowflake through governed, read-only access. It provides tools to navigate databases, schemas, tables, and views, inspect schema metadata, sample data, and execute read-only SQL within configured safety and access boundaries. The server doesn't modify data, run administrative or DDL operations, or perform AI inference such as Snowflake Cortex functions.

## Uses

Use the Snowflake Data Explorer MCP server to perform the following actions:

- List Snowflake databases accessible within configured allowlists
- Explore schemas within specific databases
- Discover tables and views within schemas
- Search for tables and views by name-oriented criteria when the exact location is unknown
- Retrieve column names, data types, and available descriptions for tables or views
- Sample bounded sets of rows from tables or views to inspect values and formats
- Execute governed, read-only SQL queries with enforced row quotas, timeouts, and object allowlists

### Example prompts

Use the following example prompts to invoke Snowflake Data Explorer MCP server tools:

- `What databases are available in Snowflake?`
- `List the schemas in the SALES_DATA database.`
- `Show me tables in the CUSTOMER_ANALYTICS schema.`
- `Show me views in the CUSTOMER_ANALYTICS schema.`
- `Find tables related to subscriptions.`
- `Find views related to subscriptions.`
- `What columns are in the CUSTOMER_EVENTS table?`
- `Show me a sample of data from the activity logs table.`
- `Query the top 100 customers by revenue from last quarter.`

## Snowflake Data Explorer MCP server tools

The Snowflake Data Explorer MCP server provides the following tools:

| Tool | Description |
| --- | --- |
| [list\_databases](#list-databases-tool) | Lists Snowflake databases accessible within the server's configured allowlists. |
| [list\_schemas](#list-schemas-tool) | Lists schemas in a specified database to navigate the Snowflake object hierarchy. |
| [list\_tables](#list-tables-tool) | Lists tables in a specified schema with metadata suitable for discovery. |
| [list\_views](#list-views-tool) | Lists views in a specified schema with metadata suitable for discovery. |
| [search\_tables](#search-tables-tool) | Searches for tables by name-oriented criteria when the exact location is unknown. |
| [search\_views](#search-views-tool) | Searches for views by name-oriented criteria when the exact location is unknown. |
| [get\_table\_schema](#get-table-schema-tool) | Retrieves column names, data types, and available descriptions for a specified table or view. |
| [get\_table\_sample](#get-table-sample-tool) | Returns a bounded sample of rows from a table or view to inspect values and formats before running full queries. |
| [execute\_query](#execute-query-tool) | Executes a read-only SQL query against Snowflake using the configured warehouse, subject to row quotas, timeouts, and access restrictions. |

## Install the Snowflake Data Explorer MCP server

Complete the following steps to install a prebuilt MCP server to your project:

1. Sign in to your Workato account.
   
2. Go to **AI Hub > Enterprise MCP > Custom servers**.
   
3. Click **\+ Create MCP server**.
   
4. Go to the **Start with pre-built MCP Servers using your connected apps** section and select the prebuilt MCP server you plan to use.
   
5. Click **Use this server**.
   
6. Provide a name for your MCP server in the **Server name** field.
   
7. Use the **Location** drop-down menu to select the project for the MCP server.
   
8. Go to the **Connections** section and connect to your app account.
   
9. Select the connection type you plan to use for the MCP server template.
   
   - **User's connection**: MCP server tools perform actions based on the identity and permissions of the user who connects to the application. Users authenticate with their own credentials to execute the skill.
   - **Your connection**: This option uses the connection established by the recipe builder and follows the same principles as normal app connections.
   
   ![Select your connection type](/assets/connection-type.Cor-6PJN.png)_Select your connection type_
   
   > **VERIFIED USER ACCESS AUTHENTICATION REQUIREMENTS**
   > 
   > Only app connections that use OAuth 2.0 authorization code grant are available for user's connection. Refer to [Verified user access](/en/mcp/verified-user-access) for more information.
   
10. Complete the app-specific connection setup steps in the following section.
    

## Snowflake connection setup

View Snowflake connection setup steps

Workato supports the following authentication methods for Snowflake connections:

- [OAuth 2.0](#configuring-oauth-2-0)
- [Key-pair authentication](#configure-private-key-authentication)

### Configure OAuth 2.0 authentication

View Configure OAuth 2.0 authentication steps

You must create a custom integration and generate a client ID and secret in Snowflake to use OAuth 2.0 authentication.

#### Snowflake setup for OAuth 2.0 authentication

Complete the following steps to create a custom integration and retrieve client credentials in Snowflake:

1. Run the following SQL command in Snowflake to register a custom OAuth integration:
   
   ```sql
   CREATE SECURITY INTEGRATION WORKATO_OAUTH
     TYPE = OAUTH
     ENABLED = TRUE
     OAUTH_CLIENT = CUSTOM
     OAUTH_CLIENT_TYPE = CONFIDENTIAL
     OAUTH_REDIRECT_URI = 'https://www.workato.com/oauth/callback'
     OAUTH_ISSUE_REFRESH_TOKENS = TRUE;
   ```
   
   > **REQUIRED PRIVILEGE**
   > 
   > Use the `ACCOUNTADMIN` role or a role with the global `CREATE INTEGRATION` privilege to run this command.
   
2. Run the following command to retrieve your client credentials:
   
   ```sql
   SELECT SYSTEM$SHOW_OAUTH_CLIENT_SECRETS('WORKATO_OAUTH');
   ```
   
   Refer to the Snowflake [Configure Snowflake OAuth for custom clients](https://docs.snowflake.net/manuals/user-guide/oauth-custom.html) guide for more information.
   
3. Copy and save the **Client ID** and **Client secret** for use in Workato.
   

#### Connect to Snowflake with OAuth 2.0 authentication

Complete the following steps to set up an OAuth 2.0 authentication connection to Snowflake Data Explorer in Workato:

1. Click **Create > Connection** or press C twice.
   
2. Search for `Snowflake` and select it as your app.
   
3. Enter a name for your connection in the **Connection name** field.
   
   ![Snowflake OAuth 2.0 connection](/assets/connection.BBLDp5Fr.png)_Snowflake OAuth 2.0 connection_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Enter the Snowflake instance **Account identifier** in one of the supported formats:
   
   - **Account name**: `https://{org_name}-{account_name}`
   - **Connection name**: `https://{org_name}-{connection_name}`
   - **Account locator**: `https://{account_locator}.{region}.{cloud}`
   
   Refer to the Snowflake [Connecting to your accounts](https://docs.snowflake.com/en/user-guide/organizations-connect#connecting-with-a-url) guide for more information.
   
   > **ACCOUNT LOCATOR FORMAT**
   > 
   > Certain locations require you to include the `{region}` and `{cloud}` in your account locator URL. For example:
   > 
   > - **AWS US West (Oregon)**: `your-account-locator`
   > - **AWS US East (Ohio)**: `your-account-locator.us-east-2`
   > - **Azure West Europe**: `your-account-locator.west-europe.azure`
   > 
   > Refer to the Snowflake [Using an account locator as an identifier](https://docs.snowflake.com/en/user-guide/admin-account-identifier#using-an-account-locator-as-an-identifier) guide for more information.
   
6. Enter the **Warehouse** name to define the compute resources for this connection. Refer to [Warehouse considerations](/en/connectors/snowflake#warehouse-considerations) for more information.
   
7. Enter the **Database name** for the target Snowflake database.
   
8. Use the **Authentication type** drop-down menu to select **OAuth 2.0**.
   
9. Enter the **Client ID** and **Client secret**. Refer to [Snowflake setup for OAuth 2.0 authentication](#oauth2-setup) for information on how to retrieve these credentials.
   
10. Optional. Specify a **Role** for authentication. This role must be an existing role assigned to the user. If left blank, Snowflake uses the default role assigned to the user.
    
11. Optional. Enter the **Schema**. If left blank, the default schema is public.
    
12. Optional. Set the **Use improved datetime handling (Recommended)** to **Yes** to ensure correct timezone handling for timestamps.
    
13. Optional. Define the **Database timezone** to apply to timestamps without an assigned timezone. Defaults to your workspace's timezone if left blank.
    
14. Click **Connect**.
    
15. Click **Allow** to provision access to Workato.
    

### Configure key-pair authentication

View Configure key-pair authentication steps

Use key-pair authentication to connect to Snowflake without a password. This method uses a client-generated RSA key pair and provides strong security. You must use a command-line tool to generate the key pair.

#### Snowflake setup for key-pair authentication

Complete the following steps to create a key pair in Snowflake:

1. Run one of the following commands in a terminal to generate a private key.
   
   **Unencrypted**
   
   Generate an unencrypted private key:
   
   ```bash
   openssl genrsa 2048 | openssl pkcs8 -topk8 -inform PEM -out rsa_key.p8 -nocrypt
   ```
   
   **Encrypted v1**
   
   Generate an encrypted private key using a `-v1` algorithm:
   
   ```bash
   openssl genrsa 2048 | openssl pkcs8 -topk8 -v1 <ALGORITHM> -inform PEM -out rsa_key.p8
   ```
   
   You can use the following `-v1` algorithms:
   
   - `PBE-SHA1-RC2-40`
   - `PBE-SHA1-RC4-40`
   - `PBE-SHA1-RC2-128`
   - `PBE-SHA1-RC4-128`
   - `PBE-SHA1-3DES`
   - `PBE-SHA1-2DES`
   
   **Encrypted v2**
   
   Generate an encrypted private key using a stronger `-v2` algorithm:
   
   ```bash
   openssl genrsa 2048 | openssl pkcs8 -topk8 -v2 <ALGORITHM> -inform PEM -out rsa_key.p8
   ```
   
   You can use the following `-v2` algorithms:
   
   - `AES128`
   - `AES256`
   - `DES3`
   
   > **PRIVATE KEY PASSPHRASE**
   > 
   > If you generate an encrypted private key, you must enter the **Private key passphrase** when you configure the connection in Workato.
   
2. Copy and save the **PRIVATE KEY** for use in Workato. Copy everything from `-----BEGIN PRIVATE KEY-----` to `-----END PRIVATE KEY-----`.
   
3. Run the following command to create a public key from the private key. OpenSSL prompts you for the passphrase if you generated an encrypted private key.
   
   ```bash
   openssl rsa -in rsa_key.p8 -pubout -out rsa_key.pub
   ```
   
4. Copy and save the **PUBLIC KEY** for use in the next step.
   
   Refer to the Snowflake [Key-pair authentication and key-pair rotation](https://docs.snowflake.com/en/user-guide/key-pair-auth) guide for more information.
   
5. Run the following SQL command in a Snowflake worksheet to assign the public key to your Snowflake user:
   
   ```sql
   ALTER USER <USERNAME> SET RSA_PUBLIC_KEY='<PUBLIC_KEY>';
   ```
   
   Replace `<USERNAME>` with your Snowflake user and `<PUBLIC_KEY>` with the key content. Exclude the `-----BEGIN PUBLIC KEY-----` and `-----END PUBLIC KEY-----` lines.
   
   > **ROLE REQUIREMENT**
   > 
   > You must have the `SYSADMIN` or `SECURITYADMIN` role to run this command.
   

#### Connect to Snowflake with key-pair authentication

Complete the following steps to set up a key-pair authentication connection to Snowflake Data Explorer in Workato:

1. Click **Create > Connection** or press C twice.
   
2. Search for `Snowflake` and select it as your app.
   
3. Enter a name for your connection in the **Connection name** field.
   
   ![Snowflake Key-pair connection](/assets/key-pair-connection.DhSthvSv.png)_Snowflake key-pair connection_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Enter the Snowflake instance **Account identifier** in one of the supported formats:
   
   - **Account name**: `https://{org_name}-{account_name}`
   - **Connection name**: `https://{org_name}-{connection_name}`
   - **Account locator**: `https://{account_locator}.{region}.{cloud}`
   
   Refer to the Snowflake [Connecting to your accounts](https://docs.snowflake.com/en/user-guide/organizations-connect#connecting-with-a-url) guide for more information.
   
   > **ACCOUNT LOCATOR FORMAT**
   > 
   > Certain locations require you to include the `{region}` and `{cloud}` in your account locator URL. For example:
   > 
   > - **AWS US West (Oregon)**: `your-account-locator`
   > - **AWS US East (Ohio)**: `your-account-locator.us-east-2`
   > - **Azure West Europe**: `your-account-locator.west-europe.azure`
   > 
   > Refer to the Snowflake [Using an account locator as an identifier](https://docs.snowflake.com/en/user-guide/admin-account-identifier#using-an-account-locator-as-an-identifier) guide for more information.
   
6. Enter the **Warehouse** name to define the compute resources for this connection. Refer to [Warehouse considerations](/en/connectors/snowflake#warehouse-considerations) for more information.
   
7. Enter the **Database name** for the target Snowflake database.
   
8. Use the **Authentication type** drop-down menu to select **Key-pair authentication**.
   
9. Enter the **User name** and **Private key**. Refer to [Snowflake setup for key-pair authentication](#key-pair-setup) for information on how to retrieve these credentials.
   
10. Optional. Enter the **Private key passphrase** if you generated an encrypted private key.
    
11. Optional. Specify a **Role** for authentication. This role must be an existing role assigned to the user. If left blank, Snowflake uses the default role assigned to the user.
    
12. Optional. Enter the **Schema**. If left blank, the default schema is public.
    
13. Optional. Set the **Use improved datetime handling (Recommended)** to **Yes** to ensure correct timezone handling for timestamps.
    
14. Optional. Define the **Database timezone** to apply to timestamps without an assigned timezone. Defaults to your workspace's timezone if left blank.
    
15. Click **Connect**.
    

## How to use Snowflake Data Explorer MCP server tools

Refer to the following sections for detailed information on available tools:

### list\_databases tool

The **list\_databases** tool lists Snowflake databases accessible within the server's configured allowlists. Your LLM uses this tool to discover available databases or begin navigating the Snowflake structure.

**Try asking**:

- `What databases are available in Snowflake?`
- `Show me all accessible databases.`
- `List the databases I can query.`
- `What data groupings exist in Snowflake?`

### list\_schemas tool

The **list\_schemas** tool lists schemas in a database you specify to navigate the Snowflake object hierarchy. Your LLM uses this tool to explore schemas within a known database.

**Try asking**:

- `List the schemas in the SALES_DATA database.`
- `What schemas exist in the ANALYTICS database?`
- `Show me available schemas in CUSTOMER_DATA.`
- `What namespaces are in this database?`

### list\_tables tool

The **list\_tables** tool lists tables in a schema you specify, with metadata suitable for discovery. Your LLM uses this tool to discover tables within a known schema.

**Try asking**:

- `Show me tables in the CUSTOMER_ANALYTICS schema.`
- `List all tables in the SALES schema.`
- `What tables can I query in MARKETING.CAMPAIGNS?`
- `Display available tables in this schema.`

### list\_views tool

The **list\_views** tool lists views in a schema you specify, with metadata suitable for discovery. Your LLM uses this tool to discover views within a known schema.

**Try asking**:

- `Show me views in the CUSTOMER_ANALYTICS schema.`
- `List all views in the SALES schema.`
- `What views can I query in MARKETING.CAMPAIGNS?`
- `Display available views in this schema.`

### search\_tables tool

The **search\_tables** tool searches for tables by name-oriented criteria when the exact location is unknown. Your LLM uses this tool to locate tables by topic or keyword rather than exact name.

**Try asking**:

- `Find tables related to subscriptions.`
- `Search for tables containing customer activity data.`
- `Look for tables about support tickets.`
- `Find any tables with 'revenue' in the name.`

### search\_views tool

The **search\_views** tool searches for views by name-oriented criteria when the exact location is unknown. Your LLM uses this tool to locate views by topic or keyword rather than exact name.

**Try asking**:

- `Find views related to subscriptions.`
- `Search for views containing customer activity data.`
- `Look for views about support tickets.`
- `Find any views with 'revenue' in the name.`

### get\_table\_schema tool

The **get\_table\_schema** tool retrieves column names, data types, and available descriptions for a specified table or view. Your LLM uses this tool to understand table structure before constructing a query.

**Try asking**:

- `What columns are in the CUSTOMER_EVENTS table?`
- `Show me the schema for SALES.TRANSACTIONS.`
- `What's the structure of the activity logs table?`
- `Get column definitions for the subscription data table.`

### get\_table\_sample tool

The **get\_table\_sample** tool returns a bounded sample of rows from a table or view to inspect values and formats before running full queries. Your LLM uses this tool to validate assumptions about data content.

**Try asking**:

- `Show me a sample of data from the activity logs table.`
- `Get some example rows from the customer events table.`
- `What does the data in the transactions table look like?`
- `Display a few sample records from subscriptions.`

### execute\_query tool

The **execute\_query** tool executes a read-only SQL query against Snowflake using the configured warehouse, subject to row quotas, timeouts, and access restrictions. Your LLM uses this tool to retrieve data using SQL, including filters, joins, and aggregations.

**Try asking**:

- `Query the top 100 customers by revenue from last quarter.`
- `Get all active subscriptions created in the last 30 days.`
- `Show me support tickets opened this week by priority.`
- `Find the total sales by region for January 2026.`

## Getting started

View and manage your MCP server tools in the **Details** tab **Tools** section. Tool management provides the following capabilities:

- [Start tools](/en/mcp/manage-tools#start-tools)
- [Remove tools](/en/mcp/manage-tools#remove-tools)
- [Edit tools](/en/mcp/manage-tools#edit-tools)
- [Add tools](/en/mcp/manage-tools#add-tools)
- [Edit your LLM-facing MCP server description](/en/mcp/prebuilt-mcps#edit-llm-facing-mcp-server-description)

> **TOOLS MUST BE STARTED**
> 
> Your LLM can only access active tools in your MCP server connector.

---
