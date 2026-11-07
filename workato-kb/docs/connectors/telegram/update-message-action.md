<!-- source: https://docs.workato.com/en/connectors/telegram/update-message-action | lastmod: 2026-09-23 -->
> Edit the text of a message your Telegram bot already sent, for example to reflect a status change.

# Telegram - Update message action

The **Update message** action edits the text of an existing message in Telegram.

> **BOTS CAN ONLY EDIT THEIR OWN MESSAGES**
> 
> This action can only edit a message the bot itself sent. Editing a message from another user or bot fails. Messages can only be edited within 48 hours of being sent.

## Input

| Input field | Description |
| --- | --- |
| Chat ID | Enter the unique identifier for the target chat or the username of the target channel. Required if **Inline message ID** isn't specified. |
| Message ID | Enter the identifier of the message to edit. Required if **Inline message ID** isn't specified. |
| Inline message ID | Enter the identifier of the inline message to edit. Required if **Chat ID** and **Message ID** aren't specified. |
| Message | Enter the new text of the message. |
| Parse mode | Optional. Select the mode to format the message text with bold, italic, or other styling. Options are **Markdown**, **MarkdownV2**, or **HTML**. Leave blank for plain text. |
| Disable web page preview | Optional. Select whether to disable link previews for links in this message. |
| Reply markup | Optional. Enter a JSON-serialized inline keyboard, custom reply keyboard, or other reply markup object. |

## Output

This action returns the updated message. Refer to the Telegram Bot API [Message](https://core.telegram.org/bots/api#message) documentation for more information on available output fields.

| Output field | Description |
| --- | --- |
| Message ID | The message's unique identifier inside the chat. |
| From | The bot that sent the message. |
| Chat | The chat the message belongs to. |
| Date | The Unix timestamp the message was originally sent. |
| Edit date | The Unix timestamp the message was last edited. |
| Text | The updated text of the message. |

---
