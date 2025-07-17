import type { AxiosError } from 'axios'
import axios from '@/plugins/axios'
import { type MemberMutationType } from '@/features/dashboard/pages/members/types/member.type'

export async function getMember(id: string) {
  try {
    const res = await axios.get(`/members/${id}`)

    return res.data
  } catch (err) {
    const error = err as AxiosError
    console.error(error.response?.data || 'Unexpected error occurred')
  }
}

export async function deleteMember(id: string) {
  try {
    const res = await axios.delete(`/members/${id}`)

    return res.data
  } catch (err) {
    const error = err as AxiosError
    console.error(error.response?.data || 'Unexpected error occurred')
  }
}

export async function addMember({ formData }: Omit<MemberMutationType, 'id'>) {
  try {
    const res = await axios.post(`/members`, formData)
    return res.data
  } catch (err) {
    const error = err as AxiosError
    console.error(error.response?.data || 'Unexpected error occurred')
  }
}

export async function editMember({ formData, id }: MemberMutationType) {
  try {
    const res = await axios.put(`/members/${id}`, formData)
    return res.data
  } catch (err) {
    const error = err as AxiosError
    console.error(error.response?.data || 'Unexpected error occurred')
  }
}
