import { createPinia } from 'pinia'
import { discard } from '../utils'

export function createStore({ app }) {
  discard({ app })
  const pinia = createPinia()

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia
}
