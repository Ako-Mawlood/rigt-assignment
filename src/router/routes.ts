import { createRouter, createWebHistory } from 'vue-router'
import { dashboardRoutes } from '@/features/dashboard/routes/dashboard.routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirect: 'dashboard/teams',
    },
    dashboardRoutes,
  ],
})

router.beforeEach((to, _form, next) => {
  document.title = to.meta.title as string
  next()
})

export default router
