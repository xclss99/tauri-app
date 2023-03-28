import type { RouteRecordRaw } from 'vue-router'

const mainRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue')
  }
]

const notFoundRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  component: () => import('@/views/404/NotFound.vue')
}

const routes = [...mainRoutes, notFoundRoute]

export { mainRoutes }
export default routes
