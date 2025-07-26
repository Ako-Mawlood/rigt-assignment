<script setup lang="ts" generic="T">
import SearchField from '@/components/SearchField.vue'
import PaginationControls from '@/components/PaginationControls.vue'
import { usePaginatedData } from '@/composables/usePaginatedData'
import type { TeamType } from '@/features/dashboard/pages/teams/types/team.type'

const { url, queryKey } = defineProps(['url', 'queryKey'])

const { data, isLoading, refetch, page, pagesCount, search, searchRef, itemsPerPage } =
  usePaginatedData<T>(url, queryKey)
</script>

<template>
  <p class="text-lg" v-if="isLoading">{{ $t('loading') }}</p>
  <v-data-iterator v-if="data" :items="data" class="mt-10" :items-per-page="5">
    <template #header>
      <v-row justify="space-between" align="center" class="pa-4">
        <SearchField
          ref="searchRef"
          class="order-2 order-sm-1"
          v-model:search="search"
          @refetch="refetch"
          v-model:page="page"
        />
        <slot name="header-append" />
      </v-row>
    </template>

    <template #no-data>
      <div v-if="!!$route.query.q" class="text-center py-16">
        <h1 class="text-primary mb-4">{{ $t('noResultsFound') }}</h1>
        <v-btn
          density="compact"
          class="text-capitalize"
          @click="searchRef?.clearSearch()"
          variant="tonal"
          color="primary"
          :text="$t('clearSearch')"
        />
      </div>

      <div v-else class="text-center py-16">
        <slot name="no-data-yet" />
      </div>
    </template>

    <template #default>
      <v-container class="pa-2" fluid>
        <slot name="items" :items="data:T[]" />
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
