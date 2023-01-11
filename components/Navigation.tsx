import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Divider,
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
import { PrismicDocument } from '@prismicio/types';
import { useState } from 'react';

interface Props {
  navigation: PrismicDocument<Record<string, any>, string, string>;
  settings: PrismicDocument<Record<string, any>, string, string>;
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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <PrismicLink href="/">
        <PrismicText field={settings.data.siteTitle} />
      </PrismicLink>
      <Divider />
      <List>
        {navigation.data?.links.map((item: any) => (
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
      <AppBar component="nav" color="inherit">
        <Toolbar>
          <PrismicLink
            href="/"
            internalComponent={NavigationLink}
            sx={{ fontSize: '1.1rem' }}
          >
            <PrismicText field={settings.data.siteTitle} />
          </PrismicLink>
          <Box
            component="ul"
            flexWrap="wrap"
            gap={6}
            sx={{ ml: 6, display: { xs: 'none', sm: 'flex' } }}
          >
            {navigation.data?.links.map((item: any) => (
              <li key={prismicH.asText(item.label)}>
                <PrismicLink
                  field={item.link}
                  internalComponent={NavigationLink}
                >
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ))}
          </Box>
          <Box flex={1} />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
      </Box>
      <Toolbar />
    </>
  );
};
