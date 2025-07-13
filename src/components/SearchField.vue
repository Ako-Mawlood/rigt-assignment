<script setup lang="ts">
import type { SearchQueryType } from '@/types/SearchQuery.type'
import { useRouter } from 'vue-router'
const search = defineModel<SearchQueryType>('search')
const page = defineModel<number>('page')
const emit = defineEmits(['refetch'])
const router = useRouter()
function handleSearch() {
  if (search.value?.length) {
    page.value = 1
    router.push({
      query: { q: search.value },
    })
    emit('refetch')
  }
}
function clearSearch() {
  router.push('/dashboard/teams')
  search.value = ''
  emit('refetch')
}
defineExpose({ clearSearch })
</script>
<template>
  <v-toolbar flat elevation="0" className="px-2 no-shadow">
    <v-text-field
      v-model="search"
      :placeholder="$t('search')"
      prepend-inner-icon="mdi-magnify"
      variant="solo"
      clearable
      persistent-clear
      hide-details
      density="compact"
      @keyup.enter="handleSearch"
      @click:clear="clearSearch"
      max-width="400"
    />
    <v-btn
      @click.prevent="handleSearch"
      :text="$t('search')"
      color="primary"
      class="ml-4"
      variant="elevated"
    />
  </v-toolbar>
</template>
