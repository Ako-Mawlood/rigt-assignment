<script setup lang="ts">
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { ref } from 'vue'
import { deleteMember } from '@/features/dashboard/pages/members/api/members.api'
import { useRoute, useRouter } from 'vue-router'

const isOpen = ref(true)
const queryClient = useQueryClient()
const route = useRoute()
const router = useRouter()
const id = route.params.id as string

const { mutate, isPending } = useMutation({
  mutationKey: ['delete-member', id],
  mutationFn: () => deleteMember(id),

  onSuccess: () => {
    isOpen.value = false
    router.push({ path: '/dashboard/members', query: route.query })
    queryClient.invalidateQueries({ queryKey: ['members'] })
  },
})
</script>

<template>
  <div class="text-center pa-4">
    <v-dialog v-model="isOpen" persistent width="auto">
      <v-card
        max-width="400"
        prepend-icon="mdi-delete"
        :title="$t('deleteMember.deleteTitle')"
        :text="$t('deleteMember.deleteConfirmation')"
      >
        <template v-slot:actions>
          <div class="d-flex">
            <v-btn
              class="ml-auto"
              @click="$router.push({ path: '/dashboard/members', query: $route.query })"
              :text="$t('cancel')"
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
            >
              {{ $t('delete') }}
            </v-btn>
          </div>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
