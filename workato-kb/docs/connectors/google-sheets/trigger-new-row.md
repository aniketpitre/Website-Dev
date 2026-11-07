<!-- source: https://docs.workato.com/en/connectors/google-sheets/trigger-new-row | lastmod: 2026-06-29 -->
> The New row in sheet in My Drive (real-time) trigger in the Google Sheets connector picks up new rows added at the bottom of a sheet in real time.

# Google Sheets - New row in sheet in My Drive trigger (real-time)

This trigger detects new rows added at the bottom of your selected sheet. When you start your recipe for the first time, this trigger picks up all existing rows in the sheet, excluding the header row. Subsequently, the trigger picks up new rows added to the end of the sheet in real time.

Note that rows added in the middle of the sheet are not detected. Don't delete any row from the sheet when this trigger is active, as it can disrupt tracking.

> **LIMITATIONS**
> 
> Real-time triggers only work with OAuth 2.0 connections, not service accounts.
> 
> This trigger works exclusively with My Drive. Use the [New row in sheet in Team Drive trigger](/en/connectors/google-sheets/trigger-new-row-team-drive) to monitor Team Drive.

## Input

| Input field | Description |
| --- | --- |
| Spreadsheet | Select the spreadsheet to monitor for new rows. |
| Sheet | Choose the sheet to monitor for new rows. The sheet must have at least one header row and one data row. |
| Add column names manually? | Indicate whether to add column names manually. Defaults to `No`. |

## Output

| Output field | Description |
| --- | --- |
| Spreadsheet ID | The unique identifier for the spreadsheet. |
| Spreadsheet name | The name of the spreadsheet. |
| Sheet name | The sheet name. |
| Row number | The row number. |

## How to use this trigger

Complete the following steps to set up and use the **New row in sheet in My Drive (real-time)** trigger:

### Set up the Google Sheet

To retrieve sheet data, the sheet must include at least one header row and one data row:

![Google sheet sample](/assets/sample-google-sheet.Dkg-QFd-.jpg)_Sample Google Sheet with one header row and one data row_

### Configure the trigger

Complete the following steps to configure the trigger:

1. Select the **New row in sheet in My Drive (real-time)** trigger.
   
   ![Set up application](/assets/application-and-trigger.B8-au229.png)_Set up the application and the trigger_
   
2. Select a spreadsheet in the **Spreadsheet** drop-down menu to dynamically generate the list of sheets in your spreadsheet.
   
   ![Blank Trigger](/assets/trigger-setup-blank.CEcrP8xo.png)_Select the spreadsheet to monitor for new rows_
   
3. Select the specific sheet to monitor for new rows in the **Sheet** field.
   
   ![Filled trigger](/assets/trigger-setup-filled.CHtKTjPH.png)_Once the spreadsheet has been selected, an additional picklist is generated asking for the specific sheet to monitor_
   
4. Click **`+` Add step > Action in app**.
   
5. Search for and select `Scheduler by Workato`.
   
6. Select the **Get current time** action.
   
   ![Scheduler action](/assets/scheduler-action.D_dYn9Em.png)_Scheduler action_
   

### Test the trigger

After the trigger is configured, you can finalize and run the recipe.

This test aims to verify that the trigger detects new rows in the sheet. The action is not critical to this test, so you can use the **Get current time** Scheduler action.

Click **Test recipe** to test your recipe. Your recipe should resemble the following screenshot:

![Google spreadsheet sample](/assets/configured-recipe.C3BVrS9W.png)_Configured recipe with scheduler action for testing_

While the recipe is running, any new rows added at the bottom of the sheet are detected almost immediately. If the recipe is stopped and later restarted, it resumes picking up new rows from where it left off. Consequently, any new rows added when the recipe was stopped are also detected upon restarting.

---
