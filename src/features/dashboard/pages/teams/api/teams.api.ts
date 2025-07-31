import axios from '@/plugins/axios'
import type { TeamMutationType } from '@/features/dashboard/pages/teams/types/team.type'

export async function getTeam(id: string) {
  try {
    const res = await axios.get(`/teams/${id}`)
    return res.data
  } catch (err) {
    throw new Error('Could not get the team')
  }
}

export async function deleteTeam(id: string) {
  try {
    const res = await axios.delete(`/teams/${id}`)
    const name = res.data.name

    return {
      data: res.data,
      message: `${name} team deleted successfully`,
    }
  } catch (err) {
    throw new Error('Could not delete the team')
  }
}

export async function addTeam({ formData }: Omit<TeamMutationType, 'id'>) {
  try {
    const res = await axios.post(`/teams`, formData)
    const name = res.data.name

    return {
      data: res.data,
      message: `${name} team added successfully`,
    }
  } catch (err) {
    throw new Error('Could not add the team')
  }
}

export async function editTeam({ formData, id }: TeamMutationType) {
  try {
    const res = await axios.put(`/teams/${id}`, formData)
    const name = res.data.name

    return {
      data: res.data,
      message: `${name} team edited successfully`,
    }
  } catch (err) {
    throw new Error('Could not edit the team')
  }
}
