import type { Content } from '@prismicio/client';
import * as prismicH from '@prismicio/helpers';
import { PrismicNextImage } from '@prismicio/next';
import {
  PrismicLink,
  PrismicRichText,
  PrismicRichTextProps,
  SliceComponentProps,
} from '@prismicio/react';

import { Box, Button, Container, Typography } from '@mui/material';
import { ReactNode } from 'react';

const components: PrismicRichTextProps['components'] = {
  heading1: ({ children }: { children: ReactNode }) => (
    <Typography component="h2" variant="h1" mb={4} mt={12}>
      {children}
    </Typography>
  ),
};

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps) => {
  const backgroundImage = slice.primary.backgroundImage;

  return (
    <Box component="section" position="relative" color="white" bgcolor="black">
      {prismicH.isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=""
          fill={true}
          priority
          style={{ objectFit: 'cover', opacity: 0.4 }}
        />
      )}
      <Box py={5} position="relative">
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <Box textAlign="center">
            <PrismicRichText
              field={slice.primary.text}
              components={components}
            />
          </Box>
          {prismicH.isFilled.link(slice.primary.buttonLink) && (
            <PrismicLink
              field={slice.primary.buttonLink}
              internalComponent={Button}
              externalComponent={Button}
              variant="contained"
            >
              {slice.primary.buttonText || 'More Info'}
            </PrismicLink>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
