<!-- source: https://docs.workato.com/en/connectors/aws-inspector-2/create-filter-action | lastmod: 2026-06-17 -->
> The Create filter action defines custom filters for findings.

# AWS Inspector2 - Create filter action

The **Create filter** action defines custom filters for findings. Filters help you narrow down security findings based on specific criteria, making prioritizing and addressing issues easier.

## Input

| Input field | Description |
| --- | --- |
| Action | Select the action to perform on findings that match the filter. |
| Name | Enter a custom name to identify the filter. |
| Filter criteria | Define the search criteria for findings. You can filter by criteria such as `severity`, `resource tags`, and more. Refer to Amazon's [Field criteria object](https://docs.aws.amazon.com/inspector/v2/APIReference/API_FilterCriteria.html) guide for more information. |
| Description | Enter a description for the filter. |
| Reason | Enter a reason for creating the filter. |
| Tags | Enter key-value pairs for the tags to assign to the resource. For example: `Environment: Production` |

## Output

| Output field | Description |
| --- | --- |
| Amazon Resource Number (ARN) | The Amazon Resource Name (ARN) of the filter that was created. This unique identifier manages or references the filter in future operations. |

---
