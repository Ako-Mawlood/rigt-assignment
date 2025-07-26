<script setup lang="ts">
import { sidebarTabs } from '@/constants/sidebarTabs'
import { useSidebarController } from '@/composables/useSidebarController'
import ChangeLang from '@/components/ChangeLang.vue'

const { rail, drawer, isTemporary, isPermanent } = useSidebarController()
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    class="bg-background position-fixed h-screen"
    :rail="rail"
    :temporary="isTemporary"
    :permanent="isPermanent"
  >
    <v-list>
      <v-list-item prepend-avatar="/images/rigt-logo.png" class="text-primary text-lg">
        {{ $t('rigt') }}
      </v-list-item>
    </v-list>

    <v-list density="compact" v-for="tab in sidebarTabs" :key="tab.id" nav>
      <v-list-item
        active-class="text-primary"
        :to="tab.path"
        :prepend-icon="tab.icon"
        :title="$t(tab.title)"
      />
    </v-list>

    <div class="position-absolute w-100 bottom-0">
      <ChangeLang />
    </div>
  </v-navigation-drawer>
</template>
