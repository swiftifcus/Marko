import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Banner from './ui/Banner';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import animationData from '../animations/homeanimation/data';

import ImportantDevices from '@material-ui/icons/ImportantDevicesTwoTone';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphoneTwoTone';
import LaptopMacIcon from '@material-ui/icons/LaptopMacTwoTone';
import repeatingBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/low-mesh-bg.svg';

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  contactUs: {
    ...theme.typography.contactUs,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '1rem',
    height: 45,
    width: 145,
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
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.secondary.main,
  },
  subtitle: {
    marginBottom: '1em',
  },
  iconContainer: {
    marginRight: '5em',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
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
  visionBackground: {
    backgroundImage: `url(${repeatingBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  visionCard: {
    position: 'absolute',
    boxShadow: theme.shadows,
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%',
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  customSoftwareContainer: {
    marginLeft: '5em',
    marginRight: '5em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      textAlign: 'center',
      marginRight: 0,
    },
  },
}));

export default function Home({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchXs = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Grid container className={classes.mainContainer} direction="column">
        <Grid item>
          <Grid
            container
            justify="flex-end"
            alignItems="center"
            direction="row"
          >
            <Grid item className={classes.heroTextContainer}>
              <Typography variant="h2" align="center">
                Bringing superb developing <br /> at good prices!{' '}
              </Typography>
              <Grid
                container
                justify="center"
                alignItems="baseline"
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button
                    component={Link}
                    to="/contact"
                    className={classes.contactUs}
                    variant="contained"
                    onClick={() => setValue(-1)}
                  >
                    Contact us
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    component={Link}
                    to="/vision"
                    variant="outlined"
                    className={classes.learnButtonHero}
                    onClick={() => setValue(2)}
                  >
                    <span style={{ marginRight: 'auto' }}>Learn More</span>
                    <ArrowForwardIcon
                      style={{ marginRight: 'auto' }}
                      color="error"
                    ></ArrowForwardIcon>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
              <Lottie
                options={defaultOptions}
                height={'100%'}
                width={'100%'}
              ></Lottie>
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
                <span>Learn More</span>
                <ArrowForwardIcon
                  fontSize="small"
                  color="secondary"
                ></ArrowForwardIcon>
              </Button>
            </Grid>
            <Grid item>
              <ImportantDevices
                style={{ height: 210, width: 185 }}
                color="primary"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            justify={matchSm ? 'center' : 'flex-end'}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchSm ? 0 : '5em',
                textAlign: matchSm ? 'center' : null,
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
            justify={matchSm ? 'center' : 'flex-start'}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchSm ? 0 : '5em',
                textAlign: matchSm ? 'center' : null,
              }}
            >
              <Typography variant="h4">Website Development</Typography>
              <Typography variant="subtitle1">Scalable. Reach.</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Optimized for search engines and discoverability
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
        <Grid item>
          <Grid
            style={{ height: '100em', marginTop: '12em' }}
            container
            alignItems="center"
            justify="center"
          >
            <Card className={classes.visionCard}>
              <CardContent>
                <Grid
                  style={{ textAlign: 'center' }}
                  container
                  direction="column"
                >
                  <Grid item>
                    <Typography variant="h3" gutterBottom>
                      Our vision
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle">
                      Visionary insight for getting the most out of modern
                      technology.
                    </Typography>
                    <br />
                    <Button
                      component={Link}
                      to="/vision"
                      variant="outlined"
                      className={classes.learnButtonHero}
                      style={{ marginTop: '2em' }}
                      onClick={() => setValue(2)}
                    >
                      <span style={{ marginRight: 'auto' }}>Learn More</span>
                      <ArrowForwardIcon
                        style={{ marginRight: 'auto' }}
                        color="primary"
                      ></ArrowForwardIcon>
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <div className={classes.visionBackground} />
          </Grid>
        </Grid>
        <Grid
          container
          style={{ height: '80em' }}
          alignItems="center"
          className={classes.infoBackground}
        >
          <Grid
            item
            container
            direction={matchXs ? 'column' : 'row'}
            style={{
              textAlign: matchXs ? 'center' : 'inherit',
            }}
          >
            <Grid
              sm
              item
              style={{ marginLeft: matchXs ? 0 : matchSm ? '2em' : '5em' }}
            >
              <Grid
                container
                style={{ marginBottom: matchXs ? '10em' : 0 }}
                direction="column"
              >
                <Typography variant="h2" style={{ color: 'white' }}>
                  About us
                </Typography>
                <Typography variant="subtitle2">Let's get personal.</Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to="/about"
                    variant="outlined"
                    className={classes.learnButton}
                    style={{
                      color: 'white',
                      borderColor: 'white',
                      marginTop: '1em',
                    }}
                    onClick={() => setValue(3)}
                  >
                    <span style={{ marginLeft: 5 }}>Learn More</span>
                    <ArrowForwardIcon
                      style={{ marginRight: 5 }}
                      fontSize="small"
                      color="primary"
                    ></ArrowForwardIcon>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              sm
              item
              style={{
                marginRight: matchXs ? 0 : matchSm ? '2em' : '5em',
                textAlign: matchXs ? 'center' : 'right',
              }}
              spacing={matchXs ? 10 : 0}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: 'white' }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">Say hello!</Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="outlined"
                    className={classes.learnButton}
                    style={{
                      color: 'white',
                      borderColor: 'white',
                      marginTop: '1em',
                    }}
                    onClick={() => setValue(4)}
                  >
                    <span style={{ marginLeft: 5 }}>Learn More</span>
                    <ArrowForwardIcon
                      style={{ marginRight: 5 }}
                      fontSize="small"
                      color="primary"
                    ></ArrowForwardIcon>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Banner setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </>
  );
}
