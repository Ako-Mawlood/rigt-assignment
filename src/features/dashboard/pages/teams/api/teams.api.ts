import axios from '@/plugins/axios'
import type { TeamMutationType } from '@/features/dashboard/pages/teams/types/team.type'

export async function getTeam(id: string) {
  try {
    const res = await axios.get(`/teams/${id}`)
    return res.data
  } catch (err) {
    throw new Error('Could not get the teams')
  }
}

export async function deleteTeam(id: string) {
  try {
    const res = await axios.delete(`/teams/${id}`)

    return { data: res.data, message: 'The team Deleted Successfully' }
  } catch (err) {
    throw new Error('Could not delete the team')
  }
}

export async function addTeam({ formData }: Omit<TeamMutationType, 'id'>) {
  try {
    const res = await axios.post(`/teams`, formData)
    return { data: res.data, message: 'The team added Successfully ' }
  } catch (err) {
    throw new Error('Could not add the team')
  }
}

export async function editTeam({ formData, id }: TeamMutationType) {
  try {
    const res = await axios.put(`/teams/${id}`, formData)
    return { data: res.data, message: 'The team edited successfully' }
  } catch (err) {
    throw new Error('Could not edit the team')
  }
}
