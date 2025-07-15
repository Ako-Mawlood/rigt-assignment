import type { AxiosError } from 'axios'
import axios from '@/plugins/axios'
import { type TeamFormDataType } from '@/features/dashboard/pages/teams/utils/team.validations'

export async function getTeam(id: string) {
  try {
    const res = await axios.get(`/teams/${id}`)

    return res.data
  } catch (err) {
    const error = err as AxiosError
    console.error(error.response?.data || 'Unexpected error occurred')
  }
}

export async function deleteTeam(id: string) {
  try {
    const res = await axios.delete(`/teams/${id}`)

    return res.data
  } catch (err) {
    const error = err as AxiosError
    console.error(error.response?.data || 'Unexpected error occurred')
  }
}

export async function addTeam(data: TeamFormDataType) {
  try {
    const res = await axios.post(`/teams`, data)
    return res.data
  } catch (err) {
    const error = err as AxiosError
    console.error(error.response?.data || 'Unexpected error occurred')
  }
}
