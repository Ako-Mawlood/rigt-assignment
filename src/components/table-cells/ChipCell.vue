<script setup lang="ts">
import { isObject } from '@/utils/isObject'
const { item, header } = defineProps(['item', 'header'])
const colors = header.colors
</script>
<template>
  <v-chip :color="isObject(colors) ? colors[item[header.key]] : header.colors" density="compact">{{
    header.value(item)
  }}</v-chip>
</template>
