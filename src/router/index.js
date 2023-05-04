import {
  createRouter as createRouterBase,
  createWebHashHistory,
} from 'vue-router'
import { discard } from '../utils'
import { createRoutes } from './routes'

export function createRouter({ app, store }) {
  discard({ app })
  const router = createRouterBase({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes: createRoutes({ store }),
    history: createWebHashHistory('/'),
  })

  return router
}
