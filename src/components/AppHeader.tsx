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
  Theme,
} from '@carbon/react'
import { Link } from '@tanstack/react-router'
import { Fade } from '@carbon/icons-react'

export function AppHeader() {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="User Profile Editor">
          <SkipToContent />
          <HeaderMenuButton aria-label="Open menu" onClick={onClickSideNavExpand} isActive={isSideNavExpanded} />
          <HeaderName as={Link} to="/" prefix="">
            Profile Editor
          </HeaderName>
          <Theme theme="g10">
            <SideNav aria-label="Side navigation" expanded={isSideNavExpanded} isPersistent={true}>
              <SideNavItems isSideNavExpanded={isSideNavExpanded}>
                <SideNavLink as={Link} to="/" renderIcon={Fade}>
                  <SideNavLinkText>Create</SideNavLinkText>
                </SideNavLink>
                <SideNavLink as={Link} to="/profile" renderIcon={Fade}>
                  <SideNavLinkText>Profile</SideNavLinkText>
                </SideNavLink>
              </SideNavItems>
            </SideNav>
          </Theme>
        </Header>
      )}
    />
  )
}
