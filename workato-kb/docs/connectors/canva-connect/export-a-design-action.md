<!-- source: https://docs.workato.com/en/connectors/canva-connect/export-a-design-action | lastmod: 2026-09-08 -->
> The Export a design action exports a design from Canva Connect to a file and returns the download URLs.

# Canva Connect - Export a design action

The **Export a design** action exports a design from Canva Connect to a file and returns the download URLs. The action waits for the export to complete and times out after `30` minutes.

## Input

| Input field | Description |
| --- | --- |
| Design ID | Enter the ID of the design you plan to export. |
| File type | Select the format to export the design as. Options are `PDF`, `JPG`, `PNG`, `PPTX`, `GIF`, or `MP4`. |
| Pages | Enter page numbers to export from a multi-page design. The first page is page 1. All pages are exported if left blank. |
| Page size | Select the paper size of the exported PDF. Options are `A4`, `A3`, `Letter`, or `Legal`. Required for PDF exports. |
| Height | Enter the height, in pixels, of the exported image. Used for JPG, PNG, or GIF exports only. |
| Width | Enter the width, in pixels, of the exported image. Used for JPG, PNG, or GIF exports only. |
| Lossless | Set to true to export the PNG with lossless compression. Defaults to false. Used for PNG exports only. |
| As single image | Set to true to merge a multi-page design into a single PNG image instead of exporting each page separately. Defaults to false. Used for PNG exports only. |
| Transparent background | Set to true to export the PNG with a transparent background. Requires Canva Pro. Used for PNG exports only. |

## Output

| Output field | Description |
| --- | --- |
| URLs | The download URLs for the exported file. |

---
