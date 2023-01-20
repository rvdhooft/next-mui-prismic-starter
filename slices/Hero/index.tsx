import type { Content } from '@prismicio/client';
import * as prismicH from '@prismicio/helpers';
import { PrismicNextImage } from '@prismicio/next';
import {
  PrismicLink,
  PrismicRichText,
  PrismicRichTextProps,
  SliceComponentProps,
} from '@prismicio/react';

import Section from '@/components/Section';
import { Box, Button, Container, styled, Typography } from '@mui/material';
import { ReactNode } from 'react';

const Heading = styled((props) => <Typography variant="h1" {...props} />)(
  ({ theme }) => ({
    marginBottom: 3,
    fontWeight: 'bold',
    [theme.breakpoints.up('xs')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4rem',
    },
  })
) as typeof Typography;

const components: PrismicRichTextProps['components'] = {
  heading1: ({ children }: { children: ReactNode }) => (
    <Heading component="h1">{children}</Heading>
  ),
  heading2: ({ children }: { children: ReactNode }) => (
    <Heading component="h2">{children}</Heading>
  ),
  heading3: ({ children }: { children: ReactNode }) => (
    <Heading component="h3">{children}</Heading>
  ),
};

const StyledSection = styled(Section)(({ theme }) => ({
  position: 'relative',
  color: 'white',
  backgroundColor: '#0f172a',
  padding: '5rem 1rem',
  [theme.breakpoints.up('md')]: {
    padding: '10rem 2rem',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '12rem 2rem',
  },
}));

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps) => {
  const backgroundImage = slice.primary.backgroundImage;

  return (
    <StyledSection maxWidth={false}>
      {prismicH.isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=""
          fill
          priority
          style={{ objectFit: 'cover', opacity: 0.4 }}
          sizes="100vw"
        />
      )}
      <Box py={5} position="relative">
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <Box textAlign="center" maxWidth="42rem">
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
              color="neutral"
              size="large"
            >
              {slice.primary.buttonText || 'More Info'}
            </PrismicLink>
          )}
        </Container>
      </Box>
    </StyledSection>
  );
};

export default Hero;
