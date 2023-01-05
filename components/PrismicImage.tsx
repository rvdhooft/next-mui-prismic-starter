import { Box } from '@mui/material';
import { PrismicNextImage, PrismicNextImageProps } from '@prismicio/next';
import { WithSx } from '../types';

const PrismicImage = ({
  sx,
  sizes,
  ...other
}: WithSx<PrismicNextImageProps>) => {
  return (
    <Box bgcolor={(theme) => theme.palette.neutral?.main} sx={sx}>
      <PrismicNextImage
        {...other}
        sizes={sizes || '100vw'}
        style={{ width: '100%' }}
      />
    </Box>
  );
};

export default PrismicImage;
