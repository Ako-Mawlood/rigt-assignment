import axios from '@/plugins/axios'

export async function uploadFile(file: File) {
  try {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)

    let resource = 'auto'
    if (file.type.startsWith('image/')) {
      resource = 'image'
    } else if (file.type.startsWith('video/')) {
      resource = 'video'
    } else {
      resource = 'raw'
    }

    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/${resource}/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )

    return res.data
  } catch (error) {
    console.error('Cloudinary upload error:', error)
    throw error
  }
}
