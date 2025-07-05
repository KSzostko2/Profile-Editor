import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile/')({
  component: ProfilePage,
})

function ProfilePage() {
  return (
    <div>
      <p>profile page</p>
    </div>
  )
}
