import { discard } from '../utils'

export function createRoutes({ store }) {
  discard({ store })
  const routes = [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../pages/IndexPage.vue'),
        },
      ],
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('../pages/NotFoundPage.vue'),
    },
  ]
  return routes
}
