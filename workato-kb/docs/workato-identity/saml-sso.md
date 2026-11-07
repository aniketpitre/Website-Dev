<!-- source: https://docs.workato.com/en/workato-identity/saml-sso | lastmod: 2026-10-29 -->
> Set up SAML-based SSO in Workato Identity to centralize authentication, reduce password risk, and give users seamless access across Workato features.

# Workato Identity SAML-based SSO

SAML-based single sign-on (SSO) authentication enhances security when accessing Workato features and improves user experience.

SAML-based SSO enables you to add an identity provider (IdP) for authentication management. This adds robust security measures and reduces the risk of password-related breaches. Your organization can enforce SAML-based authentication to comply with internal security policies and regulatory requirements to ensure that only authorized users access sensitive data.

SAML-based SSO also streamlines the user experience by allowing users to sign in once and access multiple Workato features without separate logins. Additionally, it allows centralized management of user identities and access controls through your IdP to apply access policies consistently.

## SAML-based SSO key features

Workato Identity supports SAML-based SSO to provide the following key features:

- Just-in-Time (JIT) Provisioning
  
- You can enable [JIT provisioning](/en/workato-identity/jit-provisioning) to automatically create user accounts when they first sign in through SSO. This eliminates the need for administrators to manually create accounts and keeps user information current.
  
- Customizable attributes
  
