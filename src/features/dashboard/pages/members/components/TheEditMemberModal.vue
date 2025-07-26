<script setup lang="ts">
import { ref } from 'vue'
import MemberForm from '@/features/dashboard/pages/members/components/MemberFrom.vue'
import { editMember } from '@/features/dashboard/pages/members/api/members.api'
import { useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import { getMember } from '@/features/dashboard/pages/members/api/members.api'

const isOpen = ref(true)
const route = useRoute()
const id = route.params.id as string

const { data, isLoading, isError } = useQuery({
  queryKey: ['member', id],
  queryFn: () => getMember(id),
})
</script>

<template>
  <div class="text-center pa-4">
    <v-dialog v-model="isOpen" persistent max-width="600">
      <v-card :title="$t('memberForm.editMember')" class="pa-4">
        <template v-if="isLoading">
          <div class="d-flex justify-center pa-4">
            <v-progress-circular indeterminate color="primary" />
          </div>
        </template>

        <template v-else-if="isError">
          <div class="text-center d-flex flex-column align-center py-8 rounded-lg">
            <v-icon color="error" size="64" icon="mdi-alert-circle" />
            <h3 class="mt-4 text-error">{{ $t('loadError') }}</h3>
            <v-btn class="mt-4" color="error" to="/dashboard/members" :text="$t('close')" />
          </div>
        </template>

        <template v-else>
          <MemberForm
            :initialValues="data"
            :mutationFn="editMember"
            :mutationKey="['edit-member', id]"
          />
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
