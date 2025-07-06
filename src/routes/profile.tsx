import { createFileRoute, useRouter } from '@tanstack/react-router'
import { Button, Section, Stack } from '@carbon/react'
import { useQueryErrorResetBoundary, useSuspenseQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { WatsonHealthRotate_360 } from '@carbon/icons-react'
import type { ErrorComponentProps } from '@tanstack/react-router'
import { UserProfile } from '@/components/UserProfile/UserProfile'
import { getUsersDataQueryOptions } from '@/api/user/getUserData.ts'

export const Route = createFileRoute('/profile')({
  loader: ({ context: { queryClient } }) => queryClient.ensureQueryData(getUsersDataQueryOptions),
  errorComponent: ProfileErrorPage,
  component: ProfilePage,
})

function ProfileErrorPage(props: ErrorComponentProps) {
  const { error } = props

  const router = useRouter()
  const queryErrorResetBoundary = useQueryErrorResetBoundary()

  useEffect(() => {
    queryErrorResetBoundary.reset()
  }, [queryErrorResetBoundary])

  const isMissingDataError = error.message.includes('Missing user data')

  if (isMissingDataError) {
    return <p>User profile not found, please fill out form to get the data here.</p>
  }

  return (
    <Stack gap={3}>
      <p>An error occurred, please try again</p>
      <Button
        onClick={() => {
          router.invalidate()
        }}
        renderIcon={WatsonHealthRotate_360}
      >
        Retry
      </Button>
    </Stack>
  )
}

function ProfilePage() {
  const { data } = useSuspenseQuery(getUsersDataQueryOptions)

  return (
    <Section level={1}>
      <UserProfile user={data} />
    </Section>
  )
}
