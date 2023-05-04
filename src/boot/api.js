import axios from 'axios'
import { apiKey, apiUrl } from '../composables/api'

export function bootApi({ app, store }) {
  const api = axios.create({ baseURL: apiUrl })

  api.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  app.provide(apiKey, api)
  store.use(() => ({ api }))
}
