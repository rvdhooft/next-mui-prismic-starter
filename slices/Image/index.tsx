import { Box } from '@mui/material';
import { Content } from '@prismicio/client';
import * as prismicH from '@prismicio/helpers';
import { SliceComponentProps } from '@prismicio/react';
import PrismicImage from '../../components/PrismicImage';
import Section from '../../components/Section';

const Image = ({ slice, index }: SliceComponentProps<Content.ImageSlice>) => {
  const image = slice.primary.image;

  return (
    <Section sx={index === 0 ? { pt: 0 } : {}}>
      {prismicH.isFilled.image(image) && <PrismicImage field={image} />}
    </Section>
  );
};

export default Image;
