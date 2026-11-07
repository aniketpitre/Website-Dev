<!-- source: https://docs.workato.com/en/mcp/developer-api-mcp | lastmod: 2026-10-14 -->
> Expose Workato Developer and Embedded APIs as a remote MCP server so AI tools like Claude Desktop and Cursor can manage assets and projects.

# Developer and Embedded API MCP server

The [Developer API](/en/workato-api) and [Embedded API](/en/oem/oem-api) MCP server enables AI-powered developer environments like Claude Desktop and Cursor to programmatically access your Workato workspace. You can manage assets and projects programmatically with Workato Developer and Embedded APIs exposed as a remote MCP server with following authentication:

- **Developer API**: Use standard [Developer API token authentication](/en/workato-api#authentication).
- **Embedded API**: Use an API token created in an Embedded admin workspace.

You can inspect and modify assets, perform bulk operations, and call Developer or Embedded API endpoints directly from your development tools. MCP tools built with API endpoints also allow you to [pass authorization headers in API calls](#pass-authorization-headers-in-api-calls).

> **FEATURE AVAILABILITY**
> 
> MCP is available to all users in the US, EU, AU, JP, SG, IL, KR, and UK data centers. MCP servers are hosted in the US, EU, and APAC regions and respect data residency requirements where possible. MCP isn't available to workspaces in the CN data center. This reflects local regulatory requirements and Workato's commitment to data sovereignty and applies to our multi-tenant and [Virtual Private Workato (VPW)](/en/cloud-hosting-editions/hosting-editions#virtual-private-workato) offerings.
> 
> Contact your Customer Success representative if you're interested in using MCP or require additional information.

Your MCP server respects all Developer API and Embedded API permissions and project scopes configured in your [API client role](/en/workato-api/api-clients#create-a-client-role). This means you can restrict access to specific projects or endpoints by configuring your API client settings in **Workspace admin > API clients**.

> **MCP URL AND API TOKEN INTEGRATION**
> 
> You can manage Developer APIs and Embedded APIs with both remote and [local MCP servers](/en/mcp/mcp-local-servers) with the following configuration:
> 
> ```json
> "YOUR-API-REMOTE-NAME": {
>       "url": "https://app.workato.com/mcp",
>       "headers": {
>         "Authorization": "Bearer <YOUR_API_TOKEN>"
>       }
>     }
> ```

## Configure Developer APIs and Embedded APIs as an MCP server

Complete the following steps to use your Developer API or Embedded API endpoints as an MCP server with your LLM:

1. Sign in to Workato.
   
2. Go to **Workspace admin > API clients** to view your API client role that defines which tools you have access to or [Create a client role](/en/workato-api/api-clients#create-a-client-role) with the tools you plan to use. For example, enable **List folders**, **Create project or folder**, and **Update folder** if these are tools you plan to use in your LLM.
   
   > **EMBEDDED API CLIENT AND TOKEN REQUIREMENT**
   > 
   > You must use a token created in an Embedded admin workspace to manage Embedded APIs through the MCP server.
   
   ![LLM tool availability is defined in the client role](/assets/tool-availability.CGcjrVEv.png)_LLM tool availability is defined in the client role_
   
3. Obtain your API client token or [Create an API client](/en/workato-api/api-clients#create-an-api-client) and copy and store the generated API token.
   
4. Configure your LLM to use the endpoints defined in your API client role:
   
   **Claude Desktop**
   
   ### Claude Desktop remote configuration
   
   1. Open Claude Desktop.
      
   2. Go to **Settings > Developer**.
      
   3. Click **Edit Config** to open the `claude_desktop_config.json` file.
      
   4. Add the following configuration to convert your API client role endpoints into an MCP server, replacing `YOUR-API-REMOTE-NAME` and `YOUR_API_TOKEN` with your values:
      
      ```json
      {
        "mcpServers": {
          "YOUR-API-REMOTE-NAME": {
            "command": "npx",
            "args": [
              "mcp-remote",
              "https://app.workato.com/mcp",
              "--header",
              "Authorization: Bearer <YOUR_API_TOKEN>"
            ]
          }
        }
      }
      ```
      
   5. Save your changes.
      
   6. Restart Claude Desktop and start a new chat to use the tools you added.
      
   
   **Cursor**
   
   ### Cursor remote configuration
   
   1. Sign in to Cursor.
      
   2. Go to **Settings > Cursor settings**.
      
   3. Click **MCP & Integrations** in the sidebar.
      
   4. Click **\+ New MCP Server** to open the `mcp.json` file.
      
      ![New MCP server](/assets/configure-cursor.DhhCFK4N.png)_Click **\+ New MCP Server**_
      
   5. Add the following configuration to convert your API client role endpoints into an MCP server, replacing `YOUR-API-REMOTE-NAME` and `YOUR_API_TOKEN` with your values:
      
      ```json
      {
        "mcpServers": {
          "YOUR-API-REMOTE-NAME": {
            "url": "https://app.workato.com/mcp",
            "headers": {
              "Authorization": "Bearer <YOUR_API_TOKEN>"
            }
          }
        }
      }
      ```
      
   6. Save your changes.
      
   7. Create a new chat with your Cursor agent to use the tools you added.
      
      You must start a new chat with your agent. Cursor agents only have access to the tools and capabilities available when a chat begins. Agents can't detect or use new MCP configurations, servers, or tools added after starting a chat.
      
   
   **Local configuration**
   
   ### Local configuration
   
   1. Replace `YOUR_API_TOKEN` and `YOUR-API-LOCAL-NAME` with your specific values.
      
      Example configuration:
      
      ```json
      "YOUR-API-LOCAL-NAME": {
            "url": "https://app.workato.com/mcp",
            "headers": {
              "Authorization": "Bearer <YOUR_API_TOKEN>"
            }
          }
      ```
      
   

## Manage Developer APIs and Embedded APIs through your MCP

You can manage the Developer API and Embedded API endpoints enabled in your API client role after you configure your MCP JSON file.

Complete the following steps to manage your Developer API or Embedded API project and assets through your LLM:

1. Start a new chat with your LLM and enter a prompt.
   
   **Example prompt for project and asset management**
   
   1. Enter the following prompt:
      
      ```plaintext
      
      Propose a maximum of 3 tags based on my workspace activity.
      ```
      
      ![Create tags from your LLM](/assets/create-tags.TlZWlKQ1.gif)_Create tags from your LLM_
      
   2. Review the suggestions and ask your LLM to create the proposed tags.
      
   3. Go to **Workspace admin > Settings > Tags** and click **Manage tags** to view the tags created by your LLM.
      
      ![Tags created by your LLM](/assets/tags-created.Bc2zVTXz.png)_Tags created by your LLM_
      
2. Use more natural language prompts to manage your projects and assets, for example:
   
   - `Move folder 12345 to parent folder 67890.`
   - `List all folders in my Acme test project.`
   - `Start analyzing recipe health for recipe 68000123.`
   - `List all connections and group by active and inactive status.`
   - `List jobs from recipe 68000123.`

## Pass authorization headers in API calls

You can call APIs with authorization headers within Workato recipe actions. You must use the header X-Wkt-Ext-Authorization datapill in your Workato recipe for APIM-collection-based MCP servers.

Complete the following steps to pass authorization headers in your API calls:

1. Go to a project and click **Create > Recipe** or press C+R.
   
   ![Create a new recipe](/assets/create-recipe-standard.CiyoivKN.png)_Create a new recipe_
   
2. Enter a name for your recipe in the **Name** field.
   
3. Use the **Location** drop-down menu to select the project where you plan to store the recipe.
   
4. Click **Start building**.
   
   ![Start building your recipe](/assets/start-building.CdeBSfVN.png)_Start building your recipe_
   
5. Click **Pick a starting point** and select **Trigger from an app**.
   
6. Click **Select an app and trigger event**.
   
7. Search for and select `API platform by Workato`.
   
8. Select the **New API request** trigger. The **New API request** trigger in this use case doesn't require you to establish a connection.
   
   ![New API request trigger](/assets/new-api-request.pwrb55D9.png)_**New API request** trigger_
   
9. Complete the following steps to configure your request schema:
   
   1. Go to the **Request headers** section and click **Add header**.
      
   2. Enter the following name in the **Name** field:
      
      ```bash
      X-Wkt-Ext-Authorization
      ```
      
   3. Optional. Provide a descriptive label for your header in the **Label** field.
      
   4. Click **Add field**. Your header value is now accessible as a datapill under the **New API request** step output.
      
   5. Map the X-Wkt-Ext-Authorization (Step 1) datapill to the field where you plan to pass the header authorization.
      
      ![Map your header authorization datapill](/assets/api-authorization-header-datapill.DpeffkR3.png)_Map the X-Wkt-Ext-Authorization (Step 1) datapill_
      
   6. Save your changes.
      
10. Go to **AI Hub > Enterprise MCP > Custom servers** and select the MCP server that uses the recipe you created in the preceding steps.
    
11. Go to **Settings > End user access** and verify that **Access Method** is set to **Token-based access**.
    
12. Copy the **Developer MCP Token** URL that includes the `wkt_token`.
    
    ![Copy the Developer MCP Token URL](/assets/copy-developer-mcp-token.Chp0BlZi.png)_Copy the **Developer MCP Token** URL_
    
13. Return to the **Request schema** section and click **\+ Add Field**.
    
14. Enter `description` in the **Name** and **Label** fields.
    
15. Use the **Data type** drop-down menu to select **String**.
    
16. Use the **Optional** drop-down menu to select **No**.
    
17. Use the **Nest under** drop-down menu to select **payload**.
    
18. Click **Save**.
    
19. Return to the **Request schema** section and click **\+ Add Field**.
    
20. Enter `title` in the **Name** and **Label** fields.
    
21. Use the **Data type** drop-down menu to select **String**.
    
22. Use the **Optional** drop-down menu to select **No**.
    
23. Use the **Nest under** drop-down menu to select **payload**.
    
24. Click **Save**.
    
    ![Request schema](/assets/request-schema.o6PU_jv0.png)_Request schema_
    

## Limitations

Workato Developer API and Embedded API MCP servers have the following limitations:

### Unsupported endpoints

The following Developer API and Embedded API endpoints aren't supported:

**Developer API**

- [Event streams](/en/workato-api/event-streams)
- [Lookup tables](/en/workato-api/lookup-tables)

**Embedded API**

- [Lookup tables](/en/oem/oem-api/lookup-tables)

---
