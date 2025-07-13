<script setup lang="ts">
import SearchField from '@/components/SearchField.vue'
import PaginationControls from '@/components/PaginationControls.vue'
import { usePaginatedData } from '@/composables/usePaginatedData'

const { url } = defineProps(['url'])
const { data, isLoading, refetch, page, pagesCount, search, searchRef, itemsPerPage } =
  usePaginatedData(url)
</script>
<template>
  <div v-if="isLoading">Loading</div>
  <v-data-iterator v-if="data" :items="data" class="mt-10" :items-per-page="5">
    <template #header>
      <SearchField ref="searchRef" v-model:search="search" @refetch="refetch" v-model:page="page" />
    </template>
    <template #no-data>
      <div class="text-center py-16">
        <h1 class="text-h6 text-primary mb-4">No results found</h1>
        <v-btn density="compact" @click="searchRef?.clearSearch()"> Clear search </v-btn>
      </div>
    </template>
    <template #default>
      <v-container class="pa-2" fluid>
        <v-row v-if="data.length">
          <v-col v-for="item in data" :key="item.id" cols="12" sm="6" md="4" lg="3">
            <slot name="item" :item="item" />
          </v-col>
        </v-row>
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
