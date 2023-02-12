import { red } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material/styles';

export const baseTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1484ed',
    },
    secondary: {
      main: '#580505',
    },
    error: {
      main: red.A400,
    },
  },
};

export const lightTheme: ThemeOptions = {
  ...baseTheme,
  palette: {
    mode: 'light',
    background: {
      default: '#2d2d2d',
    },
    primary: {
      main: '#1035db',
      dark: '#10db43',
    },
    secondary: {
      main: '#ed145b',
      dark: '#3d0618',
    },
  },
};

export const darkTheme: ThemeOptions = {
  ...baseTheme,
  palette: {
    mode: 'dark',
    background: {
      default: '#ed145b',
    },
    primary: {
      main: '#ed145b',
    },
    secondary: {
      main: '#2d2d2d',
    },
  },
};
