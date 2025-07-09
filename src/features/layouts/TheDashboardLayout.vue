<script setup lang="ts">
import TheSidebar from '@/features/layouts/TheSidebar.vue'
import TheHeader from '@/features/layouts/TheHeader.vue'
</script>

<template>
  <v-layout>
    <TheSidebar />
    <TheHeader />
    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>
