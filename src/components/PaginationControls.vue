<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const { isRtl } = useLanguage()

const { pagesCount } = defineProps(['pagesCount'])
const page = defineModel<number>('page')
const itemsPerPage = defineModel<number>('itemsPerPage')

const emit = defineEmits(['refetch'])

const itemPerPageOptions = [5, 10, 15, 20]

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
  page.value = 1
  emit('refetch')
})
</script>
<template>
  <div class="d-flex align-center gap-2 mx-1 mt-4 justify-end">
    <div class="d-flex gap-1 align-center justify-center">
      <span>Items per page</span>
      <v-select
        :items="itemPerPageOptions"
        class="d-flex align-center justify-center"
        variant="outlined"
        v-model="itemsPerPage"
        density="compact"
        color="primary"
        hide-details
      />
    </div>

    <span>page {{ page }} of {{ pagesCount }}</span>
    <div class="d-flex gap-2 justify-center">
      <!-- First Page -->
      <v-btn
        :disabled="page === 1"
        variant="text"
        density="compact"
        @click="page = 1"
        color="primary"
        icon
      >
        <v-icon>{{ isRtl ? 'mdi-page-last' : 'mdi-page-first' }}</v-icon>
      </v-btn>

      <!-- Previous Page -->
      <v-btn
        :disabled="page === 1"
        variant="text"
        density="compact"
        @click="page = (page as number) - 1"
        color="primary"
        icon
      >
        <v-icon>{{ isRtl ? 'mdi-arrow-right' : 'mdi-arrow-left' }}</v-icon>
      </v-btn>

      <!-- Next Page -->
      <v-btn
        :disabled="Number(page) >= pagesCount"
        variant="text"
        density="compact"
        @click="page = (page as number) + 1"
        color="primary"
        icon
      >
        <v-icon>{{ isRtl ? 'mdi-arrow-left' : 'mdi-arrow-right' }}</v-icon>
      </v-btn>

      <!-- Last Page -->
      <v-btn
        :disabled="Number(page) === pagesCount"
        color="primary"
        variant="text"
        density="compact"
        @click="page = pagesCount"
        icon
      >
        <v-icon>{{ isRtl ? 'mdi-page-first' : 'mdi-page-last' }}</v-icon>
      </v-btn>
    </div>
  </div>
</template>