- You can configure both your [Identity Provider (IdP)](/en/workato-identity/identity-provider-user-access#configure-your-identity-provider) and Service Provider (SP) to [sync user group](/en/workato-identity/user-group-syncing) information using SAML attributes, such as group memberships.
  
- Selective enforcement
  
- Your organization can choose to enforce SAML-based authentication for all users or [add users manually](/en/workato-identity/add-end-user-manually). This option supports compliance requirements while allowing flexibility for development and testing.
  

## SAML-based SSO workflow

Your IdP and Workato Identity exchange SAML metadata to enable SAML-based SSO authentication. You must set up a SAML application in your IdP with specific values, such as the single sign-on URL and metadata URL. You can also configure [user group syncing](/en/workato-identity/user-group-syncing#enable-user-group-syncing).

SSO configuration can vary based on your specific IdP. Refer to the Enforce SAML-based SSO authentication for Okta guide to learn how to enable this capability for Okta. This guide includes instructions for enabling user groups sync, which allows you to sync group assignments between the Workflow apps portal and your IdP.

```mermaid

flowchart TD
    A(User attempts to <br/> access Workato) --> B(Workato generates <br/> SAML authentication request)
    B --> C(User is redirected <br/> to IdP login page)
    C --> D{{Is the user <br/> authenticated <br/> with the IdP?}}
    D -->|No| E[User enters <br/> credentials in IdP]
    E --> F[IdP validates <br/> credentials]
    F --> D
    D -->|Yes| G(IdP generates <br/> signed SAML assertion)
    G --> H(SAML assertion sent <br/> to Workato through a <br/> browser redirect)
    H --> I(Workato validates <br/> assertion using <br/> X.509 certificate)
    I --> J{{Does the user <br/> exist in Workato?}}
    J -->|No| K[New user account <br/> created automatically]
    K --> L[User profile populated <br/> from SAML attributes]
    L --> M[User granted access <br/> to environments]
    J -->|Yes| N[Existing permissions <br/> and group memberships <br/> preserved]
    N --> O(User authenticated <br/> and session started)
    M --> O

classDef default fill:#67eadd,stroke:#67eadd,stroke-width:2px,color:#000;
classDef WorkatoBlue fill:#5159f6,stroke:#5159f6,stroke-width:2px,color:#fff;
classDef SubgraphDash fill:#e1fffc,stroke:#f66,stroke-width:2px,color:#000,stroke-dasharray: 5 5
classDef Success fill:#67eadd,stroke:#2ecc71,stroke-width:2px,color:#000;

class E,K,L,M,F SubgraphDash
class D,J WorkatoBlue
```

## Configure SAML-based authentication

Complete the following steps to configure SAML-based authentication in Workato Identity:

> **NOT FOR WORKFLOW APPS SAML-BASED SSO**
> 
> This documentation is specific to Workato Identity. Refer to [SAML-based single sign-on authentication](/en/workflow-apps/saml) to configure SAML authentication for [Workflow apps](/en/workflow-apps).

1. Sign in to your Workato account.
   
2. Go to **Workspace admin**. The **Access control** page displays.
   
3. Go to the **Solutions access** section and click **SAML identity providers**.
   
4. Click **\+ Set up new provider**.
   
5. Provide a name for your IdP in the **Identity provider (IdP) name** field. For example: `Okta Prod`.
   
   ![Configure SAML authentication](/assets/configure-saml-settings.BK2sVLt7.png)_Configure SAML authentication_
   
6. Use the **Enforce SAML authentication for** drop-down menu to select who is required to use SAML-based authentication.
   
7. Copy the **Specify Single sign-on URL** and **Service provider (SP) entity ID** values.
   
8. Go to the **Do you have your identity provider metadata URL?** section and select the option that applies to you.
   
   **Yes: You have your identity provider metadata URL**
   
   1. Select **Yes**.
      
      ![Yes: you have your IdP metadata URL](/assets/yes-metadata-url.CWtgUFb_.png)_Provide your metadata URL_
      
   2. Paste your metadata URL into the **Metadata URL** field. Workato uses this URL to automatically import your SAML configuration.
      
      You can find this URL in your IdP's SAML setup:
      
      - **Okta**: Go to your app's **Sign On** tab and scroll to **Metadata URL**. It typically follows this format: `https://{your-okta-domain}/app/{app-name}/{app-id}/sso/saml/metadata`
      - **Microsoft Entra ID**: Go to your app's **Single sign-on** settings and scroll to **SAML Certificates**. The URL is labeled **App Federation Metadata URL** and typically follows this format: `https://login.microsoftonline.com/{tenant-id}/federationmetadata/2007-06/federationmetadata.xml?appid={app-id}`
      - **Google Workspace**: Go to your app's **SSO Configuration** and scroll to **IDP metadata**. Click **Download metadata** to get the XML file, or use the URL directly if your Google admin has published it.
   
   **No: You don't have your identity provider metadata URL**
   
   1. Select **No**.
      
      ![No: you don't have your IdP metadata URL](/assets/no-metadata-url.DBQU-Va3.png)_Provide your IdP information_
      
   2. Paste your IdP SSO URL into the **Identity provider single sign-on URL** field.
      
   3. Provide your IdP unique identifier in the **Identity provider issuer** field. This is the Entity ID your IdP uses to identify itself and must match exactly what your IdP is configured to send in SAML assertions.
      
      You can find this value in your IdP's SAML setup instructions:
      
      - **Okta**: Go to your app's **Sign On** tab and click **View SAML setup instructions**. The value is listed as **Identity Provider Issuer** and typically uses the following format: `http://www.okta.com/examplekey123`
      - **Microsoft Entra ID (Azure AD)**: Go to your app's **Single sign-on** settings. The value is listed as **Microsoft Entra Identifier** and typically uses the following format: `https://sts.windows.net/{tenant-id}/`
      - **Google Workspace**: Go to **Apps > Web and mobile apps**, select your app, and open **SSO Configuration**. The value is listed as **Entity ID** and typically uses the following format: `https://accounts.google.com/o/saml2?idpid={idp-id}`
   4. Paste your IdP X509 certificate, including the `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----` lines in the **X.509 certificate** field. This is the public certificate Workato uses to validate that SAML responses genuinely came from your IdP.
      
      You can find your X509 certificate in your IdP app:
      
      - **Google Workspace**: Go to **Apps > Web and mobile apps**, select your app, and open **SSO Configuration**. Go to the **SSO certificate** section and click **Download certificate**. Open the downloaded `.pem` file in your text editor to copy the certificate.
      - **Microsoft Entra ID**: Go to your Microsoft Entra ID app's **Single sign-on** section. Go to the **SAML Certificates** section and download the **Certificate (Base64)** file. Open the downloaded `.cer` or `.pem` file in your text editor to copy the certificate.
      - **Okta**: Go to your Okta app's **Sign On** tab and scroll to **SAML Signing Certificates**. Click **Actions** next to the active certificate and click **Download certificate**. Open the downloaded `.cer` or `.pem` file in your text editor to copy the certificate.
      - **OneLogin**: Go to the **SSO** section and click **More Actions**. Right-click **SAML Metadata** and select **Copy link address**.
   
9. Click **Set up**.
   

## Add SAML-based authentication

You must [configure SAML-based authentication](#configure-saml-based-authentication) before you can add SAML authentication to end-user groups.

Complete the following steps to add SAML-based authentication to end-user groups:

1. Go to **Workspace admin**. The **Access control** page displays.
   
2. Go to **Authentication & Groups** in the sidebar.
   
3. Select the environment you plan to configure. The environment **End-user group** page displays by default.
   
   > **ENVIRONMENT AVAILABILITY**
   > 
   > Workspaces without [Environments](/en/features/environments) provisioned only have one environment available.
   
4. Select the **Authentication** tab.
   
5. Ensure that the **SAML-based SSO authentication** toggle is enabled.
   
6. Use the **SAML identity provider** drop-down menu to select the SAML identity provider you plan to use.
   
7. Click **Save**.
   

## Configure IdP user access

You must configure your IdP to send the required user attributes in its SAML assertions after you complete the SAML-based SSO configuration. Workato uses these attributes to populate user profiles and manage group memberships.

> **DIRECT SIGN-IN FROM IDP UNSUPPORTED**
> 
> You can't sign in to Workato directly from your IdP. Authentication is only supported when initiated through a conversation in your connected LLM.

Add the following attributes to your IdP's SAML attribute statements:

| Name | Value | Description |
| --- | --- | --- |
| `workato_end_user_name` | `user.displayName` | Maps the user's display name from your IdP to their Workato profile. |
| `workato_end_user_groups` | `appuser.workato_ end_user_groups` | Maps the user's group memberships from your IdP to Workato. Required only if you plan to enable [user group syncing](/en/workato-identity/user-group-syncing#enable-user-group-syncing). |

Refer to the following IdP guides for a step-by-step guide on how to configure SAML and SAML attribute statements:

- [Google Workspace](/en/workato-identity/google-workspace-saml-configuration)
- [Microsoft Entra ID](/en/workato-identity/microsoft-entra-id-saml-configuration)
- [Okta SAML configuration](/en/workato-identity/identity-provider-user-access)
- [OneLogin](/en/workato-identity/onelogin-saml-configuration)

## Troubleshooting

Use this section to troubleshoot errors you may encounter.

### Microsoft Entra ID

Refer to the following Microsoft Entra ID sections to troubleshoot issues:

#### Group claims

Microsoft Entra ID requires you to configure group claims in the SAML assertion. Open your Microsoft Entra ID enterprise application and enable the groups claim. Then select whether to include all groups the user belongs to or only the groups assigned to the application. Workato recommends using only assigned groups for genie deployments. This limits the assertion size and reduces the risk of mapping conflicts.

#### Group object IDs and display names

Microsoft Entra ID sends group identifiers as either object IDs (GUIDs) or display names. Workato Identity maps groups by name, not ID. You must configure Microsoft Entra ID to send group display names rather than object IDs to ensure the mapping works correctly.

#### Nest group membership

Microsoft Entra ID doesn't flatten nested group membership in SAML assertions by default. A user group structure with nested groups, such as a parent group with child groups, may not have child groups memberships included in the assertion. Flatten the relevant group memberships or configure Microsoft Entra ID to include transitive group memberships if your structure requires it.

---
