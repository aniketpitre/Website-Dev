<!-- source: https://docs.workato.com/en/connectors/google-forms/new-response-trigger | lastmod: 2025-05-21 -->
> The New response trigger activates when a response is submitted to a Google Form.

# Google Forms - New response trigger

The **New response** trigger activates when a response is submitted to a Google Form.

## Input

| Input field | Description |
| --- | --- |
| Form ID | Provide the unique ID of the form. |

## Output

| Output field | Description |
| --- | --- |
| Response ID | A unique identifier assigned to the response submitted to the Google Form. |
| Create time | The timestamp when the response was created. |
| Last submitted time | The timestamp when the response was last submitted. |
| Respondent email | The email address of the respondent (if email collection is enabled). |
| Answers | The collection of responses provided by the respondent for each question. |
| Question ID | A unique identifier assigned to each question in the form. |
| Grade | The score assigned to a response if the form includes quiz grading. |
| Text answers | Responses given in text format for open-ended questions. |
| File upload answers | Files uploaded by the respondent (if the form includes file upload questions). |
| Total score | The final score achieved by the respondent if the form is set as a quiz with grading enabled. |

---
