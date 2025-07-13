import type { AxiosError } from 'axios'
import axios from '@/plugins/axios'
import type { SearchQueryType } from '@/types/SearchQuery.type'

export async function getTeams(page: number, teamsPerPage: number, q: SearchQueryType) {
  try {
    const res = await axios.get('/teams', {
      params: {
        _page: page,
        _per_page: teamsPerPage,
        name: q,
      },
    })

    return res.data.data
  } catch (err) {
    const error = err as AxiosError
    console.error(error.response?.data || 'Unexpected error occurred')
  }
}

export async function getTeam(id: number) {
  try {
    const res = await axios.get(`/teams/${id}`)

    return res.data
  } catch (err) {
    const error = err as AxiosError
    console.error(error.response?.data || 'Unexpected error occurred')
  }
}
