<!-- source: https://docs.workato.com/en/connectors/greenhouse/get-object-by-id-action | lastmod: 2026-06-29 -->
> The Get object by ID action in the Greenhouse connector lets you retrieve a candidate, application, job, offer, or user by its unique Greenhouse ID.

# Greenhouse - Get object by ID action

This action retrieves information about a Greenhouse object by its unique Greenhouse ID.

> **DEPRECATION NOTICE**
> 
> This action uses the legacy Greenhouse v1 API, which Greenhouse will remove on August 30, 2026.
> 
> Greenhouse v3 doesn't provide a direct equivalent for this action. Use the [Search objects (v3)](/en/connectors/greenhouse/search-objects-v3) action and filter by a comma-separated list of IDs to retrieve specific records.
> 
> Refer to the [Greenhouse v3 migration guide](/en/connectors/greenhouse/migration) to migrate your recipes.

![Reject application action](/assets/get-object-by-id-action.FSDfCpyI.png)_Reject application action_

## Input

| Input field | Description |
| --- | --- |
| Object | The object type. The available objects are:- Candidate
- Application
- Job
- Offer
- User |
| Object ID | The ID of the object you want to retrieve. |

> **Retrieving Offer ID**
> 
> There are two ways to retrieve an offer - by Application ID or by Offer ID.
> 
> When using the **Application ID**, this action will only return the most recent offer. To retrieve the history of offers for an application, use the [Search object](/en/connectors/greenhouse/search-objects-action) action.

## Output

The output of this action will be a datatree that contains information about the Greenhouse object.

Find out more about [Greenhouse object datapills](/en/connectors/greenhouse/object-types).

---
