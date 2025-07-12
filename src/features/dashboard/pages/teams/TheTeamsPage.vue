<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import type { TeamType } from '@/features/dashboard/pages/teams/types/team.type'
import { getTeams } from '@/features/dashboard/pages/teams/api/teams.api'

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
              <v-card rounded="lg" class="d-flex flex-column justify-space-between" height="250">
                <v-img :src="team.imageUrl" height="50" cover>
                  <v-chip
                    class="ma-2"
                    label
                    color="white"
                    size="small"
                    style="position: absolute; top: 0; right: 0"
                  >
                    {{ team.type }}
                  </v-chip>

                  <v-card-title class="text-white px-4 pt-6 pb-0">
                    <span class="text-h6 font-weight-bold text-truncate d-block">{{
                      team.name
                    }}</span>
                  </v-card-title>
                </v-img>
                <v-card-actions class="px-4 pb-4 pt-2">
                  <v-btn
                    variant="elevated"
                    color="primary"
                    size="small"
                    :to="`/dashboard/teams/detail/${team.id}`"
                    block
                    prepend-icon="mdi-account-group"
                  >
                    {{ $t('view team') }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-data-iterator>
  </div>
</template>
