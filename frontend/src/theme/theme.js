import { createTheme } from '@mui/material/styles';
import components from './components';
import typography from './typography';

// const theme = createTheme(); // DEFAULT THEME

// CUSTOM THEME
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(54, 199, 175)',
    },
    text: {
      primary: 'rgb(54, 199, 175)',
      secondary: 'rgb(6, 11, 15)',
    },
    alternate: {
      main: 'rgb(247, 250, 255)',
      dark: 'rgb(237, 241, 247)',
    },
  },
  typography: typography,
  components: components,
});

export default theme;