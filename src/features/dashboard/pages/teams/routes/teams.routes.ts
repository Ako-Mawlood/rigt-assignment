import TheTeamsPage from '@/features/dashboard/pages/teams/TheTeamsPage.vue'
import TeamDetailModal from '@/features/dashboard/pages/teams/components/TeamDetailModal.vue'
export const teamsRoutes = {
  path: '/dashboard/teams',
  component: TheTeamsPage,
  children: [
    {
      path: 'detail/:id',
      component: TeamDetailModal,
    },
  ],
  meta: {
    title: 'Rigt | Teams',
  },
}
