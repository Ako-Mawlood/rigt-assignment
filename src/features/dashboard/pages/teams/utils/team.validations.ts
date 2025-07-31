import z from 'zod'
import { teamTypeOptions } from '@/features/dashboard/pages/teams/constants/teamTypeOptions'

export const teamSchema = z.object({
  name: z.string(),
  type: z.enum(teamTypeOptions),
  description: z.string(),
  image: z.object({ display_name: z.string(), url: z.string(), format: z.string() }).nullish(),
  location: z.string().min(1, 'Location is required'),
  isActive: z.boolean(),
  membersCount: z.coerce.number().positive('Please provide a positive number'),
  timezone: z.string(),
})

export type TeamFormDataType = z.infer<typeof teamSchema>
