<!-- source: https://docs.workato.com/en/connectors/recipeops/triggers/new-failed-job | lastmod: 2026-06-29 -->
> The Job failed trigger in the RecipeOps connector fires when a monitored recipe has a failed job, so you can automate corrective actions in real time.

# RecipeOps - Job failed trigger

The **Job failed** trigger monitors all active or selected recipes for failed jobs in real-time. This allows you to build logic to automate corrective actions, such as sending notifications when an issue occurs. Each failed job triggers an event, even if additional jobs fail with the same error.

## Input

| Input field | Description |
| --- | --- |
| Recipes to monitor | Select the recipes to monitor. Choose **All** to monitor all recipes in the workspace, **Selected** to monitor selected recipes, or **Tags** to monitor recipes associated with one or more tags. |
| Recipe IDs | Provide a comma-separated list of recipe IDs if monitoring **Selected** recipes. You can find recipe IDs in the recipe’s URL. For example, in `https://app.workato.com/recipes/362905-timekeeper`, the recipe ID is `362905`. |
| Tags | Provide one or more tags if monitoring recipes by **Tags**. |

## Output

| Output field | Description |
| --- | --- |
| Job ID | The ID of the failed job. |
| Original Job ID | The ID of the original job if it was a repeated job. |
| Recipe ID | The ID of the recipe. |
| Calling job ID | The ID of the calling job if this job was called from [Recipe Functions](/en/connectors/recipe-functions). |
| Calling recipe ID | The ID of the calling recipe if this job was called from [Recipe Functions](/en/connectors/recipe-functions). |
| Root recipe ID | The ID of the original recipe that initiated the workflow. This remains the same for all jobs related to that workflow. |
| Root job ID | The ID of the first job in the workflow triggered by the root recipe. |
| Title | The title of the recipe. |
| Status | The status of the recipe. |
| Is repeat | Indicates whether the job was repeated. |
| Is test | Whether the job was a test job. |
| Started at | The time this job was started. |
| Completed at | The time the last step was completed. |
| Repeat count | The number of times this job was rerun. The count starts from 1. |
| Flow ID (deprecated) | **This field is deprecated.** The ID of the recipe. |
| Error | Details about the error that caused the job to fail. This object contains the Error ID, Error type, Error type ID, Error at, Errored app, Errored action, Errored step number, Error message, and Inner message output datapills. |

## Resources

- [RecipeOps overview](/en/connectors/recipeops)
- [RecipeOps actions](/en/connectors/recipeops#actions)
- [RecipeOps triggers](/en/connectors/recipeops#triggers)

---
