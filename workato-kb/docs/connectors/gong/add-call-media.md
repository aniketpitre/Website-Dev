<!-- source: https://docs.workato.com/en/connectors/gong/add-call-media | lastmod: 2026-06-29 -->
> The Add call media action in the Gong connector uploads a media file of up to 60 MB to a call you previously added with the Add call action.

# Gong - Add call media action

This action will add call media in Gong. To upload call media, you will first need to add the call and its details via the **Add call** action.  
  
If uploading a dual-channel (stereo) file separated by speaker, make sure to specify which channel corresponds to the company team member (rep) in the parties input fields of the **Add call** action.  
  
This endpoint supports files up to a maximum of 60 MB. To upload files up to 1.5 GB, provide the media download URL directly in the **Add call** action. The media download URL can be created from videos stored in any of our cloud storage systems like S3.

## Input

| Field | Description |
| --- | --- |
| Call ID | The call ID returned from the Add call action. |
| Media file | Contents of the file. |

## Output

| Field | Description |
| --- | --- |
| Call ID | Unique ID of the call added to Gong |
| Request ID | UUID that is created to ensure the call is created only once. |
| URL | URL of the call |

---
