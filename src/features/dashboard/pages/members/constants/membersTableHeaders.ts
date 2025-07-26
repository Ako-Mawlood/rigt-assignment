import { formatPhone } from '@/utils/phoneFormatter'
import { workTypeColors } from '@/features/dashboard/pages/members/constants/colors'
import { dateFormatter } from '@/utils/dateFormatter'
import ActionsMenu from '@/components/ActionsMenu.vue'
import type { DataTableHeader } from '@/types/TableHeaders.type'
import type { MemberType } from '@/features/dashboard/pages/members/types/member.type'

export const headers: DataTableHeader<MemberType>[] = [
  { title: 'Name', key: 'name', value: (item) => item.name, componentPreview: 'avatar' },

  {
    title: 'Email',
    key: 'email',
    value: (item) => item.email,
    sortable: false,
    componentPreview: 'text',
  },
  {
    title: 'Phone',
    key: 'phoneNumber',
    value: (item) => item.phoneNumber,
    sortable: false,
    componentPreview: 'formatted',
    formatFn: formatPhone,
  },
  {
    title: 'Work Type',
    key: 'workType',
    value: (item) => item.workType,
    sortable: false,
    componentPreview: 'chip',
    colors: workTypeColors,
  },
  {
    title: 'Position',
    key: 'position',
    value: (item) => item.position,
    componentPreview: 'chip',
    colors: 'purple',
  },
  {
    title: 'Birthday',
    key: 'dateOfBirth',
    value: (item) => item.dateOfBirth,
    componentPreview: 'formatted',
    formatFn: dateFormatter,
  },
  {
    title: 'Actions',
    key: 'actions',
    value: (item) => item.id,
    sortable: false,
    componentPreview: 'action',
    actions: ActionsMenu,
  },
]
