import type { MemberFormDataType } from '@/features/dashboard/pages/members/utils/member.validations'
import { type CompanyPositionsType } from '@/constants/companyPositionOptions'

export type MemberType = {
  id: string
  name: string
  email: string
  phoneNumber: string
  position: CompanyPositionsType
}

export type MemberMutationType = {
  formData: MemberFormDataType
  id?: string
}
