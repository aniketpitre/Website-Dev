<!-- source: https://docs.workato.com/en/data-orchestration/sync-types | lastmod: 2026-11-06 -->
> Learn the data pipeline sync types in Workato: full sync, incremental sync with CDC, and object re-sync to keep destinations up to date.

# Sync types

Data pipeline recipes use the following sync types:

- **[Full sync](#full-sync)**: Loads historical data when the pipeline starts. Objects that use full sync run it on every scheduled run.
- **[Incremental sync (CDC)](#incremental-sync-cdc)**: Captures records created or updated since the last successful sync, on a schedule.
- **[Object re-sync](#object-re-sync)**: Manually triggers a sync for a specific object outside the regular pipeline schedule.

Each sync type ensures the destination remains accurate, up to date, and aligned with the source application.

## Full sync

The full sync runs when the pipeline starts. It loads historical data from the selected source objects into the destination. Objects that use full sync run a full sync on every scheduled run. An object uses full sync if you set its sync mode to **Full sync**, or if it doesn't support incremental sync, for example because the source doesn't expose a usable cursor or primary key.

The pipeline fetches all records by default when the **When first started, this pipeline should pick up records from** field is blank. You can also set a specific start date to limit the sync window. Sources such as Outreach and Sage Intacct apply this date only to objects that support incremental sync. Refer to your source application's configuration guide for its behavior.

The pipeline replicates the source schema, creates new tables in the destination, and processes each object as a separate run in parallel. Data warehouse destinations also use a stage and temporary tables to load data. For example, the pipeline creates a permanent stage in Snowflake to upload data before it loads the data into destination tables.

The initial full sync assumes the destination is empty.

The pipeline labels each run as a full sync during the initial run because it processes all records. This sync runs automatically when the pipeline starts and doesn't require any manual setup or selection.

### How a full sync works

The full sync extracts all data from the **When first started, this pipeline should pick up records from** timestamp onwards, where the source applies it. The pipeline retrieves all available records from the source if you leave this field blank.

The pipeline creates one run per object and loads data into newly created tables at the destination.

The **Runs** tab displays each object's status as **In Progress** until the pipeline loads all records. Workato doesn't provide an estimated completion time because sync duration depends on data volume. Objects that use incremental sync transition to incremental syncs after the initial load completes.

Full syncs after the initial load merge source records into the existing destination tables, matching records on the object's primary key. The pipeline inserts new records, updates existing records, and, for objects that support delete tracking, sets `_workato_is_deleted` to `true` for records that no longer exist in the source. It doesn't remove these rows, so the row count in the destination table can stay the same after a full sync even when records were deleted in the source. Exclude rows where `_workato_is_deleted` is `true` in queries, reports, and downstream transformations. Refer to [Delete tracking](/en/data-orchestration/data-pipeline-recipe/concepts#delete-tracking) for more information.

Objects without a primary key don't merge. The pipeline overwrites the entire destination table on every full sync for these objects, so rows deleted in the source are removed from the destination with no deleted-row history.

> **FULL SYNC COMPLETION**
> 
> The pipeline doesn't run incremental syncs until the full sync completes.

## Incremental sync (CDC)

The pipeline runs incremental syncs at scheduled intervals after the full sync completes, to track and apply changes from the source system for objects that use incremental sync.

### How an incremental sync works

The pipeline extracts records created or updated since the last successful sync, based on each object's incremental cursor, such as a last-modified timestamp. Sources such as Braintree and Apollo.io also re-read a recent time window on each run to capture changes the cursor doesn't reflect. Deleted records sync only for objects that support [delete tracking](/en/data-orchestration/data-pipeline-recipe/concepts#delete-tracking). The pipeline detects schema changes, such as new fields or updated field sizes, and updates the destination tables before it adds records to the destination. The pipeline processes each object as a separate run and syncs all selected objects in parallel.

The pipeline doesn't reprocess historical data for newly added fields. It captures values only from the time it detects the field. It doesn't start a new incremental sync until the previous one finishes. The pipeline skips the next scheduled run if a sync runs longer than expected.

The **Runs** tab tracks each execution's progress and duration. Refer to [Object runs](/en/data-orchestration/data-pipeline-recipe/monitor#object-runs) for more information on how to monitor syncs in real time.

> **INCREMENTAL SYNC EXECUTION**
> 
> The pipeline skips the next scheduled sync if the current one is still in progress.

## Object re-sync

An object re-sync extracts and loads data for a specific object independently of the regular pipeline schedule. You can trigger this manually from the **Objects** tab.

Use object re-syncs to retry failed runs, reload individual objects, or ensure the destination contains the most recent data for a specific object. You don't need to restart the pipeline.

### How an object re-sync works

The pipeline extracts data for an object from the source and loads it into the destination when you select **Re-sync** for that object. This sync overwrites existing records for that object only. It doesn't affect other objects or change the pipeline schema.

The pipeline doesn't delete or reset any destination tables before an object re-sync. The operation runs immediately and doesn't wait for the next scheduled sync.

> **OBJECT RE-SYNC SCOPE**
> 
> Object re-syncs apply only to the selected object. They don't affect scheduled syncs or change the pipeline's sync configuration.

---
