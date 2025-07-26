import TheDashboardLayout from '@/layouts/TheDashboardLayout.vue'
import { teamsRoutes } from '@/features/dashboard/pages/teams/routes/teams.routes'
import { membersRoutes } from '@/features/dashboard/pages/members/routes/members.routes'

export const dashboardRoutes = {
  path: '/dashboard',
  component: TheDashboardLayout,
  children: [
    {
      path: '',
      redirect: '/dashboard/teams',
    },
    teamsRoutes,
    membersRoutes,
  ],
}
