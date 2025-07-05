import {
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderName,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavLinkText,
  SkipToContent,
} from '@carbon/react'
import { Link } from '@tanstack/react-router'
import { Fade } from '@carbon/icons-react'

export function AppHeader() {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="User Profile Editor">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName as={Link} href="/" prefix="">
            Profile Editor
          </HeaderName>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={true}
          >
            <SideNavItems isSideNavExpanded={isSideNavExpanded}>
              <SideNavLink as={Link} href="/" renderIcon={Fade}>
                <SideNavLinkText>Home</SideNavLinkText>
              </SideNavLink>
            </SideNavItems>
          </SideNav>
        </Header>
      )}
    />
  )
}
