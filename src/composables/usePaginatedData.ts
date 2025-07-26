import { useRoute, useRouter } from 'vue-router'
import { computed, ref, reactive } from 'vue'
import SearchField from '@/components/SearchField.vue'
import type { AxiosError } from 'axios'
import axios from '@/plugins/axios'
import { useQuery } from '@tanstack/vue-query'
import type { SearchQueryType } from '@/types/SearchQuery.type'

export function usePaginatedData<T>(url: string, queryKey: string) {
  const route = useRoute()
  const search = ref(route.query.q || '')
  const searchRef = ref<InstanceType<typeof SearchField> | null>(null)
  const page = ref(Number(route.query.page) || 1)
  const itemsPerPage = ref(Number(localStorage.getItem('itemsPerPage')) || 10)
  const totalItems = ref<number>(0)
  const filters = reactive<Record<string, string>>({})

  const router = useRouter()
  const pagesCount = computed(() => Math.ceil(totalItems.value / itemsPerPage.value))

  async function fetchData(page: number, itemsPerPage: number, q: SearchQueryType) {
    const params = {
      _page: page,
      _per_page: itemsPerPage,
      name: q,
      ...route.query,
      ...filters,
    }

    try {
      const res = await axios.get(url, { params })
      totalItems.value = res.data.items
      return res.data.data
    } catch (err) {
      const error = err as AxiosError
      console.error(error.response?.data || 'Unexpected error occurred')
    }
  }

  const query = useQuery<T[]>({
    queryKey: [queryKey, page.value, search.value, { ...route.query }],
    queryFn: () => fetchData(page.value, itemsPerPage.value, search.value),
  })

  function handleFilter() {
    page.value = 1
    router.push({ query: { ...route.query, ...filters } })
    query.refetch()
  }

  async function resetFilter(filterName: string[]) {
    filterName.forEach((name) => delete filters[name])
    await router.push({ path: route.path, query: { ...filters } })
    query.refetch()
  }

  return {
    ...query,
    isLoading: query.isLoading,
    filters,
    handleFilter,
    resetFilter,
    pagesCount,
    searchRef,
    search,
    itemsPerPage,
    totalItems,
    page,
  }
}
