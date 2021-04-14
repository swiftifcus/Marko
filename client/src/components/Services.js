import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import AmpStories from '@material-ui/icons/ImportantDevicesTwoTone';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphoneTwoTone';
import LaptopMacIcon from '@material-ui/icons/LaptopMacTwoTone';

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.secondary.main,
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0.5em',
    },
  },
  serviceContainer: {
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
}));

export default function Services({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction="column">
      <Grid
        item
        style={{
          marginLeft: matchSm ? 0 : '5em',
          marginTop: matchSm ? '1em' : '2em',
        }}
      >
        <Typography
          variant="h2"
          align={matchSm ? 'center' : undefined}
          gutterBottom
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          justify={matchSm ? 'center' : 'flex-end'}
          className={classes.serviceContainer}
          style={{ marginTop: matchSm ? '1em' : '5em' }}
        >
          <Grid
            item
            style={{
              marginLeft: matchSm ? 0 : '5em',
              textAlign: matchSm ? 'center' : undefined,
              width: matchSm ? null : '35em',
            }}
          >
            <Typography variant="h4">Mobile App Development</Typography>
            <Typography variant="subtitle1">
              Functionality. Accessibility. Engagement.
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Create beautiful mobile applications. {matchSm ? null : <br />}
            </Typography>
            <Button
              component={Link}
              to="/mobileapps"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              <span>Learn More</span>
              <ArrowForwardIcon
                fontSize="small"
                color="secondary"
              ></ArrowForwardIcon>
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchSm ? 0 : '5em' }}>
            <PhoneIphoneIcon
              color="primary"
              style={{ width: 300, height: 250 }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          justify={matchSm ? 'center' : null}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchSm ? 0 : '5em',
              textAlign: matchSm ? 'center' : null,
              marginRight: matchSm ? 0 : '5em',
            }}
          >
            <Typography variant="h4">Custom software development</Typography>
            <Typography variant="subtitle1">
              Save energy. Save time. Save money.
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Complete digital solutions and{' '}
              <span className={classes.specialText}>greatness {'  '}</span>
            </Typography>
            <Button
              component={Link}
              to="/softwaredevelopment"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(-1);
                setSelectedIndex(1);
              }}
            >
              <span style={{ marginLeft: '0.2em' }}>Learn More</span>
              <ArrowForwardIcon
                style={{ marginRight: '0.2em' }}
                fontSize="small"
                color="secondary"
              ></ArrowForwardIcon>
            </Button>
          </Grid>
          <Grid item>
            <AmpStories style={{ height: 210, width: 185 }} color="primary" />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid
          container
          justify={matchSm ? 'center' : 'flex-end'}
          className={classes.serviceContainer}
          style={{ marginBottom: '10em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchSm ? 'center' : null,
              width: matchSm ? null : '35em',
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1">Scalable. Reach.</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Optimized for search engines
              {matchSm ? null : <br />}
            </Typography>
            <Button
              component={Link}
              to="/websites"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              <span>Learn More</span>
              <ArrowForwardIcon
                fontSize="small"
                color="secondary"
              ></ArrowForwardIcon>
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchSm ? 0 : '5em' }}>
            <LaptopMacIcon
              color="primary"
              style={{ height: 250, width: 300 }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
