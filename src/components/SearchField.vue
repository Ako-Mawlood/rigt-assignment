<script setup lang="ts">
import type { SearchQueryType } from '@/types/SearchQuery.type'
import { useRouter } from 'vue-router'
const search = defineModel<SearchQueryType>('search')
const page = defineModel<number>('page')
const emit = defineEmits(['refetch'])
const router = useRouter()
function handleSearch() {
  if ((search.value as string).trim().length) {
    page.value = 1
    router.push({
      query: { q: search.value },
    })
    emit('refetch')
  }
}
function clearSearch() {
  router.push({ path: router.currentRoute.value.path, query: {} })
  search.value = ''
  emit('refetch')
}
defineExpose({ clearSearch })
</script>
<template>
  <v-col cols="9" :md="6" class="d-flex align-center">
    <v-text-field
      v-model="search"
      :placeholder="$t('search')"
      variant="solo"
      clearable
      hide-details
      density="compact"
      @keyup.enter="handleSearch"
      @click:clear="clearSearch"
    />

    <v-btn
      @click="handleSearch"
      :text="$t('search')"
      color="primary"
      prepend-icon="mdi-magnify"
      class="mx-4"
      variant="elevated"
    />
  </v-col>
</template>
