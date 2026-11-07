<!-- source: https://docs.workato.com/en/developing-connectors/sdk/guides/import-via-oas | lastmod: 2026-10-28 -->
> Generate a Workato custom connector from an OpenAPI specification with authentication and actions built for you from the OAS document.

# Connector Generation from OAS

You can expedite your connector building journey by starting with the OAS. The OAS generation tool enables you to create a connector directly from an OAS, with authentication and actions already built for you.

## Using the OAS generation tool

You can only use the OAS generation tool when creating a new custom connector.

1. Select the option to create a connector by providing an OAS.
   
2. Provide your OAS through direct file upload, or provide a public URL to the OAS specification. After specifying your OAS, you can adjust the name of your connector, and supply a logo for it. These are important, as they help users identify the application to which you are connecting.
   
3. Select the authentication type from a list of possible authentication methods, and the actions you want inside your generated connector.
   

After selecting the actions and continuing, Workato parses the request and returns the generated connector.

> **TIP**
> 
> A connector with a smaller and specific subset of related actions may provide a better user experience than a more general connector that supports all possible actions. Workato recommends that you select only the actions your end users require. You can add more actions at a later time.

## How does Workato generate connectors from OAS documents?

There are 4 main features of any connector in Workato's SDK, and they map to different parts of any OAS:

<dl><dt>Servers</dt><dd>Fields within `connection` and `base_uri`</dd><dt>`security_schemes`</dt><dd>Fields and Authentication logic within `connection`</dd><dt>Path items</dt><dd>Individual actions, object_definitions for each action's input and output and methods</dd><dt>Components</dt><dd>`Object_definitions` that are then referenced by relevant actions</dd></dl>

## How does the generated connector work?

Each generated action originates from the details of the OAS document. Inside each action, you can see that `input_fields` reference `object_definitions` that contain all fields required by the API endpoint. This includes inputs for values in headers, cookies, query parameters, and the request payload. It also includes `output_fields` that reference an `object_definition` that contains all expected response payload attributes for a successful call.

Within each `object_definition`, you may see that the Workato schema may have additional attributes that are not familiar to you. These are special attributes that are preserved from your OAS; they are important markers for your connector to understand how to formulate a proper API request.

## Testing your generated connector

After your connector generates, you should test it before using it in recipes. Use [Workato's SDK Test code tab](/en/developing-connectors/sdk/guides/debugging) under the **Source code** tab for your connector. Ensure that the generated code for your connection works as expected, and that actions work as expected.

When you are ready to start using the latest version of the connector in recipes, you must first release it. Click "Release latest version" in the top right corner. After, all users in your workspace can start using this connector in their recipes.

![Release connector](/assets/oas-release-version.CxMHMZy_.png)

## What's next?

There are many more steps to improving your connector. Learn more about [extending your connector](/en/developing-connectors/sdk/guides/import-via-oas/extending-oas-connector).

## Troubleshooting/FAQ

1\. My OAS failed to parse or the generated code does not work as expected, what should I do?

There could be many reasons that an OAS failed to be parsed into a connector. Please ensure that your OAS document is valid and of version 3.0. Please reach out to our support team and provide your OAS in the support ticket. Our team will troubleshoot and analyze what could be the issue.

2\. Why are triggers not included in the parsed connector?

Triggers often have additional embedded logic within them such as pagination logic and cursor management. As of the initial release, triggers are not automatically generated and will need to be implemented manually. You may, however, reuse the `object_definitions` and `methods` generated to build your desired triggers.

3\. Will OAS 3.1 and Swagger 2.0 be supported?

Support for other versions of OpenAPI documents are being considered. Please reach out to your CSM for the latest timelines for support.

4\. The code for my generated connector is not indented properly. What can i do about it?

When focusing your cursor in the code editor, you can use `ctrl+a` (Windows) or `cmd+a` (Mac) to select all your connector code followed by `shift+tab` to auto indent your code.

5\. What data formats does the generated connector support?

The OAS generation tool only supports JSON APIs at the moment.

---
