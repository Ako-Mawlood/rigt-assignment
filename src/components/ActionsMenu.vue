<script setup lang="ts">
const { id } = defineProps<{ id: string }>()
</script>
<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn
        icon="mdi-dots-vertical"
        class="ml-auto ma-1"
        variant="text"
        size="x-small"
        rounded
        v-bind="props"
      />
    </template>

    <v-list>
      <v-list-item
        @click="$router.push({ path: `${$route.path}/edit/${id}`, query: $route.query })"
        :title="$t('edit')"
        density="compact"
        prepend-icon="mdi-pencil"
        size="x-small"
      />
      <v-list-item
        @click="$router.push({ path: `${$route.path}/delete/${id}`, query: $route.query })"
        :title="$t('delete')"
        density="compact"
        prepend-icon="mdi-delete"
        size="x-small"
      />
    </v-list>
  </v-menu>
</template>
