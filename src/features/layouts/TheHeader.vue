<script setup lang="ts">
import { useSidebarController } from '@/features/composables/useSidebarController'
import ChangeLang from '@/features/components/ChangeLang.vue'

const { toggleSidebar } = useSidebarController()
</script>
<template>
  <v-app-bar color="background" density="compact" flat class="d-flex align-center">
    <template v-slot:prepend>
      <v-btn class="text-primary" icon @click="toggleSidebar">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </template>
    <ChangeLang />
  </v-app-bar>
</template>
