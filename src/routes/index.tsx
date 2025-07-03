import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@carbon/react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      <p>Index page</p>
      <Button>test button</Button>
    </div>
  )
}
