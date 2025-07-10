<script setup lang="ts">
import { sidebarTabs } from '@/constants/sidebarTabs'
import { useSidebarController } from '@/composables/useSidebarController'

const { rail, drawer, isTemporary, isPermanent } = useSidebarController()
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    class="bg-background"
    :rail="rail"
    :temporary="isTemporary"
    :permanent="isPermanent"
  >
    <v-list>
      <v-list-item prepend-avatar="/images/rigt-logo.png" :title="$t('rigt')" />
    </v-list>

    <v-list density="compact" v-for="tab in sidebarTabs" :key="tab.id" nav>
      <v-list-item
        active-class="text-primary"
        :to="tab.path"
        :prepend-icon="tab.icon"
        :title="$t(tab.title)"
      />
    </v-list>
  </v-navigation-drawer>
</template>
