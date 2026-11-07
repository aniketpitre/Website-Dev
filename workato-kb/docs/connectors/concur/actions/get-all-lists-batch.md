<!-- source: https://docs.workato.com/en/connectors/concur/actions/get-all-lists-batch | lastmod: 2026-05-22 -->
> The Get all lists batch action retrieves all lists from SAP Concur.

# SAP Concur - Get all lists action (batch)

The **Get all lists** batch action retrieves all lists from SAP Concur.

## Input

| Input field | Description |
| --- | --- |
| Page number | Enter the page number to retrieve. |
| Sort by | Select the field to sort results by. Options include: name, levelcount, listcategory |

## Output

| Output field | Description |
| --- | --- |
| Links | Navigation links to other pages of results. |
| Rel (Links) | The relationship type of the link. |
| Href (Links) | The URL for the linked page. |
| Content | Collection of list objects retrieved from SAP Concur. |
| ID (Content) | The unique identifier of the list. |
| Value (Content) | The name of the list. |
| Level count (Content) | The number of levels in the list. |
| Search criteria (Content) | The attribute to search by. |
| Display format (Content) | Indicates whether code or value displays first. |
| Category (Content) | Category information for the list. |
| ID (Category) | The unique identifier of the category. |
| Type (Category) | The type of the category. |
| Is read only (Content) | Indicates whether the list is read-only. |
| Is deleted (Content) | Indicates whether the list has been deleted. |
| Managed by (Content) | The application or service managing the list. |
| Page | Pagination metadata for the response. |
| Size (Page) | The number of lists per page. |
| Total elements (Page) | The total count of lists across all pages. |
| Total pages (Page) | The total number of pages available. |
| Number (Page) | The current page number. |

---
