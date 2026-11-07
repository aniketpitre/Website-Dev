<!-- source: https://docs.workato.com/en/connectors/concur/actions/get-user | lastmod: 2026-05-22 -->
> The Get user action retrieves information about a specific user in SAP Concur.

# SAP Concur - Get user action

The **Get user** action retrieves information about a specific user in SAP Concur.

## Input

| Input field | Description |
| --- | --- |
| User ID | Enter the unique identifier of the SAP Concur user. |

## Output

| Output field | Description |
| --- | --- |
| Locale overrides | Custom locale settings that override default preferences. |
| Preference end day view hour (Locale overrides) | The ending hour for day view. |
| Preference first day of week (Locale overrides) | The first day of the week preference. |
| Preference date format (Locale overrides) | The date display pattern preference. |
| Preference currency symbol location (Locale overrides) | The currency symbol position preference. |
| Preference hour minute separator (Locale overrides) | The separator used between hours and minutes. |
| Preference distance (Locale overrides) | The preferred unit of distance measurement. |
| Preference default cal view (Locale overrides) | The default calendar view preference. |
| Preference 24 hour (Locale overrides) | The time display format preference. |
| Display name format (Locale overrides) | The format used for displaying names. |
| Preference number format (Locale overrides) | The numeric display standard preference. |
| Preference start day view hour (Locale overrides) | The starting hour for day view. |
| Preference negative currency format (Locale overrides) | The format for displaying negative currency values. |
| Preference negative number format (Locale overrides) | The format for displaying negative numbers. |
| Addresses | List of addresses associated with the user. |
| Street address (Addresses) | The full street location. |
| Locality (Addresses) | The city designation. |
| Region (Addresses) | The state or province code. |
| Country (Addresses) | The ISO 3166-1 alpha-2 country code. |
| Postal code (Addresses) | The zip or postal code. |
| Type (Addresses) | The function label for the address. |
| Timezone | The user's timezone in Olson format. |
| Meta | Metadata about the user resource. |
| Created (Meta) | The timestamp when the user was created. |
| Last modified (Meta) | The timestamp of the last modification to the user. |
| Resource type (Meta) | The type of resource. Value is User. |
| Version (Meta) | The version number of the user record. |
| Location (Meta) | The URL for retrieving the user's details. |
| Provision ID | A unique number used for querying the provisioning status. |
| Status URL | The URL for checking the provisioning status. |
| Locale | The locale setting for the user. |
| Display name | The public-facing name combining given and family names. |
| Entitlements | The entitlements assigned to the user. |
| Name | The full name of the user. |
| Middle initial (Name) | The middle initial abbreviation. |
| Middle name (Name) | The middle name of the user, if applicable. |
| Formatted (Name) | The complete name formatted for display purposes. |
| Honorific prefix (Name) | A title or prefix. |
| Legal name (Name) | The official legal name designation. |
| Family name (Name) | The last name of the user. |
| Given name (Name) | The first name of the user. |
| Honorific suffix (Name) | A suffix designation. |
| Academic title (Name) | The academic title of the user. |
| Family name prefix (Name) | A prefix to the family name. |
| Phone numbers | List of phone numbers associated with the user. |
| Value (Phone numbers) | The phone number. |
| Display (Phone numbers) | The human-readable format of the phone number. |
| Type (Phone numbers) | The category of the phone number. |
| Primary (Phone numbers) | Indicates whether this is the primary mobile number. |
| Notifications (Phone numbers) | The alert subscription status for this phone number. |
| Issuing country | The issuing country for the user. |
| Work extension | The work phone extension. |
| Emergency contacts | List of emergency contact information for the user. |
| Locality (Emergency contacts) | The city of the emergency contact. |
| Name (Emergency contacts) | The contact's full name. |
| Relationship (Emergency contacts) | The connection type. |
| Street address (Emergency contacts) | The physical location of the emergency contact. |
| Region (Emergency contacts) | The state or province of the emergency contact. |
| Phones (Emergency contacts) | The contact phone numbers. |
| Postal code (Emergency contacts) | The postal code of the emergency contact. |
| Emails (Emergency contacts) | The contact email addresses. |
| Country (Emergency contacts) | The country of the emergency contact. |
| Preferred language | The user's preferred language code. |
| Title | The user's job title. |
| Date of birth | The user's date of birth in YYYY-MM-DD format. |
| Nick name | The user's nickname or preferred casual name. |
| External ID | An identifier from the provisioning client. |
| Active | Indicates whether the user account is active. |
| ID | The unique identifier (UUID) for the user. |
| Emails | List of email addresses associated with the user. |
| Value (Emails) | The email address. |
| Verified (Emails) | Indicates whether the email has been verified. |
| Type (Emails) | The category of email. |
| Notifications (Emails) | The email notification opt-in status. |
| User name | The login name in user@domain format. |
| Enterprise user | Attributes representing the user as an enterprise employee. |
| Employee number (Enterprise user) | Client-supplied unique employee identifier. |
| Department (Enterprise user) | The client-supplied department name. |
| Division (Enterprise user) | The client-supplied division name. |
| Start date (Enterprise user) | The employee start date in ISO 8601 format. |
| Organization (Enterprise user) | The company name. |
| Cost center (Enterprise user) | The employee cost center designation. |
| Leaves of absence (Enterprise user) | List of leave periods for the user. |
| Start date (Leaves of absence) | The leave start date in YYYY-MM-DD format. |
| End date (Leaves of absence) | The leave end date in YYYY-MM-DD format. |
| Type (Leaves of absence) | The leave category. |
| Manager (Enterprise user) | The user's manager information. |
| Value (Manager) | The unique identifier (UUID) of the manager. |
| $ref (Manager) | The reference URL to the manager's profile. |
| Display name (Manager) | The display name of the manager. |
| Employee number (Manager) | The employee number of the manager. |
| Termination date (Enterprise user) | The employee termination date in ISO 8601 format. |
| Legal entity | The legal entity information. |
| Travel user | Travel-specific user attributes. |
| Rule class (Travel user) | The travel class information. |
| ID (Rule class) | The unique identifier of the travel class. |
| Name (Rule class) | The name of the travel class. |
| Name prefix (Travel user) | The name prefix for travel purposes. |
| Has no middle name (Travel user) | Indicates whether the user has a middle name. |
| Travel name remark (Travel user) | A remark about the traveler's name. |
| Gender (Travel user) | The gender designation for travel purposes. |
| Org unit (Travel user) | The organizational unit code. |
| Xml profile sync ID (Travel user) | The XML profile synchronization identifier. |
| Travel crs name (Travel user) | The CRS/GDS name for the traveler. |
| Groups (Travel user) | List of travel group identifiers. |
| Permissions (Travel user) | Travel permissions assigned to the user. |
| Travel user (Permissions) | Indicates travel user permission. |
| Open booking user (Permissions) | Indicates open booking permission. |
| Profile user (Permissions) | Indicates profile access permission. |
| Custom fields (Travel user) | List of custom fields for travel. |
| Spend user | Spend-specific user attributes. |
| Bi hierarchy (Spend user) | Business intelligence reporting hierarchy information. |
| Code (Bi hierarchy) | The reporting hierarchy long code. |
| Href (Bi hierarchy) | The hierarchy resource URI. |
| Sync guid (Bi hierarchy) | The hierarchy synchronization identifier. |
| Bi manager (Spend user) | The reporting manager for business intelligence purposes. |
| Display name (Bi manager) | The display name of the BI manager. |
| Employee number (Bi manager) | The employee number of the BI manager. |
| Budget country code (Spend user) | The budget country code. |
| Cash advance account code (Spend user) | The cash advance account identifier. |
| Country (Spend user) | The ISO 3166 country code. |
| Ledger code (Spend user) | The associated ledger code. |
| Locale (Spend user) | The locale from the list of configured locales. |
| Non employee (Spend user) | Indicates whether the user is a non-employee. |
| Reimbursement currency (Spend user) | The three-digit currency code for reimbursements. |
| Reimbursement type (Spend user) | The reimbursement method. |
| Custom data (Spend user) | List of custom field values. |
| Href (Custom data) | The URI to the list item if the field is a list type. |
| ID (Custom data) | The custom field identifier. |
| Sync guid (Custom data) | The synchronization identifier for the custom field. |
| Value (Custom data) | The field value or list item code. |
| State province (Spend user) | The ISO sub country code. |
| Test employee (Spend user) | Indicates whether this is a test user. |
| Spend user preference | User preferences for spend features. |
| Allow auto create trip report (Spend user preference) | Allow automatic trip report creation. |
| Allow credit card trans arrival emails (Spend user preference) | Allow credit card transaction arrival email notifications. |
| Allow receipt image avail emails (Spend user preference) | Allow receipt image availability email notifications. |
| Auto add trip card trans on report (Spend user preference) | Automatically add trip card transactions to reports. |
| Enable ocr for email (Spend user preference) | Enable OCR processing for email receipts. |
| Enable ocr for ui (Spend user preference) | Enable OCR processing for UI-uploaded receipts. |
| Enable trip based assistant (Spend user preference) | Enable trip-based assistant features. |
| Expense audit required (Spend user preference) | The audit requirement level. |
| Processor report access (Spend user preference) | The processor report access level. |
| Prompt for card transactions on report (Spend user preference) | Prompt user for card transactions when creating reports. |
| Use quick itin as default (Spend user preference) | Use quick itinerary as the default. |
| Show expense on report (Spend user preference) | The expense display mode. |
| Default report print format (Spend user preference) | The default print format. |
| Prompt for report print format (Spend user preference) | Prompt user for print format selection. |
| Show total on report (Spend user preference) | Display the total on reports. |
| Show imaging intro (Spend user preference) | Display the imaging introduction. |
| Show instruct help panel (Spend user preference) | Display the instruction help panel. |
| Spend workflow preference | Workflow notification preferences for spend activities. |
| Email await approval on cash advance (Spend workflow preference) | Send email notifications when cash advance awaits approval. |
| Email status change on cash advance (Spend workflow preference) | Send email notifications on cash advance status changes. |
| Email await approval on payment (Spend workflow preference) | Send email notifications when payment awaits approval. |
| Email status change on payment (Spend workflow preference) | Send email notifications on payment status changes. |
| Email on purchase request await approval (Spend workflow preference) | Send email notifications when purchase request awaits approval. |
| Email on purchase request status change (Spend workflow preference) | Send email notifications on purchase request status changes. |
| Email await approval on report (Spend workflow preference) | Send email notifications when report awaits approval. |
| Email status change on report (Spend workflow preference) | Send email notifications on report status changes. |
| Email await approval on travel request (Spend workflow preference) | Send email notifications when travel request awaits approval. |
| Email status change on travel request (Spend workflow preference) | Send email notifications on travel request status changes. |
| Prompt for approver on report submit (Spend workflow preference) | Prompt for approver selection when submitting reports. |
| Prompt for approver on payment submit (Spend workflow preference) | Prompt for approver selection when submitting payments. |
| Prompt for purchase request approver on submit (Spend workflow preference) | Prompt for approver selection when submitting purchase requests. |
| Prompt for approver on travel request submit (Spend workflow preference) | Prompt for approver selection when submitting travel requests. |
| Spend role | Roles assigned to the user in the spend system. |
| Roles (Spend role) | List of role assignments. |
| Role groups (Spend role) | The role groups associated with the role. |
| Role name (Spend role) | The identifier of the role. |
| Spend delegate | Delegate permissions for spend activities. |
| Expense (Spend delegate) | Expense delegation settings. |
| Can approve (Expense) | Permission to approve expenses on behalf of the user. |
| Can prepare (Expense) | Permission to prepare expenses on behalf of the user. |
| Can prepare for approval (Expense) | Permission to prepare expenses for approval. |
| Can receive approval email (Expense) | Permission to receive approval email notifications. |
| Can receive email (Expense) | Permission to receive general email notifications. |
| Can submit (Expense) | Permission to submit expenses on behalf of the user. |
| Can submit travel request (Expense) | Permission to submit travel requests. |
| Can use bi (Expense) | Permission to access business intelligence features. |
| Can view receipt (Expense) | Permission to view receipts. |
| Delegate (Expense) | The delegate user information. |
| Display name (Delegate) | The display name of the delegate. |
| Employee number (Delegate) | The employee number of the delegate. |
| $ref (Delegate) | The reference URL to the delegate's profile. |
| Value (Delegate) | The unique identifier of the delegate. |
| Temporary delegation (Expense) | Indicates if the delegation is temporary. |
| Temporary delegation from date (Expense) | The start date for temporary delegation. |
| Temporary delegation to date (Expense) | The end date for temporary delegation. |
| Purchase request (Spend delegate) | Purchase request delegation settings. |
| Invoice (Spend delegate) | Invoice delegation settings. |
| Delegate prod code(deprecated) (Spend delegate) | Deprecated delegation code. |
| Spend approver | Approver assignments for various spend activities. |
| Request (Spend approver) | Approvers for requests. |
| Approver (Request) | The approver information. |
| Display name (Approver) | The display name of the approver. |
| Employee number (Approver) | The employee number of the approver. |
| $ref (Approver) | The reference URL to the approver's profile. |
| Value (Approver) | The unique identifier (UUID) of the approver. |
| Primary (Approver) | Indicates whether this is the primary approver. |
| Report (Spend approver) | Approvers for expense reports. |
| Statement (Spend approver) | Approvers for statements. |
| Cash advance (Spend approver) | Approvers for cash advances. |
| Purchase request (Spend approver) | Approvers for purchase requests. |
| Budget (Spend approver) | Approvers for budget items. |
| Invoice (Spend approver) | Approvers for invoices. |
| Approver type(deprecated) (Spend approver) | Deprecated approver type field. |
| Enterprise payroll | Payroll integration information. |
| Adp (Enterprise payroll) | ADP payroll integration details. |
| Company code (Adp) | The payroll company code. |
| Deduction code (Adp) | The payroll deduction code. |
| Employee file number (Adp) | The payroll employee file identifier. |

---
