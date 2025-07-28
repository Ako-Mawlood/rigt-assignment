<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
import { watchEffect } from 'vue'

const { isRtl } = useLanguage()

watchEffect(() => {
  if (isRtl.value) {
    document.body.classList.add('kurdish-font')
  } else {
    document.body.classList.remove('kurdish-font')
  }
})
</script>

<template>
  <v-app>
    <router-view />
  </v-app>
</template>
