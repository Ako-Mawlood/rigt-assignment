<script setup lang="ts">
import DataIterator from '@/components/DataIterator.vue'
import TheTeamCard from '@/features/dashboard/pages/teams/components/TheTeamCard.vue'
</script>

<template>
  <router-view />

  <div class="pa-4">
    <h2 class="text-primary">{{ $t('teams') }}</h2>
    <DataIterator url="/teams">
      <template #item="{ item }">
        <TheTeamCard :team="item" />
      </template>
    </DataIterator>
  </div>
</template>
