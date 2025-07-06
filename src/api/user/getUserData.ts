import { queryOptions } from '@tanstack/react-query'
import type { ApiUser } from '@/model/User.ts'
import { apiUserSchema } from '@/model/User.ts'
import { userQueryKeys } from '@/api/user/userQueryKeys.ts'

async function fetchUser() {
  return await new Promise<ApiUser>((resolve, reject) =>
    setTimeout(() => {
      const user = sessionStorage.getItem('user')
      if (user === null) {
        reject(new Error('Missing user data'))
        return
      }

      const parsedData = JSON.parse(user)
      resolve(parsedData)
    }, 500),
  )
}

export const getUsersDataQueryOptions = queryOptions({
  queryKey: userQueryKeys.getUserData(),
  queryFn: async () => {
    const userData = await fetchUser()

    const { data, success, error } = apiUserSchema.safeParse(userData)

    if (success) {
      return data
    }

    console.error(error.message)
    throw new Error(`Malformed user data: ${error.message}`)
  },
  retry: false,
})
