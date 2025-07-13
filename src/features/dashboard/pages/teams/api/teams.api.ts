import type { AxiosError } from 'axios'
import axios from '@/plugins/axios'

export async function getTeam(id: number) {
  try {
    const res = await axios.get(`/teams/${id}`)

    return res.data
  } catch (err) {
    const error = err as AxiosError
    console.error(error.response?.data || 'Unexpected error occurred')
  }
}
