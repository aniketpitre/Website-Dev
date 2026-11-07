<!-- source: https://docs.workato.com/en/connectors/pdf-tools-by-workato | lastmod: 2026-09-08 -->
> The PDF tools by Workato connector lets you convert, stamp, split, merge, and extract text from PDF documents directly within recipes.

# PDF tools by Workato

The PDF tools by Workato connector enables you to process PDF documents directly within recipes. You can use this connector to convert, stamp, split, merge, and extract text from PDF files without external services or custom scripts.

## How PDF tools by Workato works

PDF tools by Workato provides the following actions:

- [Convert to PDF action](/en/connectors/pdf-tools-by-workato/actions/convert-to-pdf): Converts a source document (Word, Excel, CSV, image, or HTML) to a PDF file.
- [Extract text from PDF action](/en/connectors/pdf-tools-by-workato/actions/extract-text-from-pdf): Extracts raw text content from digital PDF documents and returns it page by page.
- [Merge PDF action](/en/connectors/pdf-tools-by-workato/actions/merge-pdf): Combines multiple PDF files into a single PDF document in the order provided.
- [Split PDF action](/en/connectors/pdf-tools-by-workato/actions/split-pdf): Splits a PDF document into multiple smaller files by page range or fixed interval.
- [Stamp PDF action](/en/connectors/pdf-tools-by-workato/actions/stamp-pdf): Adds text or image stamps as overlays on PDF pages while preserving the original content.

## Setup

PDF tools by Workato is a built-in connector. It doesn't require authentication or connection setup.

## Quotas

The PDF tools by Workato connector has the following quotas:

### Rate limits

| Description | Quota |
| --- | --- |
| PDF tools daily operations | 10,000 operations per day per workspace |
| PDF tools large file processing (files larger than 50 MB) | 10 operations per hour per workspace |

### File size quotas

| Description | Quota |
| --- | --- |
| PDF tools maximum file size per source file for all actions | 100 MB |

### Action-specific quotas

| Description | Quota |
| --- | --- |
| Merge PDF action maximum input | 50 files, 100 MB combined |
| Split PDF action maximum output | 50 output files |

---
