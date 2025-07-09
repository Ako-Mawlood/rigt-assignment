<script setup lang="ts">
import { useLanguage } from '@/shared/composables/useLanguage'
useLanguage()
</script>

<template>
  <v-app>
    <router-view />
  </v-app>
</template>
