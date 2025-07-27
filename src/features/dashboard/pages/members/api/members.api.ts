import axios from '@/plugins/axios'
import { type MemberMutationType } from '@/features/dashboard/pages/members/types/member.type'

export async function getMember(id: string) {
  try {
    const res = await axios.get(`/members/${id}`)
    return res.data
  } catch (err) {
    throw err
  }
}

export async function deleteMember(id: string) {
  try {
    const res = await axios.delete(`/members/${id}`)
    const name = res.data.name

    return { data: res.data, message: `${name} deleted successfully` }
  } catch (err) {
    throw new Error('Could not delete the member')
  }
}

export async function addMember({ formData }: Omit<MemberMutationType, 'id'>) {
  try {
    const res = await axios.post(`/members`, formData)
    const name = res.data.name

    return { data: res.data, message: `${name} added successfully` }
  } catch (err) {
    throw new Error('Could not add the member')
  }
}

export async function editMember({ formData, id }: MemberMutationType) {
  try {
    const res = await axios.put(`/members/${id}`, formData)
    const name = res.data.name

    return { data: res.data, message: `${name}  edited successfully` }
  } catch (err) {
    throw new Error('Could not edit the member')
  }
}
