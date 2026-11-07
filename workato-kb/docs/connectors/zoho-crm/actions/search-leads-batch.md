<!-- source: https://docs.workato.com/en/connectors/zoho-crm/actions/search-leads-batch | lastmod: 2026-05-22 -->
> The Search leads batch action returns records that match the given search criteria.

# Zoho CRM - Search leads action (batch)

The **Search leads** batch action returns records that match the given search criteria.

- Search input must be at least 2 characters. Partial matching is used for all fields.
- Search supports up to 5 fields maximum.
- At least one search field is required.

## Input

| Input field | Description |
| --- | --- |
| First name | Enter the first name to search. |
| Last name | Enter the last name to search. |
| Company | Enter the company name to search. |
| Lead status | Enter the lead status to search. |
| Email | Enter the email address to search. |
| Industry | Enter the industry to search. |

## Output

| Output field | Description |
| --- | --- |
| Leads | The list of leads matching the search criteria. |
| Lead owner (Leads) | The user to whom the lead is assigned. |
| Last activity time (Leads) | The timestamp of the last activity on the lead. |
| Lead ID (Leads) | The unique identifier of the lead. |
| Salutation (Leads) | The salutation of the lead. |
| First name (Leads) | The first name of the lead. |
| Title (Leads) | The job position of the lead. |
| Last name (Leads) | The last name of the lead. |
| Company (Leads) | The name of the company where the lead is working. |
| Lead source (Leads) | The source from which the lead is generated. |
| Industry (Leads) | The industry to which the lead belongs. |
| Annual revenue (Leads) | The annual revenue of the company. |
| Phone (Leads) | The phone number of the lead. |
| Mobile (Leads) | The mobile number of the lead. |
| Fax (Leads) | The fax number of the lead. |
| Email (Leads) | The email address of the lead. |
| Secondary email (Leads) | The secondary email address of the lead. |
| Skype ID (Leads) | The Skype ID of the lead. |
| Twitter (Leads) | The Twitter handle of the lead. |
| Website (Leads) | The website of the lead. |
| Lead status (Leads) | The status of the lead. |
| Rating (Leads) | The rating of the lead. |
| Number of employees (Leads) | The number of employees in the lead's company. |
| Email opt out (Leads) | Indicates if the lead has opted out of emails. |
| Street (Leads) | The street address of the lead. |
| City (Leads) | The city where the lead lives. |
| State (Leads) | The state where the lead lives. |
| Zip code (Leads) | The postal code of the lead's address. |
| Country (Leads) | The country of the lead. |
| Description (Leads) | Additional details about the lead. |
| Lead full name (Leads) | The full name of the lead. |
| Lead ID (Deprecated) (Leads) | The deprecated identifier of the lead. |
| SM owner ID (Leads) | The ID of the user who owns the lead. |
| SM creator ID (Leads) | The ID of the user who created the lead. |
| Created by (Leads) | The user who created the lead. |
| Modified by (ID) (Leads) | The ID of the user who last modified the lead. |
| Modified by (Leads) | The user who last modified the lead. |
| Created time (Leads) | The timestamp when the lead was created. |
| Modified time (Leads) | The timestamp when the lead was modified. |
| Converted (Leads) | Indicates if the lead has been converted. |
| Record image (Leads) | The image associated with the lead record. |
| Currency symbol (Leads) | The currency symbol for monetary values. |
| Process flow (Leads) | The process flow associated with the lead. |
| Approved (Leads) | Indicates if the lead has been approved. |
| Editable (Leads) | Indicates if the lead record is editable. |
| Approval (Leads) | The approval details for the lead. |
| Delegate (Approval) | Indicates if approval can be delegated. |
| Approve (Approval) | Indicates if the lead can be approved. |
| Reject (Approval) | Indicates if the lead can be rejected. |
| Resubmit (Approval) | Indicates if the lead can be resubmitted. |
| Converted detail (Leads) | Details about the lead conversion. |
| Deal (Converted detail) | The deal created from the converted lead. |
| Convert date (Converted detail) | The date when the lead was converted. |
| Contact (Converted detail) | The contact created from the converted lead. |
| Account (Converted detail) | The account created from the converted lead. |
| Converted by (Converted detail) | The user who converted the lead. |

---
