import { useMutation } from '@tanstack/vue-query'
import { ref } from 'vue'
import type { TeamFormDataType } from '@/features/dashboard/pages/teams/utils/team.validations'
import { uploadFile } from '@/api/upload.api'

type SetFieldValue = (
  field: keyof TeamFormDataType,
  value: TeamFormDataType[keyof TeamFormDataType],
) => void

export function useUpload(setFieldValue: SetFieldValue) {
  const hasUploaded = ref(false)
  const { mutate, isPending: isUploading } = useMutation({
    mutationKey: ['upload'],
    mutationFn: (f: File) => uploadFile(f),
    onSuccess: (data) => {
      setFieldValue('image', {
        display_name: data.display_name,
        url: data.url,
        format: data.format,
      })
    },
    onError: () => {
      hasUploaded.value = false
    },
  })

  function handleChangeFile(e: Event) {
    const target = e.target as HTMLInputElement
    const selectedFile = target.files?.[0]
    if (selectedFile) {
      hasUploaded.value = true
      mutate(selectedFile)
    } else {
      setFieldValue('image', null)
    }
  }

  return { handleChangeFile, hasUploaded, isUploading }
}
