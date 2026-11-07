<!-- source: https://docs.workato.com/en/recipes/run-time-errors/action-internal-errors | lastmod: 2026-07-10 -->
> Learn how to identify and troubleshoot action errors (caught and uncaught) and trigger errors during recipe job execution in Workato.

# Action and trigger errors

This section helps identify whether an error occurs in a trigger or an action within Workato. A trigger initiates a job's execution, while actions are the steps within these jobs.

## Action errors

You can identify action errors in the Jobs tab when a recipe encounters a problem during execution. These errors appear in two forms: uncaught and caught.

**Uncaught errors**

Uncaught errors are immediately visible, denoted by the job time highlighted in red.

![Action error](/assets/action-errors.DslVMgpG.png)_Action error_

**Caught errors**

Caught errors aren't immediately visible in the **Jobs** tab but can be identified by examining the specific job. A well-structured error-handling approach is essential for detecting and troubleshooting these errors effectively.

Note that an unaddressed error within a job does not stop or affect the ongoing recipe or subsequent jobs. Each job operates in isolation.

### How to identify action errors

Complete the following steps to identify an action error in the **Jobs** tab:

1. Click on the specific job where the error occurred and locate the step with the error.
   
   ![Locate step](/assets/locate-step.DH-CtHfk.png)_Locate step_
   
2. Click on the step to view details. Locate the error message in the **Error** tab.
   
   ![Error tab](/assets/error-tab.cQYjAPwG.png)_Error tab_
   

## Trigger errors

Trigger errors can be categorized into [misconfigured trigger errors](#misconfigured-trigger-errors) and [true trigger errors](#true-trigger-errors).

### Misconfigured trigger errors

Misconfigured triggers can result in unexpected job outcomes, such as a recipe failing to pick up any jobs or picking up more jobs than expected.

Complete the following steps to identify and resolve a misconfigured trigger error:

1. Verify trigger parameters to ensure they are correct. For example, a [When first started, this recipe should pick up events from](/en/recipes/triggers#since-from) parameter should accurately reflect when the trigger begins scanning for records.
   
   ![Error tab](/assets/trigger-verify.val2Q8s2.png)_Verify trigger parameters_
   
2. Review your trigger conditions (if applicable) to ensure they are not too restrictive. Overly restrictive trigger conditions can delay job detection.
   
   ![Error tab](/assets/review-restrictions.BhTKUyM7.png)_Review filter restrictions_
   
3. Check for underlying permission issues related to the account used for the connection, even if the connection is already established.
   
4. Check for job overload. Ensure that parameters or filters are not overly inclusive if a trigger is collecting more jobs than expected.
   

### True trigger errors

True trigger errors typically display in the **Jobs** tab. For example, if a trigger logs 60 consecutive errors, it automatically stops the recipe.

Complete the following steps to identify and resolve a true trigger error:

1. Review trigger parameters to ensure that all settings and configurations are accurate.
   
2. Examine the upstream application for any error signals from the system that precedes Workato in the workflow.
   
3. Contact Workato support for assistance in retrieving logs for stopped recipes, as direct access to logs may not be available.

---
