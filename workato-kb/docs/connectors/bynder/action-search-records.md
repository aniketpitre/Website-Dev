<!-- source: https://docs.workato.com/en/connectors/bynder/action-search-records | lastmod: 2026-06-29 -->
> The Search records action in the Bynder connector searches for assets, collections, tags, metaproperties, and metaproperty options using standard fields.

# Bynder - Search records action

This action searches for assets, collections, tags, metaproperties and metaproperty option in Bynder.

  

## Input

| Field | Description |
| --- | --- |
| Object | Select the object you want this action to search for. |
| Object-specific search fields | After selecting the object you want to search, you'll be shown search fields relating to the object. You can search using any standard fields. |

After selecting the object you want to search, you'll be prompted for search criteria to search by. You can search by any standard fields.

  

## Output

Object specific output fields will be dynamically rendered based on the objects you select.

  

### Asset Output fields

| Field name | Description |
| --- | --- |
| Asset ID | ID of the asset. |
| Name | Name of the asset |
| Description | Description of asset. |
| IdHash | Hashed Id of the asset |
| Brand Id | Id of the brand |
| Archive | Indicates whether or not the response should only contain archived assets. When 0, no filtering happens. |
| Copyright | Label for the copyright. |
| Type | Type of this asset. Possible values are `image` , `document` , `audio` , `video` , `3d`. |
| Date Published | Date/time the asset is published |
| Date Created | Date/time the asset is created |
| User Created | User who created the asset |
| Date Modified | Date/time the asset is modified |
| isPublic | Indicates whether or not the response should only contain assets marked as public |
| Extension | File extension type |
| Tags | List of tags associated with the asset |
| Height | Height of an image asset |
| Width | Width of an image asset |
| File Size | Size of file |
| Orientation | Possible values include `square` , `portrait` , `landscape` . |
| Watermarked | Indicates whether or not the asset is watermarked. When 0, the asset is not watermarked. |
| Limited | Indicates whether or not the asset is hidden for users who do not have the permission to access. When 0, the asset is not labeled Limited Use. |
| Thumbnails | Preview of the asset |
| Media items | List of different media items (derivatives) available for each asset. |
| Active Original Focus Point | Coordinates of the focus point. View how to [set focus point](https://support.bynder.com/hc/en-us/articles/360013931299-Set-the-focus-point) in Bynder. |

  

### Collection Output fields

| Field name | Description |
| --- | --- |
| User Id | Id of the user logged in |
| User | Id and name of the user logged in |
| Date created | Date/time the collection is created |
| Date modified | Date/time the collection is modified |
| Thumbnail | URL of thumbnails |
| Id | Id of the collection |
| Name | Name of the collection |
| Description | Label for the copyright. |
| isPublic | Indicates whether or not the return should only contain collections marked as public. When left unspecified, no filtering happens. |

  

### Tags Output fields

| Field name | Description |
| --- | --- |
| Media Count | Count of media the tag is associated with |
| Tag | Name of the tag |
| Id | Id of the tag |

---
