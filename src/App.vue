<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
const { locale } = useLanguage()
</script>

<template>
  <v-app :class="{ 'kurdish-font': locale === 'ku' }">
    <router-view />
  </v-app>
</template>
