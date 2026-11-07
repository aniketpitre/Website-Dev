<!-- source: https://docs.workato.com/en/connectors/gitlab/new-updated-pipeline-trigger | lastmod: 2026-07-29 -->
> The New/updated pipeline trigger monitors GitLab and triggers when a pipeline is created or updated.

# GitLab - New/updated pipeline trigger

The **New/updated pipeline** trigger monitors GitLab for a new or updated pipeline.

## Input

| Input field | Description |
| --- | --- |
| Project or Project ID | Select a project from the drop-down menu or enter the ID. |

## Output

| Output field | Description |
| --- | --- |
| ID | The pipeline ID. |
| Internal ID | The internal ID that resets or counts sequentially per project. |
| Project ID | The ID assigned to every repository and project upon creation. |
| SHA | The Secure Hash Algorithm is a 40-character alphanumeric string that acts as an immutable fingerprint for a specific state of your repository files and history. |
| Reference | Values can be a semantic version (`1.0`), a partial version (`latest`), a branch name, or a specific commit SHA. |
| Status | The lifecycle phase of a specific build or process. Options include `pending`, `running`, `success`, `failed`, `canceled`, `skipped`, and `manual`. |
| Source | The origin or the event that caused the pipeline to run. Options include `push`, `merge_request_event`, `trigger`, `pipeline`, `schedule`, and `web`. |
| Created At | A standard timestamp that indicates the exact date and time an object was initially generated. |
| Updated At | A standard timestamp that indicates the exact date and time an object or record was last modified. |
| Web URL | The direct, human-readable HTTPS address to view a specific resource (such as a project, commit, or merge request) in a web browser. |
| Name | The pipeline name. |

---
