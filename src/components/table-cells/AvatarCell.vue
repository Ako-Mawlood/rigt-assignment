<script setup lang="ts">
const { item, header } = defineProps(['item', 'header'])
</script>

<template>
  <v-row align="center" class="gap-1" style="flex-wrap: nowrap">
    <v-avatar size="x-small" image="/images/avatar.png" />
    <span>{{ header.value(item) }}</span>
  </v-row>
</template>
