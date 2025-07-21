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
const id = route.params.id as string

const { mutate, isPending } = useMutation({
  mutationKey: ['delete-team', id],
  mutationFn: () => deleteTeam(id),

  onSuccess: () => {
    isOpen.value = false
    router.push({ path: '/dashboard/teams', query: route.query })
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
        :title="$t('deleteTeam.deleteTitle')"
        :text="$t('deleteTeam.deleteConfirmation')"
      >
        <template v-slot:actions>
          <div class="d-flex">
            <v-btn
              class="ml-auto text-capitalize font-weight-bold"
              @click="$router.push({ path: '/dashboard/teams', query: $route.query })"
              variant="elevated"
              density="compact"
              :text="$t('cancel')"
            />
            <v-btn
              class="ms-2 text-capitalize font-weight-bold"
              @click="mutate"
              :text="$t('delete')"
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
