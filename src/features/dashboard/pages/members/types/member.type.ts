import type { TeamType } from '@/features/dashboard/pages/teams/types/team.type'

export type MemberType = {
  id: string
  name: string
  email: string
  phoneNumber: string
  team: TeamType
  status: 'active' | 'inactive'
}
