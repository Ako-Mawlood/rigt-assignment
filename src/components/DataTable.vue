<script setup lang="ts">
import SearchField from '@/components/SearchField.vue'
import PaginationControls from '@/components/PaginationControls.vue'
import { usePaginatedData } from '@/composables/usePaginatedData'

const { url, queryKey } = defineProps(['url', 'queryKey'])
const {
  data,
  isLoading,
  refetch,
  filters,
  handleFilter,
  resetFilter,
  page,
  pagesCount,
  search,
  searchRef,
  itemsPerPage,
  totalItems,
} = usePaginatedData(url, queryKey)
</script>

<template>
  <v-data-table-server
    v-if="data"
    :items="data"
    class="mt-10"
    :loading="isLoading"
    :items-per-page="itemsPerPage"
    :items-length="totalItems"
    hide-default-header
  >
    <template #top>
      <v-row justify="space-between" align="center">
        <SearchField
          ref="searchRef"
          v-model:search="search"
          @refetch="refetch"
          v-model:page="page"
          class="order-2 order-sm-1"
        >
          <template #search-append-inner>
            <slot
              name="search-append-inner"
              :filters="filters"
              :handleFilter="handleFilter"
              :resetFilter="resetFilter"
            />
          </template>
        </SearchField>

        <slot name="header-append" />
      </v-row>
    </template>
    <template #no-data>
      <div v-if="$route.query.q" class="text-center py-16">
        <h1 class="text-primary mb-4">{{ $t('noResultsFound') }}</h1>
        <v-btn
          density="compact"
          color="primary"
          class="text-capitalize"
          variant="tonal"
          @click="searchRef?.clearSearch()"
          >{{ $t('clearSearch') }}</v-btn
        >
      </div>

      <div v-else class="text-center py-16">
        <slot name="no-data-yet" />
      </div>
    </template>

    <v-container class="pa-2" fluid>
      <slot name="items" :items="data" />
    </v-container>
    <template #bottom>
      <PaginationControls
        v-if="data.length"
        v-model:page="page"
        @refetch="refetch"
        v-model:itemsPerPage="itemsPerPage"
        :pagesCount="pagesCount"
      />
    </template>
  </v-data-table-server>
</template>
