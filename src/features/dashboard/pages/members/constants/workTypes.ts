export const workTypes = ['On-site', 'Remote', 'Hybrid', 'Flexible'] as const

export type WorkType = (typeof workTypes)[number]
