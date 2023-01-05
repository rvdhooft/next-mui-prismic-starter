import { Box } from '@mui/material';
import { PrismicLink } from '@prismicio/react';
import { PrismicDocument } from '@prismicio/types';
import SocialLink from './SocialLink';

interface Props {
  navigation: PrismicDocument<Record<string, any>, string, string>;
}

const Footer = ({ navigation }: Props) => {
  if (!navigation?.data) return null;

  return (
    <Box
      display="flex"
      px={5}
      py={4}
      gap={4}
      bgcolor={(theme) => theme.palette.neutral?.main}
    >
      <Box>
        {navigation.data.social_links?.map((link: any) => (
          <SocialLink key={link.type} link={link} />
        ))}
      </Box>
      <Box>
        {navigation.data.footer_links?.map((link: any) => (
          <Box key={link.label}>
            <PrismicLink field={link.link}>{link.label}</PrismicLink>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
