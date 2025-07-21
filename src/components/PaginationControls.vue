<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { perPageOptions } from '@/constants/perPageOptions'

const router = useRouter()
const route = useRoute()
const { pagesCount } = defineProps(['pagesCount'])
const page = defineModel<number>('page')
const itemsPerPage = defineModel<number>('itemsPerPage')
const emit = defineEmits(['refetch'])
const pages = computed(() => [...Array(pagesCount).keys()].map((i) => i + 1))

watch(page, () => {
  emit('refetch')
  router.push({
    query: {
      ...route.query,
      page: page.value,
    },
  })
})

watch(itemsPerPage, () => {
  localStorage.setItem('itemsPerPage', String(itemsPerPage.value))
  emit('refetch')
})
</script>

<template>
  <v-row class="d-flex justify-end align-center">
    <v-select
      :items="perPageOptions"
      item-title="label"
      item-value="value"
      v-model="itemsPerPage"
      color="primary"
      variant="plain"
      hide-details
      density="compact"
      max-width="110"
    />
    <div class="d-flex align-center justify-center pa-4">
      <v-btn
        :disabled="page === 1"
        density="comfortable"
        icon="mdi-arrow-left"
        variant="text"
        rounded="lg"
        @click="page = (page as number) - 1"
      >
      </v-btn>
      <v-btn
        v-for="pageNumber in pages"
        :key="pageNumber"
        density="comfortable"
        variant="flat"
        class="ml-2"
        :color="page === pageNumber ? 'primary' : 'onPrimary'"
        min-width="40"
        @click="page = pageNumber"
      >
        {{ pageNumber }}
      </v-btn>
      <v-btn
        :disabled="Number(page) >= pagesCount"
        density="comfortable"
        icon="mdi-arrow-right"
        variant="text"
        class="ml-2"
        rounded="lg"
        @click="page = (page as number) + 1"
      />
    </div>
  </v-row>
</template>
