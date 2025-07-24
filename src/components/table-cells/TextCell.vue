<script setup lang="ts">
const { item, header } = defineProps(['item', 'header'])
</script>

<template>
  <span>{{ item[header.key] }}</span>
</template>
