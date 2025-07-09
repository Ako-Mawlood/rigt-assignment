<script setup lang="ts">
import TheSidebar from '@/features/dashboard/layouts/TheSidebar.vue'
import TheHeader from '@/features/dashboard/layouts/TheHeader.vue'
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
