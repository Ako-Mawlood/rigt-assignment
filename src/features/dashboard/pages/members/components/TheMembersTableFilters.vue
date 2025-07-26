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
        variant="text"
        color="primary"
        density="comfortable"
        class="text-capitalize"
        icon="mdi-filter-variant"
        rounded
      />
    </template>

    <v-card min-width="300">
      <v-card-title class="text-lg text-primary">{{ $t('filters') }}</v-card-title>
      <v-divider />

      <div class="pa-4 gap-1 d-flex flex-column">
        <div>
          <div class="d-flex justify-space-between pb-1 align-center">
            <p class="text-xs">{{ $t('memberForm.workType') }}</p>
            <v-btn
              variant="text"
              :text="$t('reset')"
              @click="emit('resetFilter', ['workType'])"
              class="text-capitalize"
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
            :placeholder="$t('memberFilter.filterByWorkType')"
            variant="solo"
            hide-details
          />
        </div>

        <div>
          <div class="d-flex justify-space-between align-center mb-1">
            <p class="text-xs">{{ $t('memberForm.position') }}</p>
            <v-btn
              variant="text"
              :text="$t('reset')"
              @click="emit('resetFilter', ['position'])"
              class="text-capitalize"
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
            :placeholder="$t('memberFilter.filterByPosition')"
            hide-details
            variant="solo"
          />
        </div>
        <v-btn
          class="mt-2 text-xs text-capitalize ml-auto"
          size="x-small"
          color="primary"
          variant="tonal"
          @click="
            () => {
              emit('resetFilter', ['workType', 'position'])
              menu = false
            }
          "
          :text="$t('resetAll')"
        />
      </div>
    </v-card>
  </v-menu>
</template>
