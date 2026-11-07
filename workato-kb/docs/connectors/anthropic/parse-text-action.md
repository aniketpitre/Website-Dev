<!-- source: https://docs.workato.com/en/connectors/anthropic/parse-text-action | lastmod: 2026-10-28 -->
> The Parse text action processes inputted text to find specific information based on defined guidelines in Anthropic.

# Anthropic - Parse text action

The **Parse text** action extracts specific information from your input text in Anthropic, based on guidelines you define. The extracted information is available as datapills.

## Input

| Input field | Description |
| --- | --- |
| Model | Select the Anthropic model you plan to use. For example, `Claude 3 Haiku`. |
| Source text | Enter the text you plan to parse. |
| Fields to identify | Enter the fields you plan to identify from the text, with a description for each field. Required fields take effect only at the top level. Nested fields are optional. |
| Max tokens | Enter the maximum number of tokens to generate before stopping. Defaults to `4096` if left blank. |

## Output

Output fields dynamically generate based on the fields you define in the **Fields to identify** field.

---
