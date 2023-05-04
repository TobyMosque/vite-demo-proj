import { inject } from 'vue'

export const apiUrl = 'https://pokeapi.co/api/v2'
export const apiKey = 'api-key'
export function useApi() {
  const api = inject(apiKey)
  if (!api)
    throw new Error('api not injected')

  return api
}
