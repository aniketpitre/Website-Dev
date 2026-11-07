<!-- source: https://docs.workato.com/en/mcp/prebuilt-mcps/workday-end-user-mcp-server | lastmod: 2026-09-23 -->
> Use the Workday End User MCP server to connect your LLM to Workday with a curated set of tools to manage employee profiles, time-off balances, and approval workflows.

# Workday End User MCP server

The Workday End User MCP server enables your LLM to access employee self-service workflows within Workday HCM through natural conversation. It provides tools to manage everyday HR tasks by allowing you to check your profile and reporting chain, view your team if you're a manager, check time-off balances, submit or cancel time-off requests, and approve or reject requests without requiring direct interaction with the Workday interface.

## Uses

Use the Workday End User MCP server when you plan to perform the following actions:

- View your employee profile, including job title, manager, and contact details
- Check who your direct manager is
- View your complete reporting chain
- See your direct reports if you're a manager
- Check your time-off balances by type
- View your time-off request history and status
- Submit new time-off requests
- Cancel pending time-off requests
- View time-off requests for your direct reports
- Approve or reject time-off requests for team members
- List available time-off types
- Get details about specific time-off plans

### Example prompts

Use the following example prompts to invoke Workday End User MCP server tools:

- `What's my job title and who is my manager?`
- `Show me my complete reporting chain.`
- `Who are my direct reports?`
- `How much PTO do I have available?`
- `Show me my time-off request history.`
- `Request 3 days of vacation for next week.`
- `Cancel my pending PTO request.`
- `Who on my team has pending time-off requests?`
- `Approve Mei's vacation request.`
- `What types of time off can I request?`

## Workday End User MCP server tools

The Workday End User MCP server provides the following tools:

