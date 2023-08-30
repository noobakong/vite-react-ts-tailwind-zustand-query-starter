import { QueryClient, useQuery } from '@tanstack/react-query'
import { getUserInfoByName } from '@/query/api'

// Create a client
export const queryClient = new QueryClient()

export function useGithubUserInfoQuery(name: string) {
  return useQuery(['user', name], () => getUserInfoByName(name))
}
