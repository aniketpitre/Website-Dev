<!-- source: https://docs.workato.com/en/workbot/custom-workbot-vs-legacy-slash-commands | lastmod: 2026-10-28 -->
> Compare Enterprise Workbot slash commands and legacy Slack slash commands to choose the right approach for triggering Workato recipes.

# Enterprise Workbot vs Legacy slash commands

Workato supports both [slash commands that are part of an Enterprise Workbot](https://api.slack.com/slash-commands) (i.e. a custom Slack app) and legacy slash commands (i.e. [Custom Integrations slash commands](https://slack.com/apps/A0F82E8CA-slash-commands)).

We strongly recommend using Enterprise Workbots to configure your slash command, as custom integrations is a legacy feature that will eventually be deprecated (no news as to when just yet). Legacy slash commands also does not support some functionalities that Enterprise Workbots have.

Enterprise Workbot slash commands requires [creating a new Slack app](/en/workbot/workbot-custom-bots), and connecting it to Workato via a custom OAuth profile, while legacy slash commands does not. You can add legacy slash commands to a Slack workspace directly from the Slack app directory.

Here is a detailed comparison table between the Enterprise Workbot slash commands and the legacy slash commands.

| Features | Enterprise Workbot slash commands | Legacy slash commands |
| --- | --- | --- |
| Can invoke dialogs? | Yes | No |
| Dialog for missing command input fields | Yes | No |
| Requires a custom Slack app | Yes | No |
| Supports ephemeral messages in Post command reply | Yes | No |
| Connection method | [Workbot with Custom OAuth profile](/en/workbot/configuring-slash-commands.html#workbot-connection) | [Slash command verification token](/en/workbot/legacy-slash-commands.html#configuring-the-workbot-connection) |
| Customize app icon | Yes, from Slack app page | Yes, from the [slash command page](https://slack.com/apps/A0F82E8CA-slash-commands) |
| Pass command input field values to subsequent messages/recipes | Yes | Yes |
| Posting in channels | Yes, but only in channels it is invited to. | Yes, can post in any channel within the Slack workspace it is installed to. |
| Multiple slash commands | Yes, each Workbot recipe can have its own unique slash command. | Yes, each Workbot connection can store the slash command verification tokens of multiple slash commands. |

## Notes for Enterprise Workbot slash commands

1. Make sure that Workbot is in the channel to run commands. Do this by inviting it to the channel.
2. When you invite Workbot into the channel, **anyone** in that channel can interact with Workbot via commands.

---
