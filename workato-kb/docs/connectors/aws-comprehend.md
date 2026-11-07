<!-- source: https://docs.workato.com/en/connectors/aws-comprehend | lastmod: 2026-06-17 -->
> The AWS Comprehend connector provides text analysis capabilities to extract key phrases, entities, sentiment, and language insights from unstructured text data in Workato.

# AWS Comprehend

AWS Comprehend is a natural language processing (NLP) service that uses machine learning to find insights and relationships in text. The AWS Comprehend connector provides text analysis capabilities to extract key phrases, entities, sentiment, and language insights from unstructured text data in Workato.

You can use the connector to:

- Classify documents using custom classification models
- Extract key phrases and entities from business documents
- Detect personally identifiable information (PII) in text

## Install AWS Comprehend from the community library

Complete the following steps to install the AWS Comprehend connector from the [community library](https://www.workato.com/browse/connectors):

1. Open the recipe editor and search for a connector. Alternatively, you can search for a connector in the [community library](https://www.workato.com/browse/connectors).
   
   ![Search for recipe editor](/assets/search-on-recipe-editor.VrZpf8zl.png)_Search for community connectors in the recipe editor_
   
2. Select the community connector you plan to install.
   
3. Click **Install** to install the connector from the community library.
   
   ![Click install](/assets/install-connector.BXpGZP9K.png)_Click **Install**_
   
4. Select **Release connector**. Alternatively, select **Review code** to review and modify the connector code before releasing it to the workspace.
   
   ![Release connector](/assets/release-and-review.kWToLwmF.png)_Release the connector_
   
5. Summarize any changes you made to the connector, then click **Release** to allow workspace collaborators to use the connector in recipes.
   
   ![The Confirm release dialog](/assets/release.CpEhhA-6.png)_The **Confirm release** dialog_
   

## Connection setup

The AWS Comprehend connector supports the following authentication types:

- [IAM role authentication](#iam-role-auth)
- [Access key authentication](#access-key-auth)

> **IAM ROLE AUTHENTICATION**
> 
> We recommend creating a dedicated integration role for this Workato connection. This helps maintain clear permission boundaries and control what actions Workato can access and perform in the application.
> 
> Refer to the following documentation for more information about IAM role authentication in Workato:
> 
> - [Use IAM role-based authentication for AWS Services](/en/security/data-protection/secrets-management/iam-role-based-authentication-for-aws#supported-connectors)
> - Amazon's [Create an IAM user in your AWS account](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html) documentation

## IAM role authentication

For this authentication method, you must provide the [IAM role ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).

Complete the steps in [Use IAM role-based authentication for AWS Services](/en/security/data-protection/secrets-management/iam-role-based-authentication-for-aws#retrieve-iam-role-arn) to get the required IAM role Amazon Resource Name (ARN).

### Connect to AWS Comprehend using IAM role authentication

Complete the following steps to establish an AWS Comprehend connection in Workato using IAM role authentication:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select `AWS Comprehend` as your connection on the **New connection** page.
   
3. Provide a name for your connection in the **Connection name** field.
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Select **IAM role** in the **Authentication type** drop-down menu.
   
6. Enter your **IAM role ARN**.
   
7. Enter the service region of your AWS Comprehend account in the **Region** field. You can locate this value in your Amazon account URL. For example, if your account URL is `https://eu-west-1.console.s3.amazon.com`, your region is `eu-west-1`.
   
8. Click **Connect**.
   

## Access key authentication

This authentication method requires an access key. Refer to the [Amazon documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) to get the required access key information.

### Connect to AWS Comprehend using access key authentication

Complete the following steps to establish an AWS Comprehend connection in Workato using access key authentication:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select `AWS Comprehend` as your connection on the **New connection** page.
   
3. Provide a name for your connection in the **Connection name** field.
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Select **Access key** in the **Authentication type** drop-down menu.
   
6. Enter your **Access key ID**.
   
7. Enter your **Secret access key**.
   
8. Enter the service region of your AWS Comprehend account in the **Region** field. You can locate this value in your Amazon account URL. For example, if your account URL is `https://eu-west-1.console.s3.amazon.com`, your region is `eu-west-1`.
   
9. Click **Connect**.

---
