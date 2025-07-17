import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import SearchField from '@/components/SearchField.vue'
import type { AxiosError } from 'axios'
import axios from '@/plugins/axios'

import { useQuery } from '@tanstack/vue-query'
import type { SearchQueryType } from '@/types/SearchQuery.type'

export function usePaginatedData(url: string, queryKey: string) {
  const route = useRoute()

  const searchRef = ref<InstanceType<typeof SearchField> | null>(null)
  const search = ref(route.query.q || '')
  const itemsPerPage = ref(Number(localStorage.getItem('itemsPerPage')) || 10)
  const totalItems = ref<number>(0)
  const page = ref(Number(route.query.page) || 1)

  const pagesCount = computed(() => Math.ceil(totalItems.value / itemsPerPage.value))

  async function fetchData(page: number, itemsPerPage: number, q: SearchQueryType) {
    try {
      const res = await axios.get(url, {
        params: {
          _page: page,
          _per_page: itemsPerPage,
          name: q,
        },
      })

      totalItems.value = res.data.items

      return res.data.data
    } catch (err) {
      const error = err as AxiosError
      console.error(error.response?.data || 'Unexpected error occurred')
    }
  }

  const query = useQuery({
    queryKey: [queryKey, page.value, search.value],
    queryFn: () => fetchData(page.value, itemsPerPage.value, search.value),
  })

  return { ...query, pagesCount, searchRef, search, itemsPerPage, page }
}
