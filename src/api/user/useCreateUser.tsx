import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { ApiUser } from '@/model/User.ts'
import { userQueryKeys } from '@/api/user/userQueryKeys.ts'

export interface CreateUserRequestBody extends Omit<ApiUser, 'id'> {}

export function useCreateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (variables: CreateUserRequestBody) => {
      await new Promise((resolve) =>
        setTimeout(() => {
          sessionStorage.setItem('user', JSON.stringify({ ...variables, id: '1' }))
          resolve(variables)
        }, 500),
      )
    },
    onError: (err) => {
      console.error(err)
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: userQueryKeys.getUserData() })
    },
  })
}
