import type ActionsMenu from '@/components/ActionsMenu.vue'

type componentPreviewType = 'avatar' | 'formatted' | 'chip' | 'action' | 'text'

export type IDataTableHeader<T> = {
  title: string
  key: string
  value: (item: T) => unknown
  componentPreview: componentPreviewType
  sortable?: boolean
  colors?: string | Record<string, string>
  actions?: typeof ActionsMenu
  formatFn?: (number: string) => string
}
