<script setup lang="ts">
const { item, header } = defineProps(['item', 'header'])
</script>
<template>
  <v-row style="flex-wrap: nowrap">{{ header.formatFn(item[header.key]) }}</v-row>
</template>
