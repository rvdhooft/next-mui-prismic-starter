import {
  GroupOfLinksSlice,
  NavigationDocumentData,
  SettingsDocumentData,
} from '@/.slicemachine/prismicio';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText as MuiListItemText,
  styled,
} from '@mui/material';
import * as prismicH from '@prismicio/helpers';
import { PrismicLink, PrismicText } from '@prismicio/react';
import { useState } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
  navigation: NavigationDocumentData | undefined;
  settings: SettingsDocumentData | undefined;
}

const ListItemText = styled(MuiListItemText)({
  '& .MuiListItemText-primary': {
    fontWeight: '500',
  },
});

const drawerWidth = 240;

const NavigationDrawer = ({ open, onClose, navigation, settings }: Props) => {
  const [level1NavItemSelected, setLevel1NavItemSelected] = useState<any>(null);
  const [level2NavItemSelected, setLevel2NavItemSelected] =
    useState<GroupOfLinksSlice | null>(null);

  const hasNavMenu = (item: any) => {
    return item.navigation_menu?.data?.slices?.length > 0;
  };

  if (!navigation || !settings) return null;

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={open}
      onClose={onClose}
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
      <Box sx={{ textAlign: 'center' }} py={3}>
        <PrismicLink href="/">
          <PrismicText field={settings.siteTitle} />
        </PrismicLink>
        <List component="nav" aria-label="Main Menu" sx={{ mt: 3 }}>
          {level2NavItemSelected ? (
            <>
              <ListItemButton onClick={() => setLevel2NavItemSelected(null)}>
                <ChevronLeftIcon />
                <ListItemText sx={{ ml: 1 }}>
                  {level2NavItemSelected.primary.group_name}
                </ListItemText>
              </ListItemButton>
              {level2NavItemSelected.items.map((x) => (
                <PrismicLink
                  key={x.link_label}
                  internalComponent={ListItemButton}
                  externalComponent={ListItemButton}
                  field={x.link}
                  sx={{ ml: 4 }}
                >
                  {x.link_label}
                </PrismicLink>
              ))}
            </>
          ) : level1NavItemSelected ? (
            <>
              <ListItemButton onClick={() => setLevel1NavItemSelected(null)}>
                <ChevronLeftIcon />
                <ListItemText sx={{ ml: 1 }}>
                  {prismicH.asText(level1NavItemSelected.label)}
                </ListItemText>
              </ListItemButton>
              {level1NavItemSelected.navigation_menu?.data?.slices.map(
                (item: GroupOfLinksSlice, i: number) => (
                  <ListItem key={i} disablePadding>
                    {item.items.length ? (
                      <ListItemButton
                        onClick={() => setLevel2NavItemSelected(item)}
                        sx={{ ml: 4 }}
                      >
                        <ListItemText>{item.primary.group_name}</ListItemText>
                        <ChevronRightIcon />
                      </ListItemButton>
                    ) : (
                      <PrismicLink
                        internalComponent={ListItemButton}
                        externalComponent={ListItemButton}
                        field={item.primary.group_link}
                        sx={{ ml: 4 }}
                      >
                        {item.primary.group_name}
                      </PrismicLink>
                    )}
                  </ListItem>
                )
              )}
            </>
          ) : (
            navigation.links.map((item: any) => (
              <ListItem key={prismicH.asText(item.label)} disablePadding>
                {hasNavMenu(item) ? (
                  <ListItemButton
                    onClick={() => setLevel1NavItemSelected(item)}
                  >
                    <ListItemText sx={{ ml: 4 }}>
                      <PrismicText field={item.label} />
                    </ListItemText>
                    <ChevronRightIcon />
                  </ListItemButton>
                ) : (
                  <PrismicLink
                    internalComponent={ListItemButton}
                    externalComponent={ListItemButton}
                    field={item.link}
                    sx={{ ml: 4 }}
                  >
                    <PrismicText field={item.label} />
                  </PrismicLink>
                )}
              </ListItem>
            ))
          )}
        </List>
      </Box>
    </Drawer>
  );
};

export default NavigationDrawer;
