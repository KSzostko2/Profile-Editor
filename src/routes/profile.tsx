import { createFileRoute } from '@tanstack/react-router'
import { Loading, Section } from '@carbon/react'
import { UserProfile } from '@/components/UserProfile/UserProfile'
import { useQueryGetUserData } from '@/api/user/useQueryGetUserData.ts'

export const Route = createFileRoute('/profile')({
  component: ProfilePage,
})

function ProfilePage() {
  const userQuery = useQueryGetUserData()

  if (userQuery.isLoading) {
    return <Loading active description="Loading user data..." />
  }

  if (userQuery.isError || userQuery.data === undefined) {
    return <p>User profile not found, please fill out form to get the data here.</p>
  }

  return (
    <Section level={1}>
      <UserProfile user={userQuery.data} />
    </Section>
  )
}
