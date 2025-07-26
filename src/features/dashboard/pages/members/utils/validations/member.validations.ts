import z from 'zod'
import { companyPositions } from '@/constants/companyPositionOptions'
import { workTypes } from '@/features/dashboard/pages/members/constants/workTypes'

export const memberSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  position: z.enum(companyPositions),
  phoneNumber: z.string(),
  dateOfBirth: z.date(),
  workType: z.enum(workTypes),
})

export type MemberFormDataType = z.infer<typeof memberSchema>
