<!-- source: https://docs.workato.com/en/connectors/salesforce/triggers/new-event | lastmod: 2026-06-17 -->
> This trigger monitors Salesforce in real-time for new PushTopic events in subscribed channels.

# Salesforce - New PushTopic event trigger (real-time)

This trigger uses the [Salesforce Streaming API](https://developer.salesforce.com/docs/atlas.en-us.202.0.api_streaming.meta/api_streaming/intro_stream.htm) to monitor Salesforce in real-time for new PushTopic events in subscribed channels. Any PushTopic events not picked up within 24 hours, for example, if the recipe was stopped for longer than 24 hours, are not be processed by the recipe. This trigger picks up events from the last 24 hours when you start the recipe, provided the PushTopic has been active for that duration.

## Prerequisites

You must [create a PushTopic](https://developer.salesforce.com/docs/atlas.en-us.202.0.api_streaming.meta/api_streaming/create_a_pushtopic.htm) object in Salesforce before you can use this trigger. Workato recommends creating focused PushTopics to minimize the number of trigger events and avoid running jobs on unnecessary trigger events.

Workato fetches the output schema as defined in the PushTopic automatically. You can define a new schema by using a SOQL query or manually specifying the fields.

![PushTopic trigger setup](/assets/pushtopic-trigger-setup.pHgIs1Kr.png)_The recipe receives data as specified in the schema_

## Input

| Input fields | Description |
| --- | --- |
| Pushtopics | Select a PushTopic to subscribe to. |
| Output schema | Define a new schema by using a SOQL query or manually adding fields. |

## Output

| Output fields | Description |
| --- | --- |
| Replay ID | A number indicating the sequence of event notifications. |
| Created date | The date and time the event was created. |
| Type | The type of trigger event. |

Additional outputs load dynamically based on the PushTopic schema.

---
