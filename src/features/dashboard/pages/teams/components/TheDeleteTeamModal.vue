<script setup lang="ts">
import { ref } from 'vue'
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { deleteTeam } from '@/features/dashboard/pages/teams/api/teams.api'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const isOpen = ref(true)

const queryClient = useQueryClient()
const route = useRoute()
const router = useRouter()
const toast = useToast()

const id = route.params.id as string

const { mutate, isPending } = useMutation({
  mutationKey: ['delete-team', id],
  mutationFn: () => deleteTeam(id),

  onSuccess: (res) => {
    isOpen.value = false
    router.push({ path: '/dashboard/teams', query: route.query })
    queryClient.invalidateQueries({ queryKey: ['teams'] })
    toast.success(res.message)
  },
  onError: (err) => {
    toast.error(err.message)
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
