<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
import { watch } from 'vue'

const { locale } = useLanguage()

watch(
  () => locale.value,
  (newLocale) => {
    if (newLocale === 'ku') {
      document.body.classList.add('kurdish-font')
    } else {
      document.body.classList.remove('kurdish-font')
    }
  },
)
</script>

<template>
  <v-app>
    <router-view />
  </v-app>
</template>
