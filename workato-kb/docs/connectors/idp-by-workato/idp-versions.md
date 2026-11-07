<!-- source: https://docs.workato.com/en/connectors/idp-by-workato/idp-versions | lastmod: 2026-08-04 -->
> Overview of IDP by Workato model versions, including available versions, differences between versions, and how to migrate an action to a newer version.

# IDP model versions

IDP by Workato uses versioned models that reflect different generations of the underlying extraction model. You configure the version in the [Process document](/en/connectors/idp-by-workato/process-document-action) or [Classify document](/en/connectors/idp-by-workato/classify-document-action) action.

## Available versions

IDP by Workato sets the version to the latest available model when you add either action. The action uses the selected version until you manually update it.

Use the **IDP version** drop-down menu in the action to set or change the version. The drop-down menu shows only the action's currently selected version and the latest available version. In recipes built before a newer version was released, [refresh the recipe's schema](/en/recipes/editor#refresh-schema) first so the drop-down menu reflects these two versions correctly.

![IDP version](/assets/idp-version.CfWa5MSF.png)_IDP version_

Over the years, IDP by Workato has released several model versions. Older versions become deprecated as newer ones are released. IDP by Workato currently offers the following versions:

| Version | Release | Status |
| --- | --- | --- |
| v4 | June 2026 | Current |
| v3 | January 2026 | Deprecated |
| v2 | July 2025 | Deprecated |
| v1 | August 2024 | Deprecated |

> **VERSIONS DIFFER IN SUPPORTED FORMATS AND LIMITS**
> 
> Supported line items, page counts, and confidence scores vary by version:
> 
> - v1 and v2 support up to 15 line items. v3 and v4 support up to 100 line items.
> - v1, v2, and v3 support PDFs up to 15 pages. v4 supports PDFs up to 50 pages.
> - v3 doesn't return confidence scores. Refer to [Confidence scores and validation](/en/connectors/idp-by-workato#confidence-scores-and-validation) for more information.

## Migrate to a newer version

Deprecated versions remain available only if the action was already configured with that version. Deprecated options are hidden when you update the action to the latest version. At most two versions are visible at any time: the current version and the deprecated version the action was previously set to.

> **TEST BEFORE YOU MIGRATE**
> 
> Add a copy of the action configured with the newer version instead of switching the original directly. Use [Logger by Workato](/en/features/logging-service#logger-by-workato) or a similar method to record and compare the outputs of both actions, which are otherwise configured identically except for the version. Confirm that the newer version produces the results you expect, then delete the copy and update the original action's version.

Complete the following steps to update an action to a newer IDP model version:

1. Open the recipe and select the **Process document** or **Classify document** action.
   
2. [Refresh the recipe's schema](/en/recipes/editor#refresh-schema) so the **IDP version** drop-down shows the latest available version.
   
3. Use the **IDP version** drop-down to select the new version.
   
4. Save and re-run your recipe.

---
