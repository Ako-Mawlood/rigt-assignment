import z from 'zod'
import { teamTypeOptions } from '@/features/dashboard/pages/teams/constants/teamTypeOptions'

export const teamSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  type: z.enum(teamTypeOptions),
  description: z.string().optional(),
  imageUrl: z.string().nullish(),
  location: z.string().min(2, 'Location is required'),
  isActive: z.boolean(),
  membersCount: z.coerce.number().positive('Please provide a positive number'),
  timezone: z.string().min(1, 'Timezone is required'),
})

export type TeamFormDataType = z.infer<typeof teamSchema>
