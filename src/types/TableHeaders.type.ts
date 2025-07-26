import type ActionsMenu from '@/components/ActionsMenu.vue'

export type DataTableHeader<T> = {
  title: string
  key: string
  value: (item: T) => unknown
  componentPreview: 'avatar' | 'formatted' | 'chip' | 'action' | 'text'
  sortable?: boolean
  colors?: string | Record<string, string>
  actions?: typeof ActionsMenu
  formatFn?: (number: string) => string
}
