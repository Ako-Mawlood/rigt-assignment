<script setup lang="ts">
import { ref } from 'vue'
import { workTypes } from '../constants/workTypes'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { companyPositions } from '@/constants/companyPositionOptions'

const { filters } = defineProps(['filters'])
const emit = defineEmits(['handleFilter', 'resetFilter'])

const menu = ref(false)
const route = useRoute()

onMounted(() => {
  if (route.query) {
    filters.workType = route.query.workType
    filters.position = route.query.position
  }
})
</script>

<template>
  <v-menu v-model="menu" class="ml-auto" :close-on-content-click="false">
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        variant="outlined"
        color="primary"
        density="comfortable"
        text="filter"
        class="text-capitalize"
        prepend-icon="mdi-filter-variant"
      />
    </template>

    <v-card min-width="300">
      <v-card-title class="text-body-2 text-primary">Filters</v-card-title>
      <v-divider />

      <div style="gap: 16px" class="pa-4 d-flex flex-column">
        <div>
          <div class="d-flex justify-space-between pb-1 align-center">
            <p class="text-body-2">Work type</p>
            <v-btn
              variant="text"
              text="Reset"
              @click="emit('resetFilter', ['workType'])"
              size="x-small"
              color="primary"
            />
          </div>
          <v-select
            v-model="filters.workType"
            :items="workTypes"
            @update:model-value="emit('handleFilter')"
            item-title="text"
            item-value="value"
            input-class="text-large"
            density="compact"
            placeholder="Filter by work type"
            variant="solo"
            hide-details
          />
        </div>

        <div>
          <div class="d-flex justify-space-between align-center mb-1">
            <p class="text-body-2">Position</p>
            <v-btn
              variant="text"
              text="Reset"
              @click="emit('resetFilter', ['position'])"
              size="x-small"
              color="primary"
            />
          </div>

          <v-select
            v-model="filters.position"
            :items="companyPositions"
            @update:model-value="emit('handleFilter')"
            item-title="text"
            item-value="value"
            density="compact"
            placeholder="Filter by position"
            hide-details
            variant="solo"
          />
        </div>
        <v-btn
          class="mt-2 ml-auto"
          size="x-small"
          max-width="80"
          color="primary"
          @click="
            () => {
              emit('resetFilter', ['workType', 'position'])
              menu = false
            }
          "
          text="Reset all"
        />
      </div>
    </v-card>
  </v-menu>
</template>
