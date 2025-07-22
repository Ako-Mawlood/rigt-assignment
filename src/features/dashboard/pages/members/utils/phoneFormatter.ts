import { parsePhoneNumberFromString } from 'libphonenumber-js'

export function formatPhone(phoneNumber: string) {
  const phone = parsePhoneNumberFromString(phoneNumber)
  if (!phone || !phone.isValid()) return phoneNumber
  return phone.formatNational()
}
