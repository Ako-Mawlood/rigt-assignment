<script setup lang="ts">
import type { SearchQueryType } from '@/types/SearchQuery.type'
import { useRouter, useRoute } from 'vue-router'

const search = defineModel<SearchQueryType>('search')
const page = defineModel<number>('page')
const emit = defineEmits(['refetch'])
const router = useRouter()
const route = useRoute()

function handleSearch() {
  if ((search.value as string).trim().length) {
    page.value = 1
    router.push({
      query: { ...route.query, q: search.value },
    })
    emit('refetch')
  }
}

function clearSearch() {
  const currentQuery = { ...route.query }
  delete currentQuery.q
  router.push({ query: currentQuery })
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
      prepend-inner-icon="mdi-magnify"
      @keyup.enter="handleSearch"
      @click:clear="clearSearch"
    />

    <v-btn
      @click="handleSearch"
      color="primary"
      prepend-icon="mdi-magnify"
      class="mx-4"
      variant="elevated"
      density="comfortable"
      rounded="lg"
      icon
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-col>
</template>