| Tool | Description |
| --- | --- |
| [get\_my\_profile](#get-my-profile-tool) | Retrieves the employee's core worker profile information. |
| [get\_my\_manager](#get-my-manager-tool) | Retrieves the employee's direct manager information. |
| [get\_my\_reporting\_chain](#get-my-reporting-chain-tool) | Retrieves the employee's upward reporting hierarchy. |
| [list\_my\_direct\_reports](#list-my-direct-reports-tool) | Retrieves a manager's direct reports and their core profile information. |
| [get\_my\_time\_off\_balances](#get-my-time-off-balances-tool) | Retrieves the employee's time-off balances grouped by type. |
| [get\_direct\_report\_time\_off\_requests](#get-direct-report-time-off-requests-tool) | Retrieves time-off requests for a direct report. Your LLM uses this tool to view PTO requests for a direct report. |
| [submit\_time\_off\_request](#submit-time-off-request-tool) | Submits a new time-off request for the employee. |
| [cancel\_time\_off\_request](#cancel-time-off-request-tool) | Cancels a pending time-off request. |
| [action\_time\_off\_request](#action-time-off-request-tool) | Approves or rejects a time-off request for a direct report. |
| [list\_time\_off\_types](#list-time-off-types-tool) | Retrieves the employee's available time-off types. |
| [get\_direct\_report\_time\_off\_balances](#get-direct-report-time-off-balances-tool) | Retrieves a direct report's PTO balances for vacation days, sick days, or leave. |
| [list\_my\_time\_off\_requests](#list-my-time-off-requests-tool) | Lists the user's PTO history and time-off request status. |

## Install the Workday End User MCP server

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
    

## Workday REST connection setup

View Workday REST connection setup steps

The Workato Workday connector is categorized into three distinct types: the main Workday connector, the Workday Web Services connector, and the Workday REST connector. Each type follows a similar authentication pattern but differs slightly in support capabilities and functionalities.

The Workday REST API requires authentication through an OAuth client setup.

> **API CLIENTS FOR INTEGRATION NOT SUPPORTED**
> 
> Register a standard Workday API client to complete this connection. Workday API clients for Integration aren't supported in the Workday End User MCP server.

### Minimum permissions

View minimum permissions

The Workday End User MCP server requires the following minimum permissions:

**API client scopes for functional areas**

Add the following scopes:

- Organizations and Roles
- Staffing
- Tenant non-configurable
- Time Off and Leave

**Business process security policies for Request Time Off type**

Add the following scopes for each group:

**Employee As Self service security group**

- Request Time Off (REST Service)
- Cancel
- ViewAll

**Manager security group**

- Approve
- Deny
- ViewAll

**Business process security policies for Correct Time Off type**

**Employee As Self service security group**

- Correct Time Off Entry (REST Service)
- Cancel
- ViewAll

**Manager security group**

- Approve
- Deny
- ViewAll

### Register a new API client in Workday

View API client setup steps

The Workday End User MCP server authenticates each user individually through their own Workday login. The server doesn't use an Integration System User (ISU) like the Workday connector.

#### Register a new API client

Complete the following steps to register an API client in Workday REST:

1. Sign in to your Workday REST account.
   
2. Enter `Register API Client` to locate the **Register API Client** task.
   
3. Enter a name for your API client in the **Client Name** field.
   
4. Go to the **Client Grant Type** section and select **Authorization Code Grant**.
   
5. Go to the **Access Token Type** section and select **Bearer**.
   
6. Enter `https:www.workato.com/oauth/callback` in the **Redirection URI** field.
   
7. Enter `30` in the **Refresh Token Timeout (in days)** field.
   
8. Enter the scopes for the connection in the **Scope (Functional Areas)** field. Refer to [Workday End User MCP server Minimum permissions](/en/mcp/prebuilt-mcps/workday-end-user-mcp-server#minimum-permissions) if you're connecting to the Workday End User MCP server.
   
   ![Enter the scopes for the connection in the Scope (Functional Areas) field](/assets/api-client-rest.CIUw1iB9.png)_Enter the scopes for the connection in the **Scope (Functional Areas)** field_
   
9. Enter your client ID in the **Client ID** field.
   
10. Enter your REST API endpoint in the **Workday REST API Endpoint** field. You can find this endpoint in your API client details page in Workday. For example: `https://wd2-impl-services1.workday.com/xxx/api/v1/example`
    
11. Enter your token endpoint in the **Token Endpoint** field. You can find this endpoint in your API client details page in Workday. For example: `https://wd2-impl-services1.workday.com/xxx/oauth2/example/token`
    
12. Enter your authorization endpoint in the **Authorization Endpoint** field. You can find this endpoint in your API client details page in Workday. For example: `https://impl.workday.com/example/authorize`
    
13. Click **Done**.
    

#### Find your token endpoint URL

Complete the following steps to find your token endpoint URL in Workday:

1. Enter **View API Clients** into the search field in Workday.
   
2. Access the **View API Clients** report from the search results.
   
3. Save the URLs listed in the **Token Endpoint** and **Authorization Endpoint** fields. These URLs are required for the OAuth 2.0 connection.
   
   ![Save the token endpoint and authorization endpoint URLs](/assets/save-url.BkmumQyc.png)_Save the token endpoint and authorization endpoint URLs_
   

### Complete setup in Workato

Complete the following steps to configure your Workday connection in Workato using OAuth 2.0 authentication:

View OAuth 2.0 authentication steps

1. Enter a unique **Connection name** to identify your Workday account in Workato.
   
   ![Set up your connection](/assets/workday-rest-connection.IzDCKMEG.png)_Set up your connection_
   
2. Use the **Location** drop-down to select the project or folder to store this connection.
   
3. Use the **Connection type** drop-down menu to select **Cloud**.
   
4. Enter your REST API endpoint in the **REST API endpoint** field. You can find this endpoint in your API client details page in Workday. For example: `https://wd2-impl-services1.workday.com/xxx/api/v1/example`
   
5. Enter your authorization endpoint in the **Authorization endpoint** field. You can find this value in your Workday API client details. For example: `https://impl.workday.com/example/authorize`
   
6. Enter your token endpoint in the **Token endpoint** field. You can find this endpoint in your API client details page in Workday. For example: `https://wd2-impl-services1.workday.com/xxx/oauth2/example/token`
   
7. Enter your client ID in the **Client ID** field.
   
8. Enter your client secret in the **Client Secret** field.
   
9. Enter your refresh token in the **Refresh token** field.
   
   > **DON'T PROVIDE A REFRESH TOKEN FOR MCP SERVERS**
   > 
   > Don't provide a refresh token if you're connecting Workday to an MCP server.
   
10. Click **Connect**.
    

## How to use Workday End User MCP server tools

Refer to the following sections for detailed information on available tools:

### get\_my\_profile tool

The **get\_my\_profile** tool retrieves your worker profile information, including job title, manager, location, contact details, employment status, and hire date. Your LLM uses this tool to retrieve information about your employee profile.

**Try asking**:

- `What's my job title?`
- `Show me my employee profile.`
- `Who is my manager?`
- `What's my work location?`
- `When did I start working here?`

### get\_my\_manager tool

The **get\_my\_manager** tool retrieves your direct manager information. Your LLM uses this tool to retrieve your manager's information.

**Try asking**:

- `Who is my manager?`
- `Show me my direct manager's information.`
- `Who do I report to?`
- `Get my manager's contact details.`

### get\_my\_reporting\_chain tool

The **get\_my\_reporting\_chain** tool retrieves your upward reporting hierarchy. Your LLM uses this tool to retrieve your management hierarchy or to see who your manager reports to.

**Try asking**:

- `Show me my complete reporting chain.`
- `Who does my manager report to?`
- `What's my management hierarchy?`
- `Show me the chain of command up to the CEO.`

### list\_my\_direct\_reports tool

The **list\_my\_direct\_reports** tool retrieves your direct reports and their profile information. Your LLM uses this tool to see who reports to you or view your team.

**Try asking**:

- `Who are my direct reports?`
- `Show me my team.`
- `List everyone who reports to me.`
- `Get the profiles of my direct reports.`

### get\_my\_time\_off\_balances tool

The **get\_my\_time\_off\_balances** tool retrieves your time-off balances grouped by type. Your LLM uses this tool to check your PTO, vacation, or sick leave balances.

**Try asking**:

- `How much PTO do I have available?`
- `Show me my vacation balance.`
- `What's my sick leave balance?`
- `How many days off do I have remaining?`

### get\_direct\_report\_time\_off\_requests tool

The **get\_direct\_report\_time\_off\_requests** tool retrieves time-off requests for a direct report. Your LLM uses this tool to view PTO requests.

**Try asking**:

- `Show me time-off request history for Marco.`
- `List PTO requests pending approval for Sarah.`
- `List all the vacation requests from this year for Josh.`

### submit\_time\_off\_request tool

The **submit\_time\_off\_request** tool submits a new time-off request. Your LLM uses this tool to request time off.

**Try asking**:

- `Request 3 days of vacation for next week.`
- `Submit a PTO request for December 20-22.`
- `Request sick leave for tomorrow.`
- `I need to take vacation from March 1-5.`

### cancel\_time\_off\_request tool

The **cancel\_time\_off\_request** tool cancels a pending time-off request. Your LLM uses this tool to cancel a pending request.

**Try asking**:

- `Cancel my pending PTO request.`
- `Cancel my vacation request for next week.`
- `Remove my time-off request for March 1-5.`
- `I need to cancel my pending sick leave request.`

### get\_direct\_report\_time\_off\_balances tool

The **get\_direct\_report\_time\_off\_balances** tool retrieves the time-off balances for a direct report. Your LLM uses this tool view a direct report's vacation days, sick days, and leave balances.

**Try asking**:

- `Show me how many sick days Josh has available?`
- `How many vacation days does Sarah have?`
- `How many vacation days has Marco taken this year?`

### action\_time\_off\_request tool

The **action\_time\_off\_request** tool approves or rejects a time-off request for a direct report. Your LLM uses this tool to approve or reject a team member's request.

**Try asking**:

- `Approve Josh's vacation request.`
- `Reject the PTO request from Marco with a note about coverage.`
- `Approve the time-off request for March 1-5.`
- `I need to deny this sick leave request.`

### list\_time\_off\_types tool

The **list\_time\_off\_types** tool retrieves your available time-off types. Your LLM uses this tool when you need to know what types of time off are available.

**Try asking**:

- `What types of time off can I request?`
- `Show me all available PTO types.`
- `What are my time-off options?`
- `List the different types of leave I can take.`

### list\_my\_time\_off\_requests tool

The **list\_my\_time\_off\_requests** tools retrieves your PTO history or time-off request status. Your LLM uses this tool retrieve PTO balances and availability, and the status of submitted time-off requests.

**Try asking**:

- `How many vacation days have I taken this year?`
- `What's the status of time-off request submitted last week?`
- `What's my sick day balance?`
- `Do I have vacation days available?`

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
