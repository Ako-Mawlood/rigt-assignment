import type { formatPhone } from '@/utils/phoneFormatter'
import type { workTypeColors } from '@/features/dashboard/pages/members/constants/colors'
import type { dateFormatter } from '@/utils/dateFormatter'
import type ActionsMenu from '@/components/ActionsMenu.vue'

export type AvatarHeaderType = {
  title: 'Name'
  key: 'name'
  componentPreview: 'avatar'
}

export type EmailHeaderType = {
  title: 'Email'
  key: 'email'
  componentPreview: 'text'
  sortable?: boolean
}

export type PhoneNumberHeaderType = {
  title: 'Phone'
  key: 'phoneNumber'
  componentPreview: 'formatted'
  sortable: boolean
  formatFn: typeof formatPhone
}

export type BirthDateHeaderType = {
  title: string
  key: 'dateOfBirth'
  componentPreview: 'formatted'
  formatFn: typeof dateFormatter
}

export type workTypeHeaderType = {
  title: string
  key: 'workType'
  componentPreview: 'chip'
  sortable?: boolean
  colors: typeof workTypeColors
}

export type PositionHeaderType = {
  title: 'Position'
  key: 'position'
  componentPreview: 'chip'
  colors: string
}

export type ActionHeaderType = {
  title: 'Actions'
  key: 'actions'
  componentPreview: 'action'
  sortable?: boolean
  actions: typeof ActionsMenu
}
