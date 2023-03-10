import { Box, Typography } from '@mui/material';
import { Content } from '@prismicio/client';
import * as prismicH from '@prismicio/helpers';
import { PrismicText, SliceComponentProps } from '@prismicio/react';
import Section from '@/components/Section';

const Quote = ({ slice }: SliceComponentProps<Content.QuoteSlice>) => {
  if (!prismicH.isFilled.richText(slice.primary.quote)) return null;

  return (
    <Section>
      <Box component="figure" mx={0}>
        <blockquote>
          <Typography
            variant="h2"
            component="p"
            align={
              prismicH.isFilled.keyText(slice.primary.source)
                ? 'left'
                : 'center'
            }
          >
            <Box
              component="span"
              ml={-1.25}
              color={(theme) => theme.palette.neutral?.dark}
            >
              &ldquo;
            </Box>
            <PrismicText field={slice.primary.quote} />
            <Box
              component="span"
              color={(theme) => theme.palette.neutral?.dark}
            >
              &rdquo;
            </Box>
          </Typography>
        </blockquote>
        {prismicH.isFilled.keyText(slice.primary.source) && (
          <Box component="figcaption" textAlign="right">
            &mdash; <cite>{slice.primary.source}</cite>
          </Box>
        )}
      </Box>
    </Section>
  );
};

export default Quote;
