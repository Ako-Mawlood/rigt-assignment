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
