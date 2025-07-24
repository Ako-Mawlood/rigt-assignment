<script setup lang="ts">
import SearchField from '@/components/SearchField.vue'
import PaginationControls from '@/components/PaginationControls.vue'
import { usePaginatedData } from '@/composables/usePaginatedData'

import AvatarCell from '@/components/table-cells/AvatarCell.vue'
import FormattedCell from '@/components/table-cells/FormattedCell.vue'
import ChipCell from '@/components/table-cells/ChipCell.vue'
import ActionCell from '@/components/table-cells/ActionCell.vue'
import TextCell from '@/components/table-cells/TextCell.vue'

const { url, queryKey, headers } = defineProps(['url', 'queryKey', 'headers'])
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

const componentsMap = {
  avatar: AvatarCell,
  formatted: FormattedCell,
  chip: ChipCell,
  action: ActionCell,
  text: TextCell,
}
</script>

<template>
  <v-data-table-server
    v-if="data"
    :items="data"
    class="mt-10"
    :headers="headers"
    :loading="isLoading"
    :items-per-page="itemsPerPage"
    :items-length="totalItems"
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
    <template v-for="header in headers" v-slot:[`item.${header.key}`]="{ item }" :key="header.key">
      <component
        :is="componentsMap[header.componentPreview] || 'span'"
        :value="item[header.key]"
        :header="header"
        :item="item"
      />
    </template>
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
