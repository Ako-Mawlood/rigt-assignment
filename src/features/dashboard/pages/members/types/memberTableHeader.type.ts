import type {
  ActionHeaderType,
  AvatarHeaderType,
  BirthDateHeaderType,
  EmailHeaderType,
  PhoneNumberHeaderType,
  PositionHeaderType,
  workTypeHeaderType,
} from '@/types/TableHeaders.type'

export type MemberTableHeaderType =
  | AvatarHeaderType
  | EmailHeaderType
  | PhoneNumberHeaderType
  | BirthDateHeaderType
  | workTypeHeaderType
  | PositionHeaderType
  | ActionHeaderType
