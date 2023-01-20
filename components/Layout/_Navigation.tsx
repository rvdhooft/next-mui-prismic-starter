import {
  NavigationDocumentData,
  SettingsDocumentData,
} from '@/.slicemachine/prismicio';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Link, styled, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import * as prismicH from '@prismicio/helpers';
import { PrismicLink, PrismicText } from '@prismicio/react';
import { Fragment, useEffect, useState } from 'react';
import NavigationDrawer from './_NavigationDrawer';
import NavigationMenu from './_NavigationMenu';

interface Props {
  navigation: NavigationDocumentData | undefined;
  settings: SettingsDocumentData | undefined;
}

const NavigationLink = styled(Link)({
  fontSize: '0.9rem',
  lineHeight: '1.75rem',
  '&:hover': {
    textDecorationThickness: '2px',
    textUnderlineOffset: '4px',
  },
}) as typeof Link;
const NavigationButton = styled(Button)({
  color: 'inherit',
  padding: 0,
  fontSize: '0.9rem',
  textTransform: 'none',
  fontWeight: 500,
  minWidth: 0,
  '&:hover': {
    background: 'none',
  },
});

export const Navigation = ({ navigation, settings }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navMenuOpen, setNavMenuOpen] = useState<string | null>();
  const [hoverDelayHandler, setHoverDelayHandler] = useState<any>(null);

  const handleEscKey = (event: any) => {
    if (event.key === 'Escape') {
      setNavMenuOpen(null);
    }
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('keydown', handleEscKey, false);
    };
  }, []);

  if (!navigation || !settings) return null;

  const handleMouseEnter = (menuName: string | null) => {
    setHoverDelayHandler(
      setTimeout(() => {
        setNavMenuOpen(menuName);
      }, 200)
    );
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverDelayHandler);
  };

  const handleNavMenuClose = () => {
    setNavMenuOpen(null);
    document.removeEventListener('keydown', handleEscKey, false);
  };

  const handleMenuItemClick = (menuName: string | null) => {
    if (navMenuOpen === menuName) {
      handleNavMenuClose();
    } else {
      setNavMenuOpen(menuName);
      document.addEventListener('keydown', handleEscKey, false);
    }
  };

  const hasNavMenu = (item: any) => {
    return item.navigation_menu?.data?.slices?.length > 0;
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar component="header" color="inherit" aria-label="Navigation Header">
        <Toolbar>
          <PrismicLink
            href="/"
            internalComponent={NavigationLink}
            sx={{ fontSize: '1.1rem' }}
          >
            <PrismicText field={settings.siteTitle} />
          </PrismicLink>
          <Box
            component="nav"
            aria-label="Main Menu"
            flexWrap="wrap"
            gap={6}
            sx={{ ml: 6, display: { xs: 'none', sm: 'flex' } }}
          >
            {navigation.links.map((item: any) => (
              <Fragment key={prismicH.asText(item.label)}>
                {hasNavMenu(item) ? (
                  <>
                    <NavigationButton
                      aria-controls={prismicH.asText(item.label) || undefined}
                      aria-expanded={
                        prismicH.asText(item.label) === navMenuOpen
                      }
                      onClick={() =>
                        handleMenuItemClick(prismicH.asText(item.label))
                      }
                      onMouseEnter={() =>
                        handleMouseEnter(prismicH.asText(item.label))
                      }
                      onMouseLeave={handleMouseLeave}
                    >
                      <PrismicText field={item.label} />
                    </NavigationButton>
                    <NavigationMenu
                      menuName={prismicH.asText(item.label)}
                      open={navMenuOpen === prismicH.asText(item.label)}
                      groupsOfLinks={item.navigation_menu?.data?.slices}
                      onClose={handleNavMenuClose}
                    />
                  </>
                ) : (
                  <PrismicLink
                    field={item.link}
                    internalComponent={NavigationLink}
                    onMouseEnter={() => handleMouseEnter(null)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <PrismicText field={item.label} />
                  </PrismicLink>
                )}
              </Fragment>
            ))}
          </Box>
          <Box flex={1} />
          <IconButton
            color="inherit"
            aria-label="open navigation drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        navigation={navigation}
        settings={settings}
      />
      <Toolbar />
    </>
  );
};
