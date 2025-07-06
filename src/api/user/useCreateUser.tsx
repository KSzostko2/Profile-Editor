import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { User } from '@/model/User.ts'
import { userQueryKeys } from '@/api/user/userQueryKeys.ts'

export interface CreateUserRequestBody extends Omit<User, 'id'> {}

export function useCreateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (variables: CreateUserRequestBody) => {
      await new Promise((resolve) =>
        setTimeout(() => {
          sessionStorage.setItem('user', JSON.stringify(variables))
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
