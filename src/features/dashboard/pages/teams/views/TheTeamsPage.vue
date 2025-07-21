<script setup lang="ts">
import DataIterator from '@/components/DataIterator.vue'
import TheTeamCard from '@/features/dashboard/pages/teams/components/TheTeamCard.vue'
</script>

<template>
  <div class="pa-4">
    <v-row justify="space-between" class="px-4">
      <h2 class="text-primary">{{ $t('teams') }}</h2>
    </v-row>
    <DataIterator url="/teams" queryKey="teams">
      <template #header-append>
        <v-btn
          @click="$router.push({ path: '/dashboard/teams/add', query: $route.query })"
          :text="$t('teamForm.newTeam')"
          density="comfortable"
          class="order-1 order-sm-2 ml-auto text-capitalize font-weight-bold"
          color="primary"
        />
      </template>
      <template #items="{ items }">
        <v-row v-if="items.length">
          <v-col v-for="item in items" :key="item.id" cols="12" sm="6" md="4" lg="3">
            <TheTeamCard :team="item" />
          </v-col>
        </v-row>
      </template>
      <template #no-data-yet>
        <h1>{{ $t('teamForm.noTeamsCreatedYet') }}</h1>
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
