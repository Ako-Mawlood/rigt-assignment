<script setup lang="ts">
import { useLanguage } from '@/features/composables/useLanguage'
useLanguage()
</script>

<template>
  <v-app>
    <router-view />
  </v-app>
</template>
