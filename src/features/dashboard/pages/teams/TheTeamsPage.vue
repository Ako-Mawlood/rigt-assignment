<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import type { TeamType } from '@/features/dashboard/pages/teams/types/team.type'
import { getTeams } from '@/features/dashboard/pages/teams/api/teams.api'

import TheTeamCard from '@/features/dashboard/pages/teams/components/TheTeamCard.vue'

const route = useRoute()
const search = ref(route.query.q || '')
const teamsPerPage = ref(Number(localStorage.getItem('itemsPerPage')) || 5)
const page = ref(Number(route.query.page) || 1)

const { data: teams } = useQuery<TeamType[]>({
  queryKey: ['teams', page.value, search.value],
  queryFn: () => getTeams(page.value, teamsPerPage.value, search.value),
})
</script>
<template>
  <div class="pa-4">
    <h2 class="text-primary">{{ $t('teams') }}</h2>

    <v-data-iterator :items="teams" class="mt-10" :items-per-page="5">
      <template #default>
        <v-container class="pa-2" fluid>
          <v-row v-if="teams?.length">
            <v-col v-for="team in teams" :key="team.id" cols="12" sm="6" md="4" lg="3">
              <TheTeamCard :team="team" />
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-data-iterator>
  </div>
</template>
