import { useMutation } from '@tanstack/vue-query'
import { ref } from 'vue'
import { uploadFile } from '@/api/upload.api'

export function useUpload(setFieldValue) {
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
    console.log(selectedFile)
    if (selectedFile) {
      file.value = selectedFile
      mutate(selectedFile)
    }
  }

  return { file, handleChangeFile }
}
