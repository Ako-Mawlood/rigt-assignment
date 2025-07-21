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
      />
      <v-list-item
        @click="$router.push({ path: `${$route.path}/delete/${id}`, query: $route.query })"
        :title="$t('delete')"
      />
    </v-list>
  </v-menu>
</template>
