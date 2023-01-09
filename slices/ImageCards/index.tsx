import * as prismicH from '@prismicio/helpers';
import {
  PrismicLink,
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from '@prismicio/react';

import { Box, Link, Typography, useTheme } from '@mui/material';
import { Content } from '@prismicio/client';
import { ReactNode } from 'react';
import { ConditionalWrap } from '@/components/ConditionalWrap';
import PrismicImage from '@/components/PrismicImage';
import Section from '@/components/Section';

const ImageCard = ({ item }: { item: Content.ImageCardsSliceDefaultItem }) => {
  const image = item.image;
  const theme = useTheme();

  return (
    <Box component="li" display="grid" gap={3}>
      {prismicH.isFilled.image(image) && (
        <ConditionalWrap
          condition={prismicH.isFilled.link(item.buttonLink)}
          wrap={({ children }: { children: ReactNode }) => (
            <PrismicLink field={item.buttonLink} tabIndex={-1}>
              {children}
            </PrismicLink>
          )}
        >
          <PrismicImage
            field={image}
            sizes={`(min-width: ${theme.breakpoints.values.md}px) 50vw, 100vw`}
          />
        </ConditionalWrap>
      )}
      <div>
        <PrismicRichText field={item.text} />
      </div>
      {prismicH.isFilled.link(item.buttonLink) && (
        <div>
          <PrismicLink
            internalComponent={Link}
            externalComponent={Link}
            field={item.buttonLink}
          >
            {item.buttonText || 'More Info'}
          </PrismicLink>
        </div>
      )}
    </Box>
  );
};

const ImageCards = ({
  slice,
}: SliceComponentProps<Content.ImageCardsSlice>) => {
  return (
    <Section>
      <Box display="grid" gap={6}>
        {prismicH.isFilled.richText(slice.primary.heading) && (
          <Typography variant="h2" align="center">
            <PrismicText field={slice.primary.heading} />
          </Typography>
        )}
        <Box
          component="ul"
          display="grid"
          gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }}
          gap={4}
        >
          {slice.items.map((item) => (
            <ImageCard key={item.image.url} item={item} />
          ))}
        </Box>
      </Box>
    </Section>
  );
};

export default ImageCards;
