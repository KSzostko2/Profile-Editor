import { createFileRoute } from '@tanstack/react-router'
import { Section } from '@carbon/react'
import { UserProfile } from '@/components/UserProfile/UserProfile'

export const Route = createFileRoute('/profile')({
  component: ProfilePage,
})

function ProfilePage() {
  return (
    <Section level={1}>
      <UserProfile
        user={{
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          phoneNumber: '+48123456789',
          birthDate: new Date('2020-04-12'),
          avatarUrl: 'https://picsum.photos/id/237/200/300',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam eveniet facere incidunt iusto labore libero minus modi nihil numquam odit, officiis, omnis quam ratione repellendus saepe, suscipit tempore voluptatum.',
        }}
      />
    </Section>
  )
}
