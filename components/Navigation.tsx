import {
  NavigationDocumentData,
  SettingsDocumentData,
} from '@/.slicemachine/prismicio';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  styled,
  Toolbar,
} from '@mui/material';
import * as prismicH from '@prismicio/helpers';
import { PrismicLink, PrismicText } from '@prismicio/react';
import { useState } from 'react';

interface Props {
  navigation: NavigationDocumentData | undefined;
  settings: SettingsDocumentData | undefined;
}

const NavigationLink = styled(Link)({
  fontSize: '0.9rem',
  '&:hover': {
    textDecorationThickness: '2px',
    textUnderlineOffset: '4px',
  },
}) as typeof Link;

const drawerWidth = 240;

export const Navigation = ({ navigation, settings }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  if (!navigation || !settings) return null;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} py={3}>
      <PrismicLink href="/" internalComponent={Link}>
        <PrismicText field={settings.siteTitle} />
      </PrismicLink>
      <List component="nav" aria-label="Main Menu" sx={{ mt: 3 }}>
        {navigation.links.map((item: any) => (
          <ListItem key={prismicH.asText(item.label)} disablePadding>
            <PrismicLink
              internalComponent={ListItemButton}
              externalComponent={ListItemButton}
              field={item.link}
            >
              <PrismicText field={item.label} />
            </PrismicLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
              <PrismicLink
                key={prismicH.asText(item.label)}
                field={item.link}
                internalComponent={NavigationLink}
              >
                <PrismicText field={item.label} />
              </PrismicLink>
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
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar />
    </>
  );
};
