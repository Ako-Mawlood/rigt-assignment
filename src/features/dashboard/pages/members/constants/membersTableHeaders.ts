import { formatPhone } from '@/utils/phoneFormatter'
import { workTypeColors } from '@/features/dashboard/pages/members/constants/colors'
import { dateFormatter } from '@/utils/dateFormatter'
import ActionsMenu from '@/components/ActionsMenu.vue'
import { type MemberTableHeaderType } from '@/features/dashboard/pages/members/types/memberTableHeader.type'

export const headers: MemberTableHeaderType[] = [
  { title: 'Name', key: 'name', componentPreview: 'avatar' },
  { title: 'Email', key: 'email', sortable: false, componentPreview: 'text' },
  {
    title: 'Phone',
    key: 'phoneNumber',
    sortable: false,
    componentPreview: 'formatted',
    formatFn: formatPhone,
  },
  {
    title: 'Work Type',
    key: 'workType',
    sortable: false,
    componentPreview: 'chip',
    colors: workTypeColors,
  },
  {
    title: 'Position',
    key: 'position',
    componentPreview: 'chip',
    colors: 'purple',
  },
  { title: 'Birthday', key: 'dateOfBirth', componentPreview: 'formatted', formatFn: dateFormatter },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
    componentPreview: 'action',
    actions: ActionsMenu,
  },
]
