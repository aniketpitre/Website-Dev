<!-- source: https://docs.workato.com/en/connectors/gumroad/new-event-trigger | lastmod: 2026-11-02 -->
> Invoke a recipe in real time when a Gumroad sale, refund, dispute, cancellation, or subscription event occurs.

# Gumroad - New event trigger

The **New event** trigger invokes in real time when a resource event, such as a sale, refund, or subscription change, occurs in Gumroad.

## Input

| Input field | Description |
| --- | --- |
| Resource | Select the event type to monitor. Options are **Sale**, **Refund**, **Dispute**, **Dispute won**, **Cancellation**, **Subscription updated**, **Subscription ended**, or **Subscription restarted**. |
| Payload schema | Optional. Define additional output fields from the webhook payload that aren't in the standard output. Leave blank to return only the standard output fields. |

## Output

Output fields dynamically generate based on the **Resource** you select. Refer to the Gumroad [API](https://app.gumroad.com/api) documentation for more information on available output fields. The following fields are common to all resources:

| Output field | Description |
| --- | --- |
| Product ID | The unique ID of the product. |
| Product name | The name of the product. |
| Subscription ID | The unique ID of the subscription. |
| Recurrence | How often the subscription renews. |
| License key | The license key issued for the purchase or subscription. |
| Custom fields | The custom fields the buyer completed at checkout. |
| Resource name | The event type that invoked the trigger. |

---
