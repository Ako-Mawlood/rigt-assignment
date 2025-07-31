<script setup lang="ts">
import TheMembersTable from '@/features/dashboard/pages/members/components/TheMembersTable.vue'
</script>

<template>
  <div class="pa-4">
    <v-row justify="space-between" class="px-4">
      <h2 class="text-primary">{{ $t('members') }}</h2>
    </v-row>
    <TheMembersTable />
  </div>
  <router-view />
</template>
