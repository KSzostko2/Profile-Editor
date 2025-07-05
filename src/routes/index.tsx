import { createFileRoute } from '@tanstack/react-router'
import { Section } from '@carbon/react'
import { UserForm } from '@/components/UserForm/UserForm.tsx'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <Section level={1}>
      <UserForm />
    </Section>
  )
}
