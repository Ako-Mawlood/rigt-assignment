import TheTeamsPage from '@/features/dashboard/pages/teams/views/TheTeamsPage.vue'
import TeamDetailModal from '@/features/dashboard/pages/teams/components/TheTeamDetailModal.vue'
import EditTeamModal from '@/features/dashboard/pages/teams/components/TheEditTeamModal.vue'
import DeleteTeamModal from '@/features/dashboard/pages/teams/components/TheDeleteTeamModal.vue'
import TheAddTeamModal from '@/features/dashboard/pages/teams/components/TheAddTeamModal.vue'

export const teamsRoutes = {
  path: '/dashboard/teams',
  component: TheTeamsPage,
  children: [
    {
      path: 'detail/:id',
      component: TeamDetailModal,
    },
    {
      path: 'add',
      component: TheAddTeamModal,
    },
    {
      path: 'edit/:id',
      component: EditTeamModal,
    },
    {
      path: 'delete/:id',
      component: DeleteTeamModal,
    },
  ],
  meta: {
    title: 'Rigt | Teams',
  },
}
