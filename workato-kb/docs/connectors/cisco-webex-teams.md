<!-- source: https://docs.workato.com/en/connectors/cisco-webex-teams | lastmod: 2026-06-29 -->
> The Cisco Webex Teams connector lets you automate messaging workflows: post messages, create and manage rooms, add people, and trigger on new messages.

# Cisco Webex Teams

[Cisco Webex Teams](https://www.webex.com/) is a collaboration platform that provides messaging, video meetings, and file sharing capabilities.

## API version

The Cisco Webex Teams connector uses [Cisco Webex Teams API v1](https://developer.webex.com/docs/api/getting-started).

## How to connect to Cisco Webex Teams

Workato supports the following authentication methods for connecting to Cisco Webex Teams:

- [OAuth 2.0](#oauth-2-0)
- [Bot access token](#bot-access-token)

### OAuth 2.0

Complete the following steps to connect to Cisco Webex Teams using OAuth 2.0 authentication:

1. Sign in to your Workato account.
   
2. Click **Create > Connection** or press C+C.
   
3. Search for and select `Cisco Webex Teams` in the **New connection** page.
   
4. Enter a name for the connection in the **Connection name** field.
   
   ![Connect to Cisco Webex Teams](/assets/oauth.BnIRe4PW.png)_Connect to Cisco Webex Teams_
   
5. Use the **Location** drop-down menu to select the project where you plan to store this connection.
   
6. Use the **Authentication type** drop-down menu to select **OAuth 2.0**.
   
7. Optional. Use the **Custom OAuth profile** drop-down menu to select a custom OAuth profile for your connection.
   
8. Click **Connect**.
   
9. Enter the email address associated with your Cisco Webex Teams account and click **Sign in**.
   
10. Click **Accept**. Workato requests the following permissions:
    
    - List the people in rooms that you're in
    - Read your company directory
    - List the titles of spaces that you are in
    - Post and delete messages on your behalf
    - Invite people to rooms on your behalf
    - Manage spaces on your behalf
    - Read the content of rooms that you're in

### Bot access token

You can use bot access token authentication to connect Workato to Cisco Webex Teams. This method requires two main steps:

1. [Create a bot in the Webex Developer Portal](#create-the-bot)
2. [Complete the connection setup in Workato](#complete-setup-in-workato)

#### Create a bot in the Webex Developer Portal

Complete the following steps to create a bot in the Webex Developer Portal:

1. Sign in to the [Webex Developer Portal](https://developer.webex.com/) and click **Start Building Apps**.
   
2. Click **Create a Bot** to open the [New Bot](https://developer.webex.com/my-apps/new/bot) page.
   
   ![New bot page](/assets/new-bot.dgKVoxbE.png)_New bot page_
   
3. Enter a name for your bot in the **Bot name** field. This is the bot name that appears in Webex and the Webex App Hub.
   
4. Enter a username for your bot in the **Bot username** field. Users use this username to add your bot to a space. This value cannot be changed later.
   
5. Upload a 512x512px JPEG or PNG file in the **Icon** field, or select a default option from Webex.
   
6. Provide an app description in 1024 characters or less in the **App Hub Description** field.
   
7. Click **Add Bot** to create your bot.
   
8. Click **Copy Token** to retrieve your bot access token. Store this value securely, as it is required to create your connection in Workato.
   
   ![Copy the bot access token](/assets/copy-token.mX1Zu-Cn.png)_Copy the bot access token_
   

#### Complete the connection setup in Workato

Complete the following steps to configure the Cisco Webex Teams connection in Workato:

1. Sign in to your Workato account.
   
2. Click **Create > Connection** or press C+C.
   
3. Search for and select `Cisco Webex Teams` in the **New connection** page.
   
4. Enter a name for the connection in the **Connection name** field.
   
   ![Connect to Cisco Webex Teams](/assets/bot-access-token.C1ceuNFW.png)_Connect to Cisco Webex Teams_
   
5. Use the **Location** drop-down menu to select the project where you plan to store this connection.
   
6. Use the **Authentication type** drop-down menu to select **Bot access token**.
   
7. Enter the bot access token in the **Bot access token** field. For detailed steps on how to obtain this value, see [Create a bot in the Webex Developer Portal](#create-the-bot).
   
8. Click **Connect**.
   

Refer to the Webex documentation for more information on [Bots](https://developer.webex.com/docs/bots).

---
