import { PaletteOptions } from '@mui/material/';

const darkColor = '#1e1e1e';
const lightColor = '#fdfdfd';
const highlightColor = '#ffb100';

export const palette: PaletteOptions = {
  // mode: 'light',
  common: {
    black: darkColor,
    white: lightColor,
  },
  text: {
    primary: darkColor,
    secondary: highlightColor,
  },
  background: {
    default: darkColor,
    paper: lightColor,
  },
};