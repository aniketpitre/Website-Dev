<!-- source: https://docs.workato.com/en/connectors/ukg-pro-recruiting/get-record-action | lastmod: 2026-01-02 -->
> The Get record action retrieves the details of a specific record in UKG Pro (Recruiting).

# UKG Pro (Recruiting) - Get record action

The **Get record** action retrieves the details of a specific record in UKG Pro (Recruiting).

## Input

| Input field | Description |
| --- | --- |
| Object | Specify the type of object to retrieve details from. Additional fields load dynamically based on the object you select. |
| ID | Enter the unique identifier of the record to retrieve. |

## Output

The output fields are determined by the object selected in the input. Map the relevant datapill from the data tree to subsequent steps. For example, the **Candidate** object has the following output schema:

| Output field | Description |
| --- | --- |
| ID | The unique ID of a candidate in GUID format. |
| Creator | The creator of a candidate record. |
| Created at | The date and time a candidate was created. |
| Util person ID | The UKG Pro person ID. |
| EEID | The employee identifier. |
| Preferred\_locale | The preferred language of the candidate. |
| Integration user ID | The user ID used in 3rd party integrations, such as background check integrations. |
| Is internal | indicator of whether or not a candidate is an internal employee. |
| Is active | indicator of whether or not a candidate is an active employee. |
| Updated at | The date and time a candidate was last updated. |

---
