<!-- source: https://docs.workato.com/en/connectors/assemblyai | lastmod: 2026-09-29 -->
> Transcribe audio, export subtitles, and run LLM prompts over transcripts, then trigger recipes when jobs finish.

# AssemblyAI

[AssemblyAI](https://www.assemblyai.com) provides speech-to-text, speech understanding, and LLM Gateway APIs for voice AI workflows. The AssemblyAI connector lets you upload audio, transcribe it, export subtitles, and run LLM prompts over the results.

Use the AssemblyAI connector to:

- Upload an audio file and receive an upload URL for transcription.
- Submit a transcript and wait until it completes.
- Create, get, search, or delete transcripts.
- Export SRT or VTT subtitles for a completed transcript.
- Apply an LLM prompt to a transcript, or generate speech understanding, such as translation or speaker identification.
- Trigger a recipe when a transcript completes.

You can also use [custom actions](/en/developing-connectors/custom-actions) to build a custom HTTP request to any AssemblyAI API endpoint. Refer to the [AssemblyAI Documentation](https://www.assemblyai.com/docs/api-reference/overview) for endpoint details.

## Install AssemblyAI from the community library

Complete the following steps to install the AssemblyAI connector from the [community library](https://www.workato.com/browse/connectors):

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

The AssemblyAI connector uses API key authentication.

### AssemblyAI setup for API key authentication

Complete the following steps to create an AssemblyAI API key:

1. Sign in to your [AssemblyAI dashboard](https://www.assemblyai.com/dashboard/).
   
2. Go to **Workspaces > Manage > API Keys**.
   
3. Click **Create New API Key**.
   
4. Enter a descriptive name, for example `Production API`.
   
5. Click **Create**.
   
6. Copy and save the API key for use in Workato.
   
   > **SAVE YOUR KEY**
   > 
   > You can't view the full API key again. If you lose it, you must create a new one.
   

### Connect to AssemblyAI using API key authentication

Complete the following steps to set up a AssemblyAI connection in Workato:

1. Click **Create > Connection** or press C twice.
   
2. Search for `AssemblyAI` and select it as your app.
   
3. Provide a name for your connection in the **Connection name** field.
   
   ![AssemblyAI connection setup details](/assets/assemblyai-connection-setup.C8Z8VB2X.png)_AssemblyAI connection setup_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Enter the **API key**. Refer to [AssemblyAI setup for API key authentication](#assemblyai-setup) for more information.
   
6. Optional. Use the **Region** drop-down menu to select **US** or **EU**. The default is **US**. Select **EU** to route requests through AssemblyAI's EU-hosted API and LLM Gateway endpoints instead of the US endpoints. Refer to the AssemblyAI [EU data residency FAQ](https://www.assemblyai.com/docs/faq/do-you-offer-eu-data-residency) for what this assures from AssemblyAI.
   
7. Click **Connect**.

---
