<script setup lang="ts">
import ActionsMenu from '@/components/ActionsMenu.vue'
import type { TeamType } from '@/features/dashboard/pages/teams/types/team.type'

const { team } = defineProps<{ team: TeamType }>()
</script>
<template>
  <v-card
    @click="$router.push({ path: `/dashboard/teams/detail/${team.id}`, query: $route.query })"
    rounded="md"
    class="d-flex cursor-pointer flex-column justify-space-between"
  >
    <v-img :src="team.image?.url || '/images/default-team-image.png'" height="150" cover />

    <div class="w-100 d-flex h-2 justify-space-between align-center">
      <v-col class="py-2" cols="10">
        <h3>
          {{ team.name }}
        </h3>
      </v-col>
      <v-col cols="2" class="py-2">
        <ActionsMenu :id="team.id" />
      </v-col>
    </div>
  </v-card>
</template>
