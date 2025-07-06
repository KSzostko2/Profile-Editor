import { useQuery } from '@tanstack/react-query'
import type { User } from '@/model/User.ts'
import { userQueryKeys } from '@/api/user/userQueryKeys.ts'

export function useQueryGetUserData() {
  return useQuery({
    queryKey: userQueryKeys.getUserData(),
    queryFn: async () => {
      return await new Promise<User>((resolve, reject) =>
        setTimeout(() => {
          const user = sessionStorage.getItem('user')
          if (user === null) {
            reject(new Error('Invalid user data'))
            return
          }

          const parsedData = JSON.parse(user)
          resolve(parsedData)
        }, 500),
      )
    },
    retry: false,
  })
}
