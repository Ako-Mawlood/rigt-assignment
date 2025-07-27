<script setup lang="ts">
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
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
      <v-btn
        :disabled="page === 1"
        icon="mdi-page-first"
        variant="text"
        density="compact"
        @click="page = 1"
        color="primary"
      />

      <v-btn
        :disabled="page === 1"
        icon="mdi-arrow-left"
        variant="text"
        density="compact"
        @click="page = (page as number) - 1"
        color="primary"
      />

      <v-btn
        :disabled="Number(page) >= pagesCount"
        icon="mdi-arrow-right"
        variant="text"
        density="compact"
        @click="page = (page as number) + 1"
        color="primary"
      />
      <v-btn
        :disabled="Number(page) === pagesCount"
        color="primary"
        variant="text"
        icon="mdi-page-last"
        density="compact"
        @click="page = pagesCount"
      />
    </div>
  </div>
</template>

<style scoped>
.v-field__input {
  min-height: 100% !important;
  padding-top: 0 !important;
  margin-bottom: 0;
  padding-bottom: 0 !important;
}

.v-field {
  padding-inline-start: 0px;
  padding-inline-end: 4px;
}
</style>
