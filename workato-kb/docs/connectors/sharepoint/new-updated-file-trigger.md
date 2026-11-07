<!-- source: https://docs.workato.com/en/connectors/sharepoint/new-updated-file-trigger | lastmod: 2026-06-29 -->
> The new or updated file trigger in the SharePoint connector picks up new or updated files in a library on each poll interval.

# SharePoint - New or updated file trigger

This trigger picks up new or updated files in your SharePoint library. It checks for new or updated files once every poll interval and Workato processes each file as a separate job.

## Input

| Field | Description |
| --- | --- |
| Trigger poll interval | Specify how frequently to check for new events. Defaults to five minutes if left blank. The minimum value allowed is five minutes. |
| Site name | Provide the name of the SharePoint site to which you plan to connect. If left blank, Workato connects to your default home site, as specified in your connection settings. The site name is located in the URL of the site page. For example, if the URL is `https://company-name.sharepoint.com/sites/product`, the site name is `product`. If you plan to connect to a different site, you can provide the absolute URL to override the base URL. For example, if the input is `https://company-name.sharepoint.com/teams/product`, Workato connects to the provided input. Alternatively, you can provide the absolute URL to connect to a different site. For example, entering `https://company-name.sharepoint.com/teams/product` connects Workato to the specified site directly. |
| Document library | Select the specific document library to monitor for new or updated files. |
| Folder | Select the folder to process files. |
| When first started, this recipe should pick up events from | When you start the recipe for the first time, it picks up trigger events from this specified date and time. Leave empty to get records created or updated one hour ago. Refer to [Triggers](/en/recipes/triggers#since-from) to learn more about this input field. |

## Output

The output datatree contains information about the new or updated file. This includes the file name, server relative URL, and other metadata.

| Field | Description |
| --- | --- |
| Check in comment | The comment provided when checking in the file in SharePoint. |
| Check out type | The type of checkout (for example, online or offline) for the file in SharePoint. |
| Content tag | The tag or label associated with the content of the file in SharePoint. |
| Customized page status | The status of customization for SharePoint pages related to the file. |
| E tag | The entity tag used for versioning and cache validation in SharePoint. |
| Exists | Indicates whether the file exists in SharePoint. |
| Length | The size or length of the file in SharePoint. |
| Level | The security or access level associated with the file in SharePoint. |
| Major version | The major version number of the file in SharePoint. |
| Minor version | The minor version number of the file in SharePoint. |
| Name | The name of the file in SharePoint. |
| Server relative URL | The relative URL of the file within the SharePoint site. |
| Time created | The date and time when the file was created in SharePoint. |
| Time last modified | The date and time when the file was last modified in SharePoint. |
| Title | The title or display name of the file in SharePoint. |
| UI version | The user interface version number associated with the file in SharePoint. |
| UI version label | The label or description associated with the UI version of the file in SharePoint. |
| Unique ID | The unique identifier assigned to the file within SharePoint. |
| Linking URI | The URI used for linking related resources or files within SharePoint. |
| Linking URL | The URL used for linking related resources or files within SharePoint. |
| IRM enabled | Indicates whether Information Rights Management (IRM) is enabled for the file in SharePoint. |
| Metadata | Additional metadata or properties associated with the file in SharePoint. This includes the URI, ID, and Type of metadata. |
| Author | The URI of the author or creator of the file in SharePoint. |
| Checked out by user | The URI of the user who currently has the file checked out for editing in SharePoint. |
| Effective information rights management settings | The URI of the information regarding effective IRM settings for the file in SharePoint. |
| Information rights management settings | The URI of the detailed settings for Information Rights Management (IRM) applied to the file in SharePoint. |
| List item all fields | The URI of all fields associated with the list item where the file is located in SharePoint. |
| Locked by user | The URI of the user who currently has the file locked for editing in SharePoint. |
| Modified by | The URI of the user who last modified the file in SharePoint. |
| Properties | The URI of all properties associated with the file in SharePoint. |
| Version events | The URI of the events related to versioning of the file in SharePoint. |
| Versions | The URI of the different versions of the file available in SharePoint. |

---
