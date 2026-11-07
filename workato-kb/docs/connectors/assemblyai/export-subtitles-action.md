<!-- source: https://docs.workato.com/en/connectors/assemblyai/export-subtitles-action | lastmod: 2026-09-29 -->
> Download SRT or VTT subtitle text for a completed transcript in AssemblyAI.

# AssemblyAI - Export subtitles action

The **Export subtitles** action downloads subtitle content for a completed transcript from AssemblyAI, as SRT or VTT text.

## Input

| Input field | Description |
| --- | --- |
| Transcript ID | Enter the UUID of a completed transcript. Use the **ID** output from the [Get record](/en/connectors/assemblyai/get-record-action) or [Transcribe and wait](/en/connectors/assemblyai/transcribe-and-wait-action) action. |
| Format | Select **SRT** or **VTT**. The default is **SRT**. |
| Chars per caption | Optional. Enter the maximum number of characters allowed per caption. |

## Output

| Output field | Description |
| --- | --- |
| Transcript ID | The transcript's unique identifier. |
| Format | The subtitle format returned. Options are `srt` or `vtt`. |
| Chars per caption | The **Chars per caption** value used, if provided. |
| Subtitle content | The subtitle file content as text. |

---
