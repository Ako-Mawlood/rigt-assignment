<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import {
  teamSchema,
  type TeamFormDataType,
} from '@/features/dashboard/pages/teams/utils/team.validations'
import { teamTypeOptions } from '@/features/dashboard/pages/teams/constants/teamTypeOptions'
import { useUpload } from '@/composables/useUpload'
import type { TeamMutationType } from '@/features/dashboard/pages/teams/types/team.type'

type Props = {
  mutationFn: (payload: TeamMutationType) => Promise<TeamFormDataType>
  mutationKey: string[]
  initialValues?: Partial<TeamFormDataType>
}
const { mutationFn, mutationKey, initialValues } = defineProps<Props>()

const queryClient = useQueryClient()
const router = useRouter()
const route = useRoute()
const id = route.params.id as string
const isOpen = ref(true)
// TODO: remove initial values
const { errors, defineField, handleSubmit, setFieldValue } = useForm<TeamFormDataType>({
  validationSchema: toTypedSchema(teamSchema),
  initialValues: {
    name: '',
    description: '',
    location: '',
    timezone: '',
    type: 'Development',
    ...initialValues,
  },
})

const { handleChangeFile, isUploading, hasUploaded } = useUpload(setFieldValue)

const [name, nameAttrs] = defineField('name')
const [type, typeAttrs] = defineField('type')
const [description, descriptionAttrs] = defineField('description')
const [location, locationAttrs] = defineField('location')
const [isActive, isActiveAttrs] = defineField('isActive')
const [membersCount, membersCountAttrs] = defineField('membersCount')
const [timezone, timezoneAttrs] = defineField('timezone')
const { mutate, isPending } = useMutation({
  mutationKey,
  mutationFn,
  onSuccess: () => {
    isOpen.value = false
    queryClient.invalidateQueries({ queryKey: ['teams'] })
    router.push({ path: '/dashboard/teams', query: route.query })
  },
})

const onSubmit = handleSubmit((formData) => {
  mutate({ formData, id })
})
</script>
<template>
  <v-form @submit.prevent="onSubmit" class="pa-4">
    <div style="gap: 10px" class="d-flex">
      <v-text-field
        v-model="name"
        v-bind="nameAttrs"
        :label="$t('teamForm.name')"
        :error-messages="errors.name"
        variant="solo"
      />
      <v-select
        v-model="type"
        v-bind="typeAttrs"
        :items="teamTypeOptions"
        :label="$t('teamForm.type')"
        :error-messages="errors.type"
        variant="solo"
      />
    </div>

    <v-text-field
      v-model="location"
      v-bind="locationAttrs"
      :label="$t('teamForm.location')"
      :error-messages="errors.location"
      variant="solo"
    />

    <v-textarea
      v-model="description"
      v-bind="descriptionAttrs"
      :label="$t('teamForm.description')"
      :error-messages="errors.description"
      outlined
      rows="2"
      variant="solo"
    />

    <div style="gap: 10px" class="d-flex">
      <v-text-field
        v-model="membersCount"
        v-bind="membersCountAttrs"
        :label="$t('teamForm.membersCount')"
        type="number"
        min="1"
        :error-messages="errors.membersCount"
        variant="solo"
      />
      <v-text-field
        v-model="timezone"
        v-bind="timezoneAttrs"
        :label="$t('teamForm.timezone')"
        :error-messages="errors.timezone"
        variant="solo"
      />
    </div>

    <v-file-upload
      :title="$t('teamForm.uploadImage')"
      accept="image/*"
      :error-messages="errors.image"
      @change="handleChangeFile"
      density="compact"
      max-height="50"
      class="text-xs"
    />
    <div
      v-if="initialValues?.image?.url && !hasUploaded"
      class="my-2 pl-4 py-2 justify-start align-center d-flex rounded border"
    >
      <img
        :src="initialValues?.image.url"
        alt="Preview"
        height="40"
        width="40"
        class="rounded cover"
      />
      <div class="d-flex flex-column ml-4 justify-space-between">
        <span>{{ initialValues.image.display_name }}.{{ initialValues.image.format }}</span>
        <span class="text-xs text-onSurfaceMedium">image/{{ initialValues.image.format }}</span>
      </div>
    </div>

    <v-switch v-model="isActive" v-bind="isActiveAttrs" :label="$t('teamForm.isActive')" />

    <div style="gap: 10px" class="d-flex justify-end w-100 gap-2">
      <v-btn
        variant="flat"
        density="comfortable"
        @click="$router.push({ path: '/dashboard/teams', query: $route.query })"
      >
        {{ $t('cancel') }}
      </v-btn>
      <v-btn
        :disabled="isUploading"
        type="submit"
        @click="onSubmit"
        density="comfortable"
        color="primary"
        :loading="isPending"
      >
        {{ $t('submit') }}
      </v-btn>
    </div>
  </v-form>
</template>
