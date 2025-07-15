import axios from '@/plugins/axios'

export async function uploadFile(file: File) {
  try {
    const formData = new FormData()

    formData.append('file', file)
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)
    console.log('file from api: ', file)
    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData,
    )
    return res.data
  } catch {}
}
