import TheMembersPage from '@/features/dashboard/pages/members/views/TheMembersPage.vue'
import TheAddMemberModal from '@/features/dashboard/pages/members/components/TheAddMemberModal.vue'
import TheEditMemberModal from '@/features/dashboard/pages/members/components/TheEditMemberModal.vue'
import TheDeleteMemberModal from '@/features/dashboard/pages/members/components/TheDeleteMemberModal.vue'

export const membersRoutes = {
  path: '/dashboard/members',
  component: TheMembersPage,
  children: [
    {
      path: 'add',
      component: TheAddMemberModal,
    },
    {
      path: 'edit/:id',
      component: TheEditMemberModal,
    },
    {
      path: 'delete/:id',
      component: TheDeleteMemberModal,
    },
  ],
  meta: {
    title: 'Rigt | Members',
  },
}
