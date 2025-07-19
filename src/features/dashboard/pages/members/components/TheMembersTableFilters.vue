<script setup lang="ts">
import { ref } from 'vue'
import { workTypes } from '../constants/workTypes'
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'

const { filters } = defineProps(['filters'])
const menu = ref(false)
const router = useRouter()
const route = useRoute()

function resetFilters() {
  filters.workType = null
  menu.value = false
  const filteredQuery = { ...route.query }
  delete filteredQuery.workType
  router.push({ path: route.path, query: filteredQuery })
}

onMounted(() => {
  if (route.query.workType) {
    filters.workType = route.query.workType as string
  } else {
    filters.workType = null
  }
})
</script>

<template>
  <v-menu v-model="menu" class="ml-auto" :close-on-content-click="false">
    <template #activator="{ props }">
      <v-btn v-bind="props" text="filter" icon>
        <v-btn-text />
        <v-icon>mdi-filter-variant</v-icon>
      </v-btn>
    </template>

    <v-card class="pa-2" min-width="300">
      <v-card-title class="text-body-2 text-primary">Filters</v-card-title>
      <v-divider />

      <div class="py-4">
        <div class="d-flex justify-space-between align-center mb-2">
          <p class="text-body-2">Work type</p>
          <v-btn variant="text" text="Reset" @click="resetFilters" size="x-small" color="primary" />
        </div>
        <v-select
          v-model="filters.workType"
          :items="['all', ...workTypes]"
          density="compact"
          hide-details
          variant="solo"
        />
      </div>
    </v-card>
  </v-menu>
</template>
