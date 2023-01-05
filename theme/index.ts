import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import componentOverrides from './_componentOverrides';
import palette from './_palette';
import typography from './_typography';

let theme = createTheme({
  palette,
  typography,
  shape: {
    borderRadius: 0,
  },
  components: componentOverrides,
});
theme = responsiveFontSizes(theme);

export default theme;
