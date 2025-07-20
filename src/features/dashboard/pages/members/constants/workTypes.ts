export const workTypes = [
  { text: 'On-site', value: 'On-site' },
  { text: 'Remote', value: 'Remote' },
  { text: 'Hybrid', value: 'Hybrid' },
  { text: 'Flexible', value: 'Flexible' },
]
export const workTypeValues = workTypes.map((item) => item.value)
export type WorkType = (typeof workTypeValues)[number]
