import { type CompanyPositionsType } from '@/constants/companyPositionOptions'
import { type WorkType } from './workTypes'

export const workTypeColors: Record<WorkType, string> = {
  'On-site': 'green',
  Remote: 'blue',
  Hybrid: 'teal',
  Flexible: 'amber',
}
