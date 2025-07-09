import TheDashboardLayout from '@/features/dashboard/layouts/TheDashboardLayout.vue'
import { teamsRoutes } from '@/features/dashboard/pages/teams/routes/teams.routes'
import { staffsRoutes } from '@/features/dashboard/pages/staffs/staffs.routes'

export const dashboardRoutes = {
  path: '/dashboard',
  component: TheDashboardLayout,
  children: [
    {
      path: '',
      redirect: '/dashboard/teams',
    },
    teamsRoutes,
    staffsRoutes,
  ],
}
