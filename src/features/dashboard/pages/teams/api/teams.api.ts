import type { AxiosError } from 'axios'
import axios from '@/plugins/axios'
import type { TeamMutationType } from '@/features/dashboard/pages/teams/types/team.type'

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

export async function addTeam({ formData }: Omit<TeamMutationType, 'id'>) {
  try {
    const res = await axios.post(`/teams`, formData)
    return res.data
  } catch (err) {
    const error = err as AxiosError
    console.error(error.response?.data || 'Unexpected error occurred')
  }
}

export async function editTeam({ formData, id }: TeamMutationType) {
  try {
    const res = await axios.put(`/teams/${id}`, formData)
    return res.data
  } catch (err) {
    const error = err as AxiosError
    console.error(error.response?.data || 'Unexpected error occurred')
  }
}
