export type TeamType = {
  id: string
  name: string
  type:
    | 'Development'
    | 'Design'
    | 'Marketing'
    | 'Sales'
    | 'Human Resources'
    | 'Customer Support'
    | 'Business Strategy'
  description?: 'string'
  imageUrl?: string
  location: string
  isActive: boolean
  membersCount: number
  timezone: string
}
