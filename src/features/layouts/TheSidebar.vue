<script setup lang="ts">
import { sidebarTabs } from '@/features/constants/sidebarTabs'
import { useSidebarController } from '@/features/composables/useSidebarController'

const { rail, drawer, isTemporary, isPermanent } = useSidebarController()
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    color="black"
    :rail="rail"
    :temporary="isTemporary"
    :permanent="isPermanent"
  >
    <v-list>
      <v-list-item prepend-avatar="/images/rigt-logo.png" :title="$t('rigt')" />
    </v-list>

    <v-list density="compact" v-for="tab in sidebarTabs" :key="tab.id" nav>
      <v-list-item :to="tab.path" :prepend-icon="tab.icon" :title="$t(tab.title)" />
    </v-list>
  </v-navigation-drawer>
</template>
