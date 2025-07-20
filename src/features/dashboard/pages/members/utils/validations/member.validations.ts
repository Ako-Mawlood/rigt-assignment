import z from 'zod'
import { companyPositions } from '@/constants/companyPositionOptions'
import { workTypeValues } from '../../constants/workTypes'

export const memberSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  position: z.enum(companyPositions),
  phoneNumber: z.string(),
  dateOfBirth: z.date().refine((date) => date <= new Date(), {
    message: 'Date of birth must be in the past',
  }),
  workType: z.enum([...workTypeValues] as [string, ...string[]]),
})

export type MemberFormDataType = z.infer<typeof memberSchema>
