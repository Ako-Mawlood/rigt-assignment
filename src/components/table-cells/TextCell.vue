<script setup lang="ts">
const { item, header } = defineProps(['item', 'header'])
</script>

<template>
  <span>{{ header.value(item) }}</span>
</template>
