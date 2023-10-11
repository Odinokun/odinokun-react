import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import { breakpoints } from '@theme/breakpoints.ts';
import { palette } from '@theme/palette.ts';
import { typography } from '@theme/typography.ts';
import { components } from '@theme/components.ts';

let theme = createTheme({
  breakpoints,
  components,
  palette,
  typography,
});

theme = responsiveFontSizes(theme);

export { theme };
