<!-- source: https://docs.workato.com/en/connectors/positional-file-tool/build-flat-file | lastmod: 2026-05-25 -->
> Use the Build flat file action to generate a fixed-width flat file from an array of rows.

# Positional file tool - Build flat file action

Use the **Build flat file** action to generate a fixed-width flat file from an array of rows. This action returns the flat file content as a single text blob, which you can store with the [Create file in Workato FileStorage](/en/features/filestorage/create-file-action) action.

## Input

| Input field | Description |
| --- | --- |
| Rows to output | Provide an array of row objects as a JSON string. For example, `[{"field1": "value1"}, {"field1": "value2"}]`. |
| Column layout | Define the column layout for the flat file. Click **...** (ellipses) to choose between a **Fixed list** or **Dynamic list**. Use a **Fixed list** when the column items and content are known. Use a **Dynamic list** when the column items and content depend on another list. |
| Column layout source list (Column layout) | Input a list datapill that contains the column layout. Available for column layouts configured with a **Dynamic list**. |
| Field name (Column layout) | Enter a name for this field. |
| Start position (Column layout) | Provide the 0-based start position for the field. |
| Length (Column layout) | Enter the number of characters allocated to the field. |
| Padding character | Provide a padding character. This defaults to space. |
| Pad direction | Specify whether to pad values on the right or left. The default pad direction is right. |

## Output

| Output field | Description |
| --- | --- |
| Flat file content | The content of the generated flat file. |

---
