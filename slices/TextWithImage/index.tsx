import * as prismicH from '@prismicio/helpers';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

import { Box, useTheme } from '@mui/material';
import { Content } from '@prismicio/client';
import PrismicImage from '@/components/PrismicImage';
import Section from '@/components/Section';

const TextWithImage = ({
  slice,
}: SliceComponentProps<Content.TextWithImageSlice>) => {
  const image = slice.primary.image;
  const theme = useTheme();

  return (
    <Section>
      <Box
        display="grid"
        gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }}
        alignItems="center"
        gap={4}
      >
        <div>
          <PrismicRichText field={slice.primary.text} />
        </div>
        <div>
          {prismicH.isFilled.image(image) && (
            <PrismicImage
              field={image}
              sizes={`(min-width: ${theme.breakpoints.values.md}px) 50vw, 100vw`}
            />
          )}
        </div>
      </Box>
    </Section>
  );
};

export default TextWithImage;
