import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import { breakpoints } from './breakpoints';
import { palette } from './palette';
import { typography } from './typography';

let theme = createTheme({
  breakpoints,
  palette,
  typography,
});

theme = responsiveFontSizes(theme);

export { theme };
