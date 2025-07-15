<script setup lang="ts">
import DataIterator from '@/components/DataIterator.vue'
import TheTeamCard from '@/features/dashboard/pages/teams/components/TheTeamCard.vue'
</script>

<template>
  <div class="pa-4">
    <v-row justify="space-between" class="pa-4">
      <h2 class="text-primary">{{ $t('teams') }}</h2>
      <v-btn
        to="/dashboard/teams/add"
        :text="$t('teamForm.newTeam')"
        density="comfortable"
        color="primary"
      />
    </v-row>
    <DataIterator url="/teams">
      <template #item="{ item }">
        <TheTeamCard :team="item" />
      </template>
      <template #no-yet>
        <h1>No teams created yet</h1>
        <v-btn
          to="/dashboard/teams/add"
          :text="$t('teamForm.newTeam')"
          density="comfortable"
          color="primary"
        />
      </template>
    </DataIterator>
  </div>

  <router-view />
</template>
