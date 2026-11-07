<!-- source: https://docs.workato.com/en/connectors/azure_blob_storage/new-event-trigger | lastmod: 2026-06-17 -->
> The New event trigger activates when specified blob storage events occur in monitored containers.

# Azure Blob Storage - New event trigger (real-time)

The **New event** trigger activates when a specified event occurs in a container you select. The **Management** scope is required to set up this trigger.

Ensure that the Azure user authenticated for this connection has the **EventGrid EventSubscription Contributor** role in the resource group provided.

> **MFA REQUIRED**
> 
> Starting October 1, 2025, Microsoft will enforce multi-factor-authentication (MFA) for [Azure Resource Manager API](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/control-plane-and-data-plane#control-plane) operations used by this trigger. Ensure MFA is enabled for your Azure organization and re-authenticate your connection, or migrate to [Client Credentials Grant connections](/en/connectors/azure_blob_storage#create-a-client-credentials-grant) to maintain uninterrupted service.

## Input

| Input field | Description |
| --- | --- |
| Subscription | Select a subscription under which the webhook should be registered. |
| Resource group name | Select a resource group under which the webhook should be registered. |
| Container name | Select a container to monitor for events. If your container can't be found, toggle to **Enter container name** and provide the container name. |
| Events to monitor | Select the events to monitor. Refer to the [Microsoft documentation](https://learn.microsoft.com/en-us/azure/event-grid/event-schema-blob-storage?tabs=event-grid-event-schema#blob-storage-events) to learn more about the supported Blob event types. |

## Output

| Output field | Description |
| --- | --- |
| Container name | The container where the event occurred. |
| Blob name | The name of the blob that triggered the event. |
| Topic | Full resource path to the event source. |
| Subject | Publisher-defined path to the event subject. |
| Event type | The type of event that occurred. |
| ID | Unique identifier for the event. |
| Data | Event data specific to the blob storage resource provider. |
| Data version | The schema version of the data object. |
| Metadata version | The schema version of the event metadata. |
| Event time | The time the event occurred, expressed in UTC. |

---
