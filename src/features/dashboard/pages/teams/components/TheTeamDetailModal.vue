<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { useRoute, useRouter } from 'vue-router'
import { getTeam } from '@/features/dashboard/pages/teams/api/teams.api'
import { ref } from 'vue'
import type { TeamType } from '@/features/dashboard/pages/teams/types/team.type'

const route = useRoute()
const isOpen = ref(true)

const id = route.params.id as string

const {
  data: team,
  isLoading,
  isError,
} = useQuery<TeamType>({
  queryKey: ['team', id],
  queryFn: () => getTeam(id),
})
</script>

<template>
  <v-dialog v-model="isOpen" max-width="600" persistent style="z-index: 1000">
    <v-card v-if="isLoading" class="text-center py-8 rounded-lg">
      <v-progress-circular indeterminate color="primary" size="64" />

      <p class="text-sm">{{ $t('loading') }}</p>
    </v-card>

    <template v-else-if="isError">
      <div class="text-center d-flex flex-column align-center py-8 rounded-lg">
        <v-icon color="error" size="64" icon="mdi-alert-circle" />
        <h3 class="mt-4 text-error">{{ $t('loadError') }}</h3>
        <v-btn
          class="mt-4"
          color="error"
          @click="$router.push({ path: '/dashboard/teams', query: $route.query })"
          :text="$t('close')"
        />
      </div>
    </template>

    <v-card v-else-if="team" class="rounded-lg">
      <div class="position-relative">
        <v-img :src="team.image.url" height="200px" cover>
          <v-btn
            icon
            color="surfaceOpacity"
            class="position-absolute top-0 right-0 ma-4"
            @click="$router.push({ path: '/dashboard/teams', query: $route.query })"
          >
            <v-icon icon="mdi-close" />
          </v-btn>
        </v-img>
      </div>

      <v-card-title class="px-4">
        <div class="d-flex align-center flex-wrap">
          <span class="font-weight-bold">{{ team.name }}</span>
          <v-chip class="mx-3 font-weight-bold" color="primary" size="small" density="compact">
            {{ team.type }}
          </v-chip>
          <v-chip
            :color="team.isActive ? 'green' : 'red'"
            class="font-weight-bold"
            size="small"
            density="compact"
          >
            {{ team.isActive ? 'Active' : 'Inactive' }}
          </v-chip>
        </div>
      </v-card-title>

      <v-card-subtitle class="px-4 pb-0 d-flex align-center mt-1">
        <v-icon icon="mdi-map-marker" size="small" class="mr-1" />
        <span>{{ team.location }}</span>
        <v-divider vertical class="mx-3" />
        <v-icon icon="mdi-clock" size="small" class="mr-1" />
        <span>{{ team.timezone }}</span>
      </v-card-subtitle>

      <v-card-text class="px-4 pt-3">
        <p class="text-sm mb-4">{{ team.description }}</p>

        <v-divider class="my-3" />

        <div class="d-flex flex-column flex-md-row">
          <v-col cols="12" md="6">
            <div class="d-flex align-center text-medium-emphasis">
              <v-icon icon="mdi-account-group" size="small" class="mr-2" />
              <span>Members: </span>
              <span class="text-black ml-1">{{ team.membersCount }}</span>
            </div>
          </v-col>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
