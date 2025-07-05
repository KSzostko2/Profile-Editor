import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Column, Content, Grid } from '@carbon/react'
import { AppHeader } from '@/components/AppHeader.tsx'
import { Footer } from '@/components/Footer/Footer.tsx'

export const Route = createRootRoute({
  component: () => (
    <>
      <AppHeader />

      <Content id="main-content">
        <Grid>
          <Column sm={{ span: 4 }} md={{ span: 8 }} lg={{ span: 12, offset: 4 }} xlg={{ span: 13, offset: 3 }}>
            <Outlet />
          </Column>
        </Grid>
      </Content>

      <Footer />
    </>
  ),
})
