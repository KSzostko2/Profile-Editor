import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Column, Content, Grid } from '@carbon/react'
import { AppHeader } from '@/components/AppHeader.tsx'
import { Footer } from '@/components/Footer.tsx'

export const Route = createRootRoute({
  component: () => (
    <>
      <AppHeader />

      <Content id="main-content">
        <Grid>
          <Column lg={{ span: 13, offset: 3 }}>
            <Outlet />
            <Footer />
          </Column>
        </Grid>
      </Content>
    </>
  ),
})
