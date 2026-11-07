<!-- source: https://docs.workato.com/en/connectors/mongodb-atlas/setup | lastmod: 2026-09-04 -->
> Set up and connect MongoDB Atlas in Workato, including the cluster URI, database name, and a database user with read and write permissions.

# Connecting MongoDB Atlas

In this guide, we'll show you how to connect your MongoDB Atlas database to your Workato workspace.

* * *

## Setup Requirements

To connect MongoDB Atlas, you'll need:

- [A MongoDB Atlas account](https://docs.atlas.mongodb.com/tutorial/create-atlas-account/) with a deployed active cluster.
  
- [A database user](https://docs.atlas.mongodb.com/connect-to-database-deployment/#database-user) with **read and write** privileges on the database you're connecting.
  
- Privileges that allow you to manage IP Access List entries in MongoDB Atlas. This is typically associated with the [Project Owner role](https://docs.atlas.mongodb.com/reference/user-roles/#mongodb-authrole-Project-Owner).
  

* * *

## Step 1: Add Workato's IP Addresses to allowlist

To ensure Workato can successfully connect to your MongoDB Atlas instance, you'll need to add our [IP addresses](/en/security/ip-allowlists) to the database's IP Access List.

Follow [these steps](https://docs.atlas.mongodb.com/security/ip-access-list/#add-ip-access-list-entries) until all of Workato's IP addresses have been added.

* * *

> **TIP**
> 
> To complete this step, you need privileges in MongoDB Atlas that allow you to manage IP Access List entries.

## Step 2: Retrieve Your MongoDB Atlas Cluster URI

Next, you'll retrieve the cluster URI for your MongoDB Atlas instance. You'll use this in the last step to complete the connection in Workato.

1. Log in to your MongoDB Atlas account.
   
2. In the cluster you want to connect, click the **Connect** button.
   
3. Click **Connect with the Mongo Shell.**
   
4. In the **Run your connection string in your command line** step, locate the cluster URI. This is highlighted in the image below:
   
   ![The cluster URI highlighted in the Mongo connection string](/assets/cluster_uri-copy_uri_from_connection_string.BbKYCkhl.png)
   
5. Copy the cluster URI. Keep this handy - you'll need it for the next step.
   

* * *

## Step 3: Complete The Setup In Workato

In Workato, fill in these fields. When finished, click **Connect** to complete the connection.

| Field | Required | Description |
| --- | --- | --- |
| **Connection name** | Required | The name of the connection. We recommend choosing a name that identifies which MongoDB Atlas cluster the connection uses. |
| **Cluster URI** | Required | Paste the cluster URI you retrieved in [Step 2.](#step-2-retrieve-your-mongodb-atlas-cluster-uri) This will be similar to `cluster0.6rk8t.mongodb.net`. |
| **Database name** | Required | The name of the database Worko will connect to in the Mongo cluster. |
| **Username** | Required | The name of the database user Workato will use to connect to the Mongo cluster. This user must have **read and write** permissions. |
| **Password** | Required | The password of the database user. |
| **Retry writes** | Optional | Automatically retry write operations if certain issues are encountered. Check out the [MongoDB docs](https://docs.mongodb.com/manual/core/retryable-writes/#behavior) to learn more. |
| **Retry reads** | Optional | Automatically retry read operations if network or server errors are encountered. Check out the [MongoDB docs](https://docs.mongodb.com/manual/core/retryable-reads/#behavior) to learn more. |
| **App name** | Optional | An optional custom app name. Check out the [MongoDB docs](https://docs.mongodb.com/manual/reference/connection-string/#mongodb-urioption-urioption.appName) to learn more. |
| **Replica set** | Optional | If connecting to a [replica set](https://docs.mongodb.com/manual/replication/#replication), enter the name of the replica set. |
| **Auth source** | Optional | The name of the database in the Mongo cluster Workato will use to authenticate the **database user**. The default is `admin`. |
| **Read concern** | Optional | Allows you to control the consistency and isolation properties of the data read from replica sets and replica set shards. Defaults to `majority`. Check out the [MongoDB docs](https://docs.mongodb.com/manual/reference/connection-string/#readconcern-options) to learn more. |

---
