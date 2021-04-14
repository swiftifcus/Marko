import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';

import background from '../../assets/donald-giannatti-Wj1D-qiOseE-unsplash.jpg';
import mobileBackground from '../../assets/donald-giannatti-Wj1D-qiOseE-unsplash.jpg';

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
    borderColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.dark,
    marginTop: '0.5em',
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit',
    },
  },
  contactUsButton: {
    ...theme.typography.contactUs,
    borderRadius: 50,
    height: 80,
    width: 200,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  results: {
    color: theme.palette.secondary.dark,
  },
}));

export default function Banner({ setValue, setSelectedIndex }) {
  const theme = useTheme();
  const classes = useStyles();
  const matchSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      className={classes.background}
      alignItems="center"
      justify={matchSm ? 'center' : 'space-between'}
      direction={matchSm ? 'column' : 'row'}
    >
      <Grid
        item
        style={{
          marginLeft: matchSm ? 0 : '5em',
          textAlign: matchSm ? 'center' : 'inherit',
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography className={classes.results} variant="h2">
              Results
            </Typography>
            <Typography variant="subtitle2">
              Take advantage of the finest technology.
            </Typography>
            <Grid container justify={matchSm ? 'center' : undefined} item>
              <Button
                component={Link}
                to="/vision"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => setValue(2)}
              >
                <span>Learn More</span>
                <ArrowForwardIcon
                  fontSize="small"
                  color="secondary"
                ></ArrowForwardIcon>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          className={classes.contactUsButton}
          onClick={() => setValue(-1)}
        >
          Contact us
        </Button>
      </Grid>
    </Grid>
  );
}
