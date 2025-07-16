<script setup lang="ts">
const { id } = defineProps<{ id: string }>()
</script>
<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn
        append-icon="mdi-dots-vertical"
        class="ml-auto pl-1 ma-1"
        min-width="20"
        variant="text"
        v-bind="props"
      />
    </template>

    <v-list>
      <v-list-item :to="`${$route.fullPath}/edit/${id}`" :title="$t('edit')" />
      <v-list-item :to="`${$route.fullPath}/delete/${id}`" :title="$t('delete')" />
    </v-list>
  </v-menu>
</template>
