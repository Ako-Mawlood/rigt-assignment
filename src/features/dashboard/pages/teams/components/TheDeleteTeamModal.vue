<script setup lang="ts">
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { ref } from 'vue'
import { deleteTeam } from '../api/teams.api'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'

const isOpen = ref(true)
const queryClient = useQueryClient()
const route = useRoute()
const router = useRouter()
const id = Number(route.params.id)

const { mutate, isPending } = useMutation({
  mutationKey: ['delete-team', id],
  mutationFn: () => deleteTeam(id),

  onSuccess: () => {
    isOpen.value = false
    router.push('/dashboard/teams')
    queryClient.invalidateQueries({ queryKey: ['teams'] })
  },
})
</script>

<template>
  <div class="text-center pa-4">
    <v-dialog v-model="isOpen" persistent width="auto">
      <v-card
        max-width="400"
        prepend-icon="mdi-delete"
        title="Delete Team"
        text="Are you sure you want to delete this team? This action cannot be undone."
      >
        <template v-slot:actions>
          <div class="d-flex">
            <v-btn
              class="ml-auto"
              text="Cancel"
              to="/dashboard/teams"
              variant="elevated"
              density="compact"
            />
            <v-btn
              class="ms-2"
              @click="mutate"
              text="Delete"
              color="error"
              :prepend-icon="isPending ? 'mdi-loading' : 'mdi-delete'"
              :loading="isPending"
              variant="elevated"
              density="compact"
            />
          </div>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
