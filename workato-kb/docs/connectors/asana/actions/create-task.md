<!-- source: https://docs.workato.com/en/connectors/asana/actions/create-task | lastmod: 2026-05-25 -->
> The Create task action creates a task in Asana.

# Asana - Create task action

The **Create task** action creates a task in Asana. Tasks must be created in an Asana workspace.

You can use the [List workspaces action](/en/connectors/asana/actions/list-workspaces) to view all available workspaces for the authorized user.

## Input

| Input field | Description |
| --- | --- |
| Sample workspace | Select the workspace or project. Custom fields defined in your Asana workspace or project are listed automatically after you select the workspace or project URL. |
| Workspace ID | Enter the workspace ID. You can find the Workspace ID in the admin console URL, for example `https://app.asana.com/admin/{workspace_gid}`. |
| Projects | Expand this section to configure the projects this task is associated with. |
| Projects source list (Projects) | Input a list datapill that represents the projects that this task belongs to. |
| Project ID (Projects) | Provide the unique identifier of the project. |
| Assignee status | Select the status of the people assigned. Accepted values are `inbox`, `later`, `today`, or `upcoming`. |
| Completed | Specify whether the task is completed. |
| Due on | Enter the date when the task is due. |
| Due at | Enter the date and time when the task is due. |
| Heart this | Specify whether to add a heart to this task. |
| Task name | Enter the name of the task. |
| Description | Enter the description of the task. |
| Assignee | Expand this section to configure the people that are assigned to this task. |
| Assignee ID (Assignee) | Enter the unique identifier of the assignee. Use this field if the **Assignee status** is `today` or `inbox`. |
| Followers | Expand this section to configure the people that follow this task. |
| Followers source list (Followers) | Input a list datapill that represents the people that follow this task |
| Follower ID (Followers) | Provide the unique identifier of the follower. |
| Tags | Expand this section to configure the tags attached to this task. |
| Tags source list (Tags) | Input a list datapill that represents the tags attached to this task. |
| Tag ID (Tags) | Provide the unique identifier of the tag. |
| Start on | Enter a start date. If you provide this value, specify either the **Due on** or **Due at** field. |
| Like this | Specify whether to add a like to this task. Select `Yes` to like it through the authorized user or `No` to not. The default value is `No`. |

## Output

| Output field | Description |
| --- | --- |
| Task ID | The task ID. |
| Assignee | The people that are assigned to this task. |
| Assignee ID (Assignee) | The unique identifier of the assignee. |
| Name (Assignee) | The name of the assignee. |
| Assignee status | The status of the people assigned. |
| Completed | Indicates whether the task is completed. |
| Completed at | The date and time when the task was completed. |
| Created at | The date and time when this record was created. |
| Due on | The date when the task is due. |
| Due at | The date and time when the task is due. |
| Followers | Array of people that follow this task. |
| Follower ID (Followers) | The unique identifier of each follower. |
| Name (Followers) | The name of each follower. |
| Number of hearts | The number of hearts given to the task. |
| Hearts | Array of people who have added heart to the task. |
| ID (Hearts) | The unique identifier of each heart. |
| People (Hearts) | The user who added the heart. |
| People ID (People) | The unique identifier of the user. |
| Name (People) | The name of the user. |
| Start on | The start date of this task. |
| Like this | Shows whether the authorized user has liked this task. |
| Number of likes | The number of likes added to the task. |
| Likes | Array of people that have liked this task. |
| ID (Likes) | The unique identifier of each like. |
| People (Likes) | The user who added the like. |
| People ID (People) | The unique identifier of the user. |
| Name (People) | The name of the user. |
| Resource type (People) | The resource type of the user. |
| Modified at | The date and time when the task was last modified. |
| Task name | The name of the task. |
| Description | The description of the task. |
| Projects | Array of projects that this task belongs to. |
| Project ID (Projects) | The unique identifier of each project. |
| Name (Projects) | The name of each project. |
| Parent Task | The parent task for this task. |
| Task ID (Parent Task) | The unique identifier of the parent task. |
| Name (Parent Task) | The name of the parent task. |
| Workspace | The workspace that this task belongs to. |
| Workspace ID (Workspace) | The unique identifier of the workspace. |
| Name (Workspace) | The name of the workspace. |
| Memberships | Array of membership details about this task. |
| Project (Memberships) | The project associated with this membership. |
| Project ID (Project) | The unique identifier of the project. |
| Name (Project) | The name of the project. |
| Section (Memberships) | The section associated with this membership. |
| Section ID (Section) | The unique identifier of the section. |
| Name (Section) | The name of the section. |
| Tags | Array of tags attached to this task. |
| Tag ID (Tags) | The unique identifier of each tag. |
| Name (Tags) | The name of each tag. |
| Created by | The user that created this task. |
| ID (Created by) | The unique identifier of the creator. |
| Name (Created by) | The name of the creator. |
| Resource type (Created by) | The resource type of the creator. |
| Custom fields | Custom fields associated with the workspace or project. |

---
