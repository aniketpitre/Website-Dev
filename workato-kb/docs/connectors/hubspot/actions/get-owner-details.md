<!-- source: https://docs.workato.com/en/connectors/hubspot/actions/get-owner-details | lastmod: 2026-06-29 -->
> The Get owner details action in the HubSpot connector retrieves a list of owners from your HubSpot account.

# HubSpot - Get owner details action

The **Get owner details** action retrieves a list of owners from HubSpot.

## Input

| Input field | Description |
| --- | --- |
| Email | Filter results by the owner's email address. |
| Include inactive | Specify whether to include archived (inactive) owners in the results. The default is `false`. |
| Limit | Specify the maximum number of results to return per page. The default is `500`. |
| Next page token | Map the Next page token datapill to retrieve the next page of results. |

## Output

This action returns a list of owners matching the input criteria, along with a paging object used for pagination.

---
