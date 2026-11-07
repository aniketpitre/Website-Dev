<!-- source: https://docs.workato.com/en/connectors/telegram/send-message-action | lastmod: 2026-09-23 -->
> Post a plain-text or formatted message from your Telegram bot to a chat or channel.

# Telegram - Send message action

The **Send message** action sends a text message to a chat in Telegram.

## Input

| Input field | Description |
| --- | --- |
| Chat ID | Enter the unique identifier for the target chat or the username of the target channel, for example `@channelusername`. |
| Message to send | Enter the text of the message. Maximum 4096 characters. |
| Parse mode | Optional. Select the mode to format the message text with bold, italic, or other styling. Options are **Markdown**, **MarkdownV2**, or **HTML**. Leave blank for plain text. |
| Disable web page preview | Optional. Select whether to disable link previews for links in this message. |
| Disable notification | Optional. Select whether to send the message silently. |
| Protect content | Optional. Select whether to protect the message content from forwarding and saving. |
| Allow sending without reply | Optional. Select whether to send the message even if the message being replied to is deleted or doesn't exist. |
| Reply to message ID | Optional. Enter the ID of the message this message is replying to. |
| Reply markup | Optional. Enter a JSON-serialized inline keyboard, custom reply keyboard, or other reply markup object. |

## Output

This action returns the sent message. Refer to the Telegram Bot API [Message](https://core.telegram.org/bots/api#message) documentation for more information on available output fields.

| Output field | Description |
| --- | --- |
| Message ID | The message's unique identifier inside the chat. |
| From | The bot that sent the message. |
| Chat | The chat the message was sent to. |
| Date | The Unix timestamp the message was sent. |
| Text | The text of the message that was sent. |

---
