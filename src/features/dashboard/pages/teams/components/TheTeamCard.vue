<script setup lang="ts">
import type { TeamType } from '@/features/dashboard/pages/teams/types/team.type'

const { team } = defineProps<{ team: TeamType }>()
</script>
<template>
  <v-card
    @click="$router.push(`/dashboard/teams/detail/${team.id}`)"
    rounded="md"
    class="d-flex cursor-pointer flex-column justify-space-between"
  >
    <v-img :src="team.imageUrl" height="150" cover />

    <div class="w-100 d-flex h-2 justify-space-between align-center">
      <v-col class="py-2" cols="10">
        <h3>
          {{ team.name }}
        </h3>
      </v-col>
      <v-col cols="2" class="py-2">
        <v-menu>
          <template #activator="{ props }">
            <v-btn
              append-icon="mdi-dots-vertical"
              class="ml-auto pl-1 ma-1"
              min-width="20"
              variant="text"
              v-bind="props"
            />
          </template>

          <v-list>
            <v-list-item :to="`/dashboard/teams/edit/${team.id}`" :title="$t('edit')" />
            <v-list-item :to="`/dashboard/teams/delete/${team.id}`" :title="$t('delete')" />
          </v-list>
        </v-menu>
      </v-col>
    </div>
  </v-card>
</template>
