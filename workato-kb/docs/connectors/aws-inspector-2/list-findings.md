<!-- source: https://docs.workato.com/en/connectors/aws-inspector-2/list-findings | lastmod: 2026-06-17 -->
> The List findings action retrieves a list of findings in your environment.

# AWS Inspector2 - List findings action

The **List findings** action retrieves a list of findings in your environment. Findings represent potential security risks, such as vulnerabilities or misconfigurations, and include detailed information for remediation.

## Input

| Input field | Description |
| --- | --- |
| Filter criteria | Define the search criteria for findings. You can filter by criteria such as `severity`, `resource tags`, and more. Refer to Amazon's [Field criteria object](https://docs.aws.amazon.com/inspector/v2/APIReference/API_FilterCriteria.html) guide for more information. |
| Max results | Set the maximum number of results to return. A `NextToken` is returned for pagination if more results are available. |
| Page token | Use this token to retrieve the next page of results. Set it to null for the first request. For subsequent requests, use the `NextToken` returned from the previous response. |
| Sort criteria | Specify how to sort the findings. Specify the field to sort by and the sort order (`ascending` or `descending`). |

## Output

| Output field | Description |
| --- | --- |
| Findings | Contains details on the findings in your environment. |
| Next token | Use this token to paginate results. Set it to null for the first request. For subsequent requests, use the `NextToken` from the previous response to retrieve the next page of results. |

---
