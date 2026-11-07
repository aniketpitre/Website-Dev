<!-- source: https://docs.workato.com/en/connectors/gmail-custom/update-imap-action | lastmod: 2026-09-21 -->
> The Update IMAP action updates the IMAP settings for a Gmail mailbox.

# Gmail (Custom) - Update IMAP action

The **Update IMAP** action updates the IMAP settings for a Gmail mailbox. This action requires the `https://www.googleapis.com/auth/gmail.settings.basic` OAuth scope.

## Input

| Input field | Description |
| --- | --- |
| User id | Enter the user's email address. |
| Enabled | Select to enable IMAP for the account. |
| Auto expunge | Set to `Yes` for Gmail to immediately expunge a message when it's marked as deleted in IMAP. Gmail waits for an update from the client before expunging deleted messages if set to `No`. |
| Expunge behavior | Select the action to take on a message when it's marked as deleted and expunged from the last visible IMAP folder. |
| Max folder size | Enter an optional limit on the number of messages an IMAP folder can contain. Valid values are `0`, `1000`, `2000`, `5000`, or `10000`. A value of `0` means there's no limit. |

## Output

| Output field | Description |
| --- | --- |
| Enabled | Whether IMAP is enabled for the account. |
| Auto expunge | Whether Gmail immediately expunges deleted messages. |
| Expunge behavior | The action taken on a message when it's marked as deleted and expunged. |
| Max folder size | The maximum number of messages an IMAP folder can contain. |
| User id | The user's email address. |

---
