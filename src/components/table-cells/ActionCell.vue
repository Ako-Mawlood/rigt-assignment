<script setup lang="ts">
const { header } = defineProps(['header'])
</script>

<template><component :is="header.actions" /></template>
