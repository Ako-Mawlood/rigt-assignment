<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import {
  memberSchema,
  type MemberFormDataType,
} from '@/features/dashboard/pages/members/utils/member.validations'
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
const isOpen = ref(true)

const { errors, defineField, handleSubmit } = useForm<MemberFormDataType>({
  validationSchema: toTypedSchema(memberSchema),
  initialValues: {
    name: '',
    email: '',
    phoneNumber: '',
    position: 'Chief Executive Officer',
    workType: 'Contract',
    ...initialValues,
  },
})

const [name, nameAttrs] = defineField('name')
const [email, emailAttrs] = defineField('email')
const [phoneNumber, phoneNumberAttrs] = defineField('phoneNumber')
const [workType, workTypeAttrs] = defineField('workType')

const { mutate, isPending } = useMutation({
  mutationKey,
  mutationFn,
  onSuccess: () => {
    isOpen.value = false
    queryClient.invalidateQueries({ queryKey: ['members'] })
    router.push('/dashboard/members')
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
    </div>

    <v-text-field
      v-model="email"
      v-bind="emailAttrs"
      :label="$t('memberForm.email')"
      :error-messages="errors.email"
      variant="solo"
    />

    <v-text-field
      v-model="phoneNumber"
      v-bind="phoneNumberAttrs"
      :label="$t('memberForm.phoneNumber')"
      :error-messages="errors.phoneNumber"
      outlined
      rows="2"
      variant="solo"
    />
    <v-select
      v-model="workType"
      :label="$t('memberFom.workType')"
      v-bind="workTypeAttrs"
      :items="workTypes"
    />
    <div style="gap: 10px" class="d-flex justify-end w-100 gap-2">
      <v-btn variant="flat" density="comfortable" to="/dashboard/members">
        {{ $t('cancel') }}
      </v-btn>
      <v-btn
        type="submit"
        @click="onSubmit"
        density="comfortable"
        color="primary"
        :loading="isPending"
      >
        {{ $t('done') }}
      </v-btn>
    </div>
  </v-form>
</template>
