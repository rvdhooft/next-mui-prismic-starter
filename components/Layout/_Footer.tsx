import { NavigationDocumentData } from '@/.slicemachine/prismicio';
import { Box } from '@mui/material';
import { PrismicLink } from '@prismicio/react';
import SocialLink from './_SocialLink';

interface Props {
  navigation: NavigationDocumentData | undefined;
}

const Footer = ({ navigation }: Props) => {
  if (!navigation) return null;

  return (
    <Box
      component="footer"
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      px={{ xs: 2.5, sm: 5 }}
      py={{ xs: 2, sm: 4 }}
      gap={{ xs: 2, sm: 4 }}
      bgcolor={(theme) => theme.palette.neutral?.main}
      alignItems="center"
    >
      <Box component="nav" aria-label="Social Navigation">
        {navigation.social_links?.map((link: any) => (
          <SocialLink key={link.type} link={link} />
        ))}
      </Box>
      <Box
        component="nav"
        textAlign={{ xs: 'center', sm: 'left' }}
        aria-label="Utility Navigation"
      >
        {navigation.footer_links?.map((link: any) => (
          <Box key={link.label} mb={{ xs: 1, sm: 0 }}>
            <Box
              component={PrismicLink}
              field={link.link}
              sx={{ fontSize: { sm: '0.825rem' } }}
            >
              {link.label}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
