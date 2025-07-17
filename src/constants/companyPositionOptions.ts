export const companyPositions = [
  'Chief Executive Officer',
  'Operations Manager',
  'Finance Manager',
  'Human Resources Manager',
  'Project Manager',
  'Software Developer',
  'Marketing Specialist',
  'Sales Representative',
  'Customer Support Specialist',
  'Product Designer',
] as const

export type CompanyPositionsType = (typeof companyPositions)[number]
