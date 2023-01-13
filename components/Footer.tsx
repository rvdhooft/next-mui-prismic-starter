import { NavigationDocumentData } from '@/.slicemachine/prismicio';
import { Box, Link } from '@mui/material';
import { PrismicLink } from '@prismicio/react';
import SocialLink from './SocialLink';

interface Props {
  navigation: NavigationDocumentData | undefined;
}

const Footer = ({ navigation }: Props) => {
  if (!navigation) return null;

  return (
    <Box
      component="footer"
      display="flex"
      px={5}
      py={4}
      gap={4}
      bgcolor={(theme) => theme.palette.neutral?.main}
      alignItems="center"
    >
      <Box component="nav" aria-label="Social Navigation">
        {navigation.social_links?.map((link: any) => (
          <SocialLink key={link.type} link={link} />
        ))}
      </Box>
      <Box component="nav" aria-label="Utility Navigation">
        {navigation.footer_links?.map((link: any) => (
          <Box key={link.label}>
            <PrismicLink
              field={link.link}
              internalComponent={Link}
              externalComponent={Link}
              sx={{ fontSize: '0.825rem' }}
            >
              {link.label}
            </PrismicLink>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
