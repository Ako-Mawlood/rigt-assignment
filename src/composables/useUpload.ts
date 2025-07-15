import { useMutation } from '@tanstack/vue-query'
import { ref } from 'vue'
import type { TeamFormDataType } from '@/features/dashboard/pages/teams/utils/team.validations'
import { uploadFile } from '@/api/upload.api'

type SetFieldValue = (
  field: keyof TeamFormDataType,
  value: TeamFormDataType[keyof TeamFormDataType],
) => void

export function useUpload(setFieldValue: SetFieldValue) {
  const file = ref<File | null>(null)

  const { mutate } = useMutation({
    mutationKey: ['upload'],
    mutationFn: (f: File) => uploadFile(f),
    onSuccess: (data) => {
      setFieldValue('imageUrl', data.url)
    },
  })

  function handleChangeFile(e: Event) {
    const target = e.target as HTMLInputElement
    const selectedFile = target.files?.[0]
    if (selectedFile) {
      file.value = selectedFile
      mutate(selectedFile)
    } else {
      file.value = null
      setFieldValue('imageUrl', null)
    }
  }

  return { file, handleChangeFile }
}
