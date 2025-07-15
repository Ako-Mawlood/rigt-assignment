<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { addTeam } from '@/features/dashboard/pages/teams/api/teams.api'
import {
  teamSchema,
  type TeamFormDataType,
} from '@/features/dashboard/pages/teams/utils/team.validations'
import { teamTypeOptions } from '@/features/dashboard/pages/teams/constants/teamTypeOptions'
import { useUpload } from '@/composables/useUpload'

const queryClient = useQueryClient()
const router = useRouter()
const isOpen = ref(true)

const { file, handleChangeFile, secret_url } = useUpload()
const { errors, defineField, handleSubmit, setFieldValue } = useForm<TeamFormDataType>({
  validationSchema: toTypedSchema(teamSchema),
  initialValues: {
    isActive: true,
    membersCount: 10,
  },
})

const [name, nameAttrs] = defineField('name')
const [type, typeAttrs] = defineField('type')
const [description, descriptionAttrs] = defineField('description')
const [location, locationAttrs] = defineField('location')
const [isActive, isActiveAttrs] = defineField('isActive')
const [membersCount, membersCountAttrs] = defineField('membersCount')
const [timezone, timezoneAttrs] = defineField('timezone')

const { mutate, isPending } = useMutation({
  mutationKey: ['add-team'],
  mutationFn: addTeam,
  onSuccess: () => {
    isOpen.value = false
    queryClient.invalidateQueries({ queryKey: ['teams'] })
    router.push('/dashboard/teams')
  },
})

const onSubmit = handleSubmit((formData) => {
  mutate(formData)
})

watch(file, () => {
  if (secret_url.value) {
    setFieldValue('imageUrl', secret_url.value)
  }
})
</script>

<template>
  <div class="text-center pa-4">
    <v-dialog v-model="isOpen" persistent max-width="600">
      <v-card title="Create New Team">
        <v-form @submit.prevent="onSubmit" class="pa-4">
          <div style="gap: 10px" class="d-flex">
            <v-text-field
              v-model="name"
              v-bind="nameAttrs"
              label="Team Name"
              :error-messages="errors.name"
              variant="solo"
            />

            <v-select
              v-model="type"
              v-bind="typeAttrs"
              :items="teamTypeOptions"
              label="Team Type"
              :error-messages="errors.type"
              variant="solo"
            />
          </div>

          <v-text-field
            v-model="location"
            v-bind="locationAttrs"
            label="Location"
            :error-messages="errors.location"
            variant="solo"
          />

          <v-textarea
            v-model="description"
            v-bind="descriptionAttrs"
            label="Description"
            :error-messages="errors.description"
            outlined
            rows="2"
            variant="solo"
          />

          <v-file-input
            label="Upload image"
            accept="image/*"
            :error-messages="errors.imageUrl"
            variant="solo"
            @change="handleChangeFile"
          />

          <v-switch v-model="isActive" v-bind="isActiveAttrs" label="Is Active?" />

          <v-text-field
            v-model="membersCount"
            v-bind="membersCountAttrs"
            label="Members Count"
            type="number"
            min="1"
            :error-messages="errors.membersCount"
            variant="solo"
          />

          <v-text-field
            v-model="timezone"
            v-bind="timezoneAttrs"
            label="Timezone"
            :error-messages="errors.timezone"
            class="mb-4"
            variant="solo"
          />

          <div style="gap: 10px" class="d-flex justify-end w-100 gap-2">
            <v-btn variant="flat" density="comfortable" to="/dashboard/teams"> Cancel </v-btn>
            <v-btn
              type="submit"
              @click="onSubmit"
              density="comfortable"
              color="primary"
              :loading="isPending"
            >
              Create Team
            </v-btn>
          </div>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>
