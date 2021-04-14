import { createMuiTheme } from '@material-ui/core/styles';

const teal = '#049aa2';
const red = '#bb0c00';
const grey = '#868686';

const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    common: {
      blue: teal,
      orange: red,
    },
    primary: {
      main: teal,
    },
    secondary: {
      main: red,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    success: {
      main: '#04a25b',
    },
    error: {
      main: '#a2049a',
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '1rem',
      textTransform: 'none',
    },
    contactUs: {
      fontSize: '1rem',
      fontFamily: 'Pacifico',
      textTransform: 'none',
      color: 'white',
    },
    body1: {
      fontSize: '1.25rem',
      color: grey,
      fontWeight: 300,
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: teal,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5em',
      color: teal,
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75em',
      color: teal,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: grey,
    },
    subtitle2: {
      color: 'white',
      fontSize: '1rem',
      fontWeight: 300,
    },
    learnButton: {
      borderColor: teal,
      color: teal,
      paddingRight: 0,
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 300,
      color: grey,
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: teal,
        fontSize: '1rem',
      },
    },
    MuiInput: {
      root: {
        color: grey,
        fontWeight: 300,
      },
      underline: {
        '&:before': {
          borderBottom: `2px solid ${teal}`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${teal}`,
        },
      },
    },
  },
});

export default theme;
