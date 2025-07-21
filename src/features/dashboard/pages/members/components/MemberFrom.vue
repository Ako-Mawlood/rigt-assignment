<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { companyPositions } from '@/constants/companyPositionOptions'
import {
  memberSchema,
  type MemberFormDataType,
} from '@/features/dashboard/pages/members/utils/validations/member.validations'
import type { MemberMutationType } from '@/features/dashboard/pages/members/types/member.type'
import { workTypes } from '../constants/workTypes'

type Props = {
  mutationFn: (payload: MemberMutationType) => Promise<MemberFormDataType>
  mutationKey: string[]
  initialValues?: Partial<MemberFormDataType>
}
const { mutationFn, mutationKey, initialValues } = defineProps<Props>()

const queryClient = useQueryClient()
const router = useRouter()
const route = useRoute()
const id = route.params.id as string
const isModalOpen = ref(true)
const isDateOfBirthOpen = ref(false)

const { errors, defineField, handleSubmit } = useForm<MemberFormDataType>({
  validationSchema: toTypedSchema(memberSchema),
  initialValues,
})

const [name, nameAttrs] = defineField('name')
const [email, emailAttrs] = defineField('email')
const [phoneNumber, phoneNumberAttrs] = defineField('phoneNumber')
const [workType, workTypeAttrs] = defineField('workType')
const [position, positionAttrs] = defineField('position')
const [dateOfBirth, dateOfBirthAttrs] = defineField('dateOfBirth')

const { mutate, isPending } = useMutation({
  mutationKey,
  mutationFn,
  onSuccess: () => {
    isModalOpen.value = false
    queryClient.invalidateQueries({ queryKey: ['members'] })
    router.push({ path: '/dashboard/members', query: route.query })
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
        :label="$t('memberForm.name')"
        :error-messages="errors.name"
        variant="solo"
      />
      <v-menu
        v-model="isDateOfBirthOpen"
        transition="slide-y-transition"
        :close-on-content-click="false"
      >
        <template #activator="{ props }">
          <v-text-field
            v-model="dateOfBirth"
            v-bind="{ ...props, ...dateOfBirthAttrs }"
            :label="$t('memberForm.dateOfBirth')"
            variant="solo"
            :error-messages="errors.dateOfBirth"
            readonly
          />
        </template>
        <v-date-picker
          v-model="dateOfBirth"
          v-bind="dateOfBirthAttrs"
          :label="$t('memberForm.dateOfBirth')"
          variant="solo"
          @update:model-value="isDateOfBirthOpen = false"
        />
      </v-menu>
    </div>

    <v-text-field
      v-model="email"
      v-bind="emailAttrs"
      :label="$t('memberForm.email')"
      :error-messages="errors.email"
      variant="solo"
    />

    <div style="gap: 10px" class="d-flex">
      <v-select
        v-model="position"
        v-bind="positionAttrs"
        :label="$t('memberForm.position')"
        :items="companyPositions"
        :error-messages="errors.position"
        variant="solo"
      />
      <v-select
        v-model="workType"
        :label="$t('memberForm.workType')"
        v-bind="workTypeAttrs"
        :items="workTypes"
        :error-messages="errors.workType"
        variant="solo"
      />
    </div>

    <v-phone-input
      v-model="phoneNumber"
      v-bind="phoneNumberAttrs"
      :label="$t('memberForm.phoneNumber')"
      :error-messages="errors.phoneNumber"
      outlined
      rows="2"
      :preferCountries="['IQ']"
      variant="solo"
      min-width="300"
    />

    <div style="gap: 10px" class="d-flex justify-end w-100 gap-2">
      <v-btn
        density="comfortable"
        variant="tonal"
        color="primary"
        :text="$t('cancel')"
        class="font-weight-bold text-capitalize"
        @click="$router.push({ path: '/dashboard/members', query: $route.query })"
      />
      <v-btn
        type="submit"
        @click="onSubmit"
        density="comfortable"
        color="primary"
        :loading="isPending"
        class="font-weight-bold text-capitalize"
      >
        {{ $t('submit') }}
      </v-btn>
    </div>
  </v-form>
</template>
