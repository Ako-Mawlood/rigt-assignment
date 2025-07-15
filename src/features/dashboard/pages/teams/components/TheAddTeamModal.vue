<script setup lang="ts">
import { ref } from 'vue'
import TeamForm from '@/features/dashboard/pages/teams/components/TeamForm.vue'
import { addTeam } from '@/features/dashboard/pages/teams/api/teams.api'

const isOpen = ref(true)
</script>

<template>
  <div class="text-center pa-4">
    <v-dialog v-model="isOpen" persistent max-width="600">
      <v-card title="Create New Team">
        <TeamForm :initialValues="{ isActive: false }" :mutationFn="addTeam" />
      </v-card>
    </v-dialog>
  </div>
</template>
