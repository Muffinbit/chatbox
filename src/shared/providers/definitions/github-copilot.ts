import { ModelProviderEnum, ModelProviderType } from '../../types'
import { defineProvider } from '../registry'

export const githubCopilotProvider = defineProvider({
  id: ModelProviderEnum.GitHubCopilot,
  name: 'GitHub Copilot',
  type: ModelProviderType.OpenAI,
  description: 'github_copilot',
  modelsDevProviderId: 'github-copilot',
  curatedModelIds: [],
  credentialDefinitions: [],
  transformUserCredentials: (credentials) => credentials,
})