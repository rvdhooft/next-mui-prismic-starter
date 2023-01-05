import { Box } from '@mui/material';
import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import Section from '@/components/Section';

const Text = ({ slice }: SliceComponentProps<Content.TextSlice>) => {
  return (
    <Section>
      <Box
        sx={
          slice.variation === 'twoColumns'
            ? { columns: { xs: 1, md: 2 }, gap: { xs: 1, md: 6 } }
            : {}
        }
      >
        <PrismicRichText field={slice.primary.text} />
      </Box>
    </Section>
  );
};

export default Text;
