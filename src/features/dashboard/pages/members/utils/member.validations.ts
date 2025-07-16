import z from 'zod'
import { companyPositions } from '@/constants/companyPositionOptions'
import { workTypes } from '../constants/workTypes'

export const memberSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, { message: 'Email is required' }).email(),
  position: z.enum(companyPositions),
  phoneNumber: z.string().min(1, 'phone number is required'),
  workType: z.enum(workTypes),
})

export type MemberFormDataType = z.infer<typeof memberSchema>
