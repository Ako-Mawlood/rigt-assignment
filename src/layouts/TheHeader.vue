<script setup lang="ts">
import { useSidebarController } from '@/composables/useSidebarController'
import ChangeLang from '@/components/ChangeLang.vue'

const { toggleSidebar } = useSidebarController()
</script>
<template>
  <v-app-bar color="background" density="compact" flat class="d-flex align-center">
    <template #prepend>
      <v-btn class="text-primary" icon @click="toggleSidebar">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>
