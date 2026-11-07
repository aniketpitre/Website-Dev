<!-- source: https://docs.workato.com/en/connectors/supabase/download-object-action | lastmod: 2026-10-13 -->
> Download a file from a Supabase storage bucket, as a public or authenticated download.

# Supabase - Download object action

The **Download object** action downloads a file from a storage bucket in Supabase.

## Input

| Input field | Description |
| --- | --- |
| Bucket | Select the storage bucket that holds the file. |
| Path | Enter the full path to the file inside the bucket, for example `folder/file.png`. |
| Public | Optional. Select **Yes** if the file is publicly accessible, or **No** to download with connection credentials. Defaults to **No** if left blank. |
| Save as | Optional. Enter the filename used when the browser saves the file, for example `report.pdf`. |

## Output

| Output field | Description |
| --- | --- |
| Content | The downloaded file's raw bytes. |
| Content type | The file's MIME type. The **Content type** field is only available when Supabase's response includes a `Content-Type` header. |

---
