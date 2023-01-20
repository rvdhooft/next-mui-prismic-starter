import { GroupOfLinksSlice } from '@/.slicemachine/prismicio';
import { Box, Collapse, Typography } from '@mui/material';
import { PrismicLink } from '@prismicio/react';
import { LinkType } from '@prismicio/types';
import { KeyboardEvent } from 'react';

interface Props {
  menuName: string | null;
  groupsOfLinks: GroupOfLinksSlice[];
  open: boolean;
  onClose: () => void;
}

const NavigationMenu = ({ menuName, groupsOfLinks, open, onClose }: Props) => {
  if (!groupsOfLinks?.length || !menuName) return null;

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Tab' || event.key === 'Shift') {
      return;
    }
    onClose();
  };

  return (
    <Box
      sx={{ position: 'absolute', top: '64px', left: 0, right: 0 }}
      id={menuName}
    >
      <Collapse in={open}>
        <Box
          role="presentation"
          display="flex"
          onClick={onClose}
          onKeyDown={handleKeyDown}
          onMouseLeave={onClose}
          sx={{
            background: 'white',
            p: 4,
            borderTop: `1px solid #e1e1e1`,
          }}
        >
          {groupsOfLinks.map((group) => (
            <Box key={group.id} mx={4}>
              {group.primary.group_link.link_type !== LinkType.Any ? (
                <Box mb={1}>
                  <PrismicLink
                    field={group.primary.group_link}
                    style={{ fontWeight: 'bold' }}
                  >
                    {group.primary.group_name}
                  </PrismicLink>
                </Box>
              ) : (
                group.primary.group_name && (
                  <Typography
                    component="h2"
                    variant="body1"
                    fontWeight="bold"
                    mb={1}
                  >
                    {group.primary.group_name}
                  </Typography>
                )
              )}

              <ul>
                {group.items.map((item) => (
                  <li key={item.link_label}>
                    <PrismicLink
                      field={item.link}
                      style={{
                        fontSize: '0.875rem',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {item.link_label}
                    </PrismicLink>
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default NavigationMenu;
