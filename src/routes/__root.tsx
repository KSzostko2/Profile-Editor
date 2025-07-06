import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { Column, Content, Grid } from '@carbon/react'
import type { QueryClient } from '@tanstack/query-core'
import { AppHeader } from '@/components/AppHeader.tsx'
import { Footer } from '@/components/Footer/Footer.tsx'

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: () => (
    <>
      <AppHeader />

      <Content id="main-content">
        <Grid>
          <Column sm={{ span: 4 }} md={{ span: 8 }} lg={{ span: 12, offset: 4 }} xlg={{ span: 14, offset: 2 }}>
            <Outlet />
          </Column>
        </Grid>
      </Content>

      <Footer />
    </>
  ),
})
