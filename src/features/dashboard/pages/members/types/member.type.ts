import type { MemberFormDataType } from '@/features/dashboard/pages/members/utils/validations/member.validations'
import type { CompanyPositionsType } from '@/constants/companyPositionOptions'
import type { WorkType } from '@/features/dashboard/pages/members/constants/workTypes'

export type MemberType = {
  id: string
  name: string
  email: string
  phoneNumber: string
  dateOfBirth: string
  workType: WorkType
  position: CompanyPositionsType
}

export type MemberMutationType = {
  formData: MemberFormDataType
  id?: string
}
