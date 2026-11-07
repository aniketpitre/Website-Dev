<!-- source: https://docs.workato.com/en/agentic/agent-studio/security | lastmod: 2026-10-28 -->
> Learn how Agent Studio secures genies and knowledge bases with role-based access control, collaborator and end-user roles, and authentication.

# Agent Studio security

Agent Studio provides role-based access, verified user access, and secure authentication. Refer to the following sections for more information.

### Role-based access control

Agent Studio provides role-based access control (RBAC) for genies and knowledge bases. This enables you to configure [collaborator privileges](/en/privileges) to define specific access permissions for each role. These permissions include access to:

- Manage genies and knowledge bases, such as view, edit, create, and delete
- Test mode
- Conversation history

> **ASSIGN ROLES AT THE PROJECT LEVEL**
> 
> Assign collaborator roles at the project level where possible - a builder who maintains the IT genie should have Project Admin access to the IT genie project, not Workspace Owner access. Least-privilege is the governing principle.

Genie access control has two access levels:

- **Collaborator access**: Governs who can build, edit, and manage genies. This role is designed for builders, genie owners, and administrators in your organization. This is controlled through Workato workspace collaborator roles.
  
- **End-user access**: Governs who can interact with genies through the Chat Interface, including employees and team members who use genies to complete work tasks. This is controlled through Workato user groups and their IdP group mappings.
  

For example, a builder who can edit the IT genie is a collaborator. An employee who can ask the IT genie to reset their password is an end user. These are separate roles with separate configurations.

#### Collaborator roles

Workspace collaborator roles in Agent Studio define what builders can do within the platform. The relevant roles for genie deployments include the following:

- **Project Admin**: Create, edit, and delete all assets within an assigned project, including genies, Skills, Knowledge Bases, App Events, and Data tables. This is the standard role for genie builders who maintain a specific genie or set of genies.
  
- **Operator**: View recipe and job history. This role can't edit recipes or genie configurations and is appropriate for team members who need visibility into genie activity for monitoring or debugging purposes.
  
- **Workspace Owner**: Full access to all assets across all projects. This role should be limited to a small number of platform administrators. This role isn't appropriate for individual genie builders.
  
- **Conversation History access**: A specific permission within collaborator roles that controls whether a collaborator can view the **Conversations** page for a genie. This role should be granted explicitly to builders who need it for debugging and genie owners who need it for QA. This role isn't granted by default to all collaborators.
  
- **Test Mode access**: Controls whether a collaborator can use Test Mode to interact with a genie in an isolated test session. Builders typically require this privilege. This privilege isn't recommended for end users.
  

