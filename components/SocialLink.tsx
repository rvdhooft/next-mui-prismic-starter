import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton } from '@mui/material';
import { PrismicLink } from '@prismicio/react';
import { FilledLinkToWebField } from '@prismicio/types';
import { WithSx } from '../types';

interface Props {
  link: { type: string; link: FilledLinkToWebField };
}

function getIcon(type: string) {
  switch (type) {
    case 'Facebook':
      return <FacebookIcon />;
    case 'Instagram':
      return <InstagramIcon />;
    case 'Pinterest':
      return <PinterestIcon />;
    case 'LinkedIn':
      return <LinkedInIcon />;
    case 'YouTube':
      return <YouTubeIcon />;
  }
}

const SocialLink = ({ link, sx }: WithSx<Props>) => {
  if (!link) return null;
  return (
    <PrismicLink
      field={link.link}
      aria-label="link.type"
      externalComponent={IconButton}
      size="small"
      sx={sx}
    >
      {getIcon(link.type)}
    </PrismicLink>
  );
};
export default SocialLink;
