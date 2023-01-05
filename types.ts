import { SxProps, Theme } from '@mui/material';

export type SupportsSx = { sx?: SxProps<Theme> };
export type WithSx<T = {}> = T & SupportsSx;
