<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()

const page = defineModel<number>('page')
const itemsPerPage = defineModel<number>('itemsPerPage')
const emit = defineEmits(['refetch'])

const pageCount = 3
const pages = computed(() => [...Array(pageCount).keys()].map((i) => i + 1))
const perPageOptions = computed(() => Array.from({ length: 15 }, (_, i) => i + 1))

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
      v-model="itemsPerPage"
      variant="solo-filled"
      hide-details
      density="compact"
      max-width="90"
    >
    </v-select>
    <div class="d-flex align-center justify-center pa-4">
      <v-btn
        :disabled="page === 1"
        density="comfortable"
        icon="mdi-arrow-left"
        variant="tonal"
        rounded="lg"
        @click="page = (page as number) - 1"
      >
      </v-btn>
      <v-btn
        v-for="pageNumber in pages"
        :key="pageNumber"
        variant="elevated"
        class="ml-2"
        :color="page === pageNumber ? 'primary' : 'onPrimary'"
        min-width="40"
        @click="page = pageNumber"
      >
        {{ pageNumber }}
      </v-btn>
      <v-btn
        :disabled="Number(page) >= pageCount"
        density="comfortable"
        icon="mdi-arrow-right"
        variant="tonal"
        class="ml-2"
        rounded="lg"
        @click="page = (page as number) + 1"
      />
    </div>
  </v-row>
</template>
