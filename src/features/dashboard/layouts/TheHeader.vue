<script setup lang="ts">
import { useSidebarController } from '@/features/dashboard/composables/useSidebarController'
import ChangeLang from '@/shared/components/ChangeLang.vue'

const { toggleSidebar } = useSidebarController()
</script>
<template>
  <v-app-bar color="black" class="d-flex align-center px-4">
    <template v-slot:prepend>
      <v-btn icon @click="toggleSidebar">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </template>
    <ChangeLang />
  </v-app-bar>
</template>
