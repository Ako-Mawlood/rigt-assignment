<script setup lang="ts">
import SearchField from '@/components/SearchField.vue'
import PaginationControls from '@/components/PaginationControls.vue'
import { usePaginatedData } from '@/composables/usePaginatedData'

const { url, queryKey } = defineProps(['url', 'queryKey'])
const { data, isLoading, refetch, page, pagesCount, search, searchRef, itemsPerPage } =
  usePaginatedData(url, queryKey)
</script>
<template>
  <div v-if="isLoading">Loading</div>
  <v-data-iterator v-if="data" :items="data" class="mt-10" :items-per-page="5">
    <template #header>
      <SearchField ref="searchRef" v-model:search="search" @refetch="refetch" v-model:page="page" />
    </template>

    <template #no-data>
      <div v-if="search" class="text-center py-16">
        <h1 class="text-h6 text-primary mb-4">No results found</h1>
        <v-btn density="compact" @click="searchRef?.clearSearch()">Clear search</v-btn>
      </div>

      <div v-else class="text-center py-16">
        <slot name="no-data-yet" />
      </div>
    </template>

    <template #default>
      <v-container class="pa-2" fluid>
        <slot name="items" :items="data" />
      </v-container>
    </template>
    <template #footer>
      <PaginationControls
        v-if="data.length"
        v-model:page="page"
        @refetch="refetch"
        v-model:itemsPerPage="itemsPerPage"
        :pagesCount="pagesCount"
      />
    </template>
  </v-data-iterator>
</template>