Refer to collaborator privileges for [genies](/en/privileges#genies) and [Knowledge bases](/en/privileges#knowledge-bases) for more information.

#### End-user groups

End-user groups control which employees can access specific genies. Each group maps to one or more IdP groups from your identity provider and is assigned to one or more genies in the genie end-user access configuration.

End-user groups operate independently from project structure. This means that a user group can be assigned to genies in different projects. The project structure governs where builder assets live. The user group structure governs who can use the genies those builders create. Workato recommends that you don't align user groups with project structure.

Design user groups based on the genie's audience and required access level.

- **Single-tier access**: Most genies serve a single population of users with uniform access that allows all employees to use the IT genie, or the sales team to use the Sales genie. One user group per genie is sufficient for this setup.
  
- **Multi-tier access**: Some genies serve different user populations with different capabilities, such as employees who can ask the HR genie questions and submit requests, and HR managers can additionally review and approve requests. Create separate user groups for each access tier and assign the Skills and Knowledge Bases available to each tier accordingly.
  
- **Cross-genie groups**: Some user populations span multiple genies, such as when the IT support team needs access to both the IT helpdesk genie and the IT incident management genie. Create a single user group for the IT support team and assign it to both genies rather than creating separate groups for each genie.
  

##### User group naming conventions

Name user groups to reflect the user population and level of access. Vague group names are difficult to manage at scale.

**Recommended naming examples**

- IT genie: All Employees
- Sales genie: Account Executives
- HR Assistant: All Employees
- HR Assistant: HR Managers

**Not recommended naming examples**

- Group 1
- Users
- Genie Access

### Verified user access

[Verified user access](/en/agentic/agent-studio/verified-user-access) works through [runtime user connections](/en/features/runtime-user-connections) and allows each end user to authenticate with their own credentials when a skill runs. This ensures that the skill performs actions using the identity and permissions of the individual user. This feature provides the following capabilities:

- **User-scoped connections**: Genies authenticate actions at runtime to create user connections that link to the parent connection, environment, and user ID in Workato Identity.
- **Keyword management in genie chat**: Genies support a `! list_connections` keyword that you can type directly into the chat to manage your runtime user connections.

Managers can approve requests that employees submit in genies where different user groups have access to different skills. This allows verified user access to provide an additional layer of access differentiation.

Skills that use verified user access execute with the individual user's own credentials in the target system. A manager whose Salesforce role allows them to update opportunity fields can execute an Update Opportunity Skill. An employee whose Salesforce role doesn't allow that update can't execute the same skill, even if they can invoke it in the genie.

This means the target system's own permission model becomes an additional layer of access control for skills using verified user access. A user group assignment in Workato controls which genies the user can access. The user's permissions in the connected systems control what those genies can do on their behalf.

### Guardrails

Agent Studio provides [Guardrails](/en/agentic/agent-studio/guardrails/guardrails) for security and safety controls that ensure your genies behave reliably and appropriately. Two system guardrails are active and can't be disabled:

- **Prompt Attack** detection blocks attempts to manipulate genie behavior or extract system configuration. - **Harmful Content** filtering prevents dangerous material from being processed or generated.

Builders can also configure additional protections including:

- PII detection
- Profanity filter
- Custom word filter
- Denied topics

These controls reduce the burden on builders to implement security from scratch while helping organizations meet compliance requirements around data protection and AI governance.

Refer to [Guardrails](/en/agentic/agent-studio/guardrails/guardrails) for more information.

### Secure authentication

Genie actions, responses, and data access depend on either the builder's configured connection or the end user's identity and permissions. This ensures compliance with your security policies.

Agent Studio security provides the following capabilities:

- Integration with your existing authentication systems
- Role-based access control (RBAC)
- Audit trails for all actions taken
- Compliance with your organization's security policies

Refer to [Workato Identity](/en/workato-identity) for more information.

### AI governance policy

Verify that your deployment meets policy requirements before deploying a genie in an organization with a formal AI governance policy:

- **Documentation requirements**: Confirm whether the policy requires a formal description of the AI system, including the intended use, training data, and limitations. This information is typically available for the model providers used by Agent Studio. Check the providers' documentation for the disclosures your policy requires.
  
- **Risk assessment**: Confirm whether the policy requires a risk assessment before deploying an AI system that takes consequential actions. A genie that provisions access, submits financial requests, or takes actions that affect individuals may fall within the scope of a formal risk assessment requirement.
  
- **Disclosure obligations**: Determine whether the policy requires that individuals interacting with an AI system be informed that their interaction is taking place with an AI product. If your Chat Interface does not make the AI nature of the genie obvious, verify whether your policy requires explicit disclosure.
  
- **Performance monitoring**: Determine whether the policy requires ongoing performance monitoring and periodic review of AI system behavior.
  

#### Create a governance record for genies

Every production genie should have a governance record that captures key governance decisions and provides the information needed for audits, compliance reviews, and AI governance policy assessments. Maintain this document and update it when any governance-relevant configuration changes. The governance record allows your organization to demonstrate that the genie deployment was designed with appropriate care and is managed responsibly.

A complete governance record includes the following:

- AI governance policies
- The genie's name, purpose, and intended user population
- The AI model in use and the rationale for selecting it
- The data residency configuration and how it meets applicable requirements
- The conversation retention period and how it satisfies your organization's requirements
- The approved model provider documentation relevant to applicable regulations
- The access control configuration, including who can use the genie, who can manage it, and who can view conversation history
- The risk assessment conducted before deployment
- The disclosure provided to users about AI system interaction
- The monitoring approach and review schedule
- The date of last governance review and who conducted it

### Approved AI model providers

Verify that an AI model provider is approved under your organization's applicable compliance framework before you select a model for a production genie in a regulated industry, for example:

- **Financial services**: Many financial services regulators require that AI systems used in regulated activities use model providers who have executed appropriate data processing agreements and whose infrastructure meets specified security standards. Verify that your selected model provider has executed the relevant agreements with your organization and meets the applicable standards.
  
- **Healthcare**: HIPAA requires vendors who process protected health information execute a Business Associate Agreement (BAA). Verify that the model provider has a BAA with your organization if a genie processes PHI directly or indirectly through Skill outputs or Knowledge Base content. Not all model providers offer BAAs.
  
- **Government and public sector**: Government procurement frameworks in many jurisdictions specify approved vendor lists or security certification requirements for AI systems. Verify that your selected model provider meets the applicable government procurement requirements before deploying genies in government contexts.
  
- **General enterprise**: Most large organizations have a vendor approval process that includes data processing agreements, security reviews, and legal sign-off. Ensure the AI model provider has completed your organization's vendor approval process before you deploy to production.
  

You can use [your own LLM](/en/agentic/agent-studio/create-a-genie#add-an-ai-model) to meet compliance requirements. This enables you to connect to an approved, self-hosted, or separately contracted model through a custom OAuth connection if the approved model providers for your compliance framework don't include the models natively available in Agent Studio.

---
