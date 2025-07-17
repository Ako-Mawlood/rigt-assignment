export const workTypes = ['On-site', 'Remote', 'Hybrid', 'Contract', 'Freelance', 'Field'] as const

export type WorkType = (typeof workTypes)[number]
