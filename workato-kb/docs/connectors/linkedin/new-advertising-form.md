<!-- source: https://docs.workato.com/en/connectors/linkedin/new-advertising-form | lastmod: 2026-06-29 -->
> The New lead gen form submitted trigger in the LinkedIn connector fires when someone completes a lead gen form in any of your LinkedIn campaigns.

# LinkedIn - New lead gen form submitted trigger

The **New lead gen form submitted** trigger allows you to create jobs immediately when someone completes a lead gen form in any of your LinkedIn Campaigns. This trigger sends the information to your CRM, providing your sales team with visibility into new leads.

> **LEAD GEN FORM MUST BE ACTIVE**
> 
> The lead gen form in your LinkedIn Campaigns must be active to successfully create a subscription and start the recipe. An inactive lead gen form returns a `404 Not Found Error`.

![LinkedIn Trigger](/assets/linkedin-new-form-trigger.DOSz13oo.png)_Filter leads by advertising account, campaign, and form_

## Input

At a minimum, you must select the advertising account containing the campaigns, which, in turn, contain the lead gen forms from which you plan to retrieve leads.

| Input field | Description |
| --- | --- |
| Advertising account | This is the advertising account containing the advertising form to trigger off. If only this field is configured, this recipe considers all advertising form submissions across all campaigns and advertising forms within this advertising account as trigger events. You can only have one recipe listening on the same advertising account. |
| Campaign | Use this to scope advertising form submissions to a specific campaign in your LinkedIn advertising account. If this field is configured, this recipe considers all advertising form submissions on this specific campaign as trigger events. You cannot have more than one advertising form trigger listening on the same campaign. |
| Form | Use this to filter by specific lead gen forms in your advertising account or campaign. |
| When first started, this recipe should pick up events from | This allows you to retrospectively pull leads from LinkedIn. This would be useful for initial loads when starting this recipe. You can pull leads created in the past 90 days. Refer to [Triggers](/en/recipes/triggers#since-from) to learn more about this input field. |

## Output

The output of this trigger is a lightweight record that contains the identifiers of this lead gen form submission and its parent creative, campaign, account, and form.

![LinkedIn record](/assets/linkedin-new-form-trigger-output-field.IiryaAa4.png)

## How to use the trigger

1. Overcoming restrictions on the trigger

As LinkedIn imposes a one recipe rule for each advertising account or campaign, you will be unable to start multiple recipes that trigger off the same advertising account or campaign. To handle multiple automations based off the same advertising account or campaign, use [Recipe functions](/en/connectors/recipe-functions).

2. Getting details of the lead gen form response

To get the contents of the answers to a specific lead gen form response, use the `Get lead gen form response` action.

---
