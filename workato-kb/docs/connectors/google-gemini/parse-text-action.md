<!-- source: https://docs.workato.com/en/connectors/google-gemini/parse-text-action | lastmod: 2025-07-14 -->
> The Parse text action extracts data you specify from a provided text.

# Google Gemini - Parse text action

The **Parse text** action extracts data you specify from a provided text.

## Input

| Input field | Description |
| --- | --- |
| Model | Select the Gemini model to use. |
| Source text | Provide the text to parse. |
| Fields to identify | Enter the fields that you want to identify from the text. |

## Output

This action returns the fields defined in the **Fields to identify** section, along with the following fields:

| Output field | Description |
| --- | --- |
| Sexually explicit | The likelihood that the text contains sexually explicit content. `NEGLIGIBLE` indicates there is little to no risk of such content being present. |
| Hate speech | The likelihood that the text contains or promotes hate speech, such as discriminatory symbols or context targeting protected groups. `NEGLIGIBLE` indicates there is little to no risk of such content being present. |
| Harassment | The likelihood that the text contains harassing behavior, threats, or abuse toward individuals or groups. `NEGLIGIBLE` indicates there is little to no risk of such content being present. |
| Dangerous content | The likelihood that the text contains dangerous or harmful content such as violence, self-harm, or instructions for unsafe behavior. `NEGLIGIBLE` indicates there is little to no risk of such content being present. |

---
