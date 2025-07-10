<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
useLanguage()
</script>

<template>
  <v-app>
    <router-view />
  </v-app>
</template>
