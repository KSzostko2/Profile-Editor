import { createFileRoute } from '@tanstack/react-router'
import { UserForm } from '@/components/UserForm/UserForm.tsx'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      <UserForm />
    </div>
  )
}
