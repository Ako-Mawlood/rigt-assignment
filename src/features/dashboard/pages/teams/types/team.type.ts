import type { TeamFormDataType } from '@/features/dashboard/pages/teams/utils/team.validations'

export type TeamTypeOptions =
  | 'Development'
  | 'Design'
  | 'Marketing'
  | 'Sales'
  | 'Human Resources'
  | 'Customer Support'
  | 'Business Strategy'

export type TeamType = {
  id: string
  name: string
  type: TeamTypeOptions
  description: 'string'
  image: {
    display_name: string
    url: string
    format: string
  }
  location: string
  isActive: boolean
  membersCount: number
  timezone: string
}

export type TeamMutationType = {
  formData: TeamFormDataType
  id?: string
}
