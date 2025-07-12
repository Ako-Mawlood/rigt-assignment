<script setup lang="ts">
import type { TeamType } from '@/features/dashboard/pages/teams/types/team.type'

const { team } = defineProps<{ team: TeamType }>()
</script>
<template>
  <v-card rounded="lg" class="d-flex flex-column justify-space-between" height="250">
    <v-img :src="team.imageUrl" height="50" cover>
      <v-chip
        class="ma-2"
        label
        color="white"
        size="small"
        style="position: absolute; top: 0; right: 0"
        :text="team.type"
      />

      <v-card-title class="text-white px-4 pt-6 pb-0">
        <span class="text-h6 font-weight-bold text-truncate d-block">
          {{ team.name }}
        </span>
      </v-card-title>
    </v-img>

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
    <v-card-actions class="px-4 pb-4 pt-2">
      <v-btn
        variant="elevated"
        color="primary"
        size="small"
        :to="`/dashboard/teams/detail/${team.id}`"
        block
        prepend-icon="mdi-account-group"
        :text="$t('view team')"
      />
    </v-card-actions>
  </v-card>
</template>
