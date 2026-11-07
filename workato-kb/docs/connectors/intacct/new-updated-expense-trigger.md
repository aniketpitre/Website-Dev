<!-- source: https://docs.workato.com/en/connectors/intacct/new-updated-expense-trigger | lastmod: 2026-06-29 -->
> The New/updated expense trigger in the Sage Intacct connector fires when expense records are created or updated in your instance.

# Sage Intacct - New/updated expense trigger

This trigger fetches new/updated expense records in your Sage Intacct instance.

![New/updated expense trigger](/assets/new-updated-expense-trigger.XsD3bbob.png)_New/updated expense trigger_

## Input

| Input field | Description |
| --- | --- |
| When first started, this recipe should pick up events from | Fetch trigger events from specified time. Defaults to an hour ago from time that recipe first started if left blank. Once recipe has been run or tested, value cannot be changed. Refer to [Triggers](/en/recipes/triggers#since-from) to learn more about this input field. |
| Trigger poll interval | Optional. How frequently to check for new/updated events. Defaults to 5 minutes if left blank. Minimum value allowed is 5 minutes. |

## Output

The output of this action will be a datatree that contains information about the expense object.

Find out more about [expense object](https://developer.intacct.com/api/employee-expenses/).

---
