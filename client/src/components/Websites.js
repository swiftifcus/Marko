import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

import PollIcon from '@material-ui/icons/PollTwoTone';
import StoreIcon from '@material-ui/icons/StoreTwoTone';
import PublicIcon from '@material-ui/icons/PublicTwoTone';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedForTwoTone';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Banner from './ui/Banner';

function ArrowBackIcon(props) {
  return (
    <ArrowForwardIcon {...props} style={{ transform: 'rotate(180deg)' }} />
  );
}

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  paragraphContainer: {
    maxWidth: '30em',
  },
  icons: {
    height: 250,
    width: 250,
  },
}));

export default function Websites({ setSelectedIndex, setValue }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchMd = useMediaQuery(theme.breakpoints.down('md'));
  const matchSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchXs = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        className={classes.rowContainer}
        justify="center"
        style={{ marginTop: matchXs ? '1em' : '2em' }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3em' }}
          >
            <IconButton
              component={Link}
              to="/mobileapps"
              onClick={() => setSelectedIndex(2)}
            >
              <ArrowBackIcon color="primary" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchMd ? 'center' : undefined} variant="h2">
              Website development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchMd ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              doloribus in sunt itaque deleniti perspiciatis vitae similique!
              Atque, sed debitis incidunt quaerat accusamus voluptates doloribus
              tempora temporibus assumenda corrupti dignissimos?
            </Typography>
            <Typography
              align={matchMd ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quo
              quisquam minima ullam beatae laborum ipsa aut incidunt itaque
              fugiat doloremque culpa repudiandae quaerat sapiente magni
              voluptate, nam voluptatibus sint provident ipsum eos ex dolor.
              Quod nobis cum laboriosam unde saepe non iure voluptate ratione
              dolor, nesciunt libero minus eligendi?
            </Typography>
            <Typography
              align={matchMd ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              doloribus in sunt itaque deleniti perspiciatis vitae similique!
              Atque, sed debitis incidunt quaerat accusamus voluptates doloribus
              tempora temporibus assumenda corrupti dignissimos?
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item>
            <IconButton
              component={Link}
              to="/services"
              onClick={() => setSelectedIndex(0)}
            >
              <ArrowForwardIcon
                color="primary"
                className={classes.arrowContainer}
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchSm ? 'column' : 'row'}
        style={{ marginTop: '15em' }}
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchSm ? 'center' : undefined}
                variant="h4"
                gutterBottom
              >
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <PollIcon
                color="primary"
                style={{
                  marginLeft: '-2.75em',
                  width: 325,
                  height: 250,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.paragraphContainer} item>
          <Typography
            align={matchSm ? 'center' : undefined}
            variant="body1"
            paragraph
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            consequatur ab placeat inventore ducimus dignissimos aspernatur
            ratione totam eligendi, eos fugit, voluptate reprehenderit nemo
            praesentium.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justify="flex-end"
        alignItems="center"
        direction={matchSm ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ marginBottom: '15em', marginTop: '15em' }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                E commerce
              </Typography>
            </Grid>
            <Grid item>
              <StoreIcon color="primary" className={classes.icons} />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          className={classes.paragraphContainer}
          item
          style={{ marginLeft: matchSm ? 0 : '1em' }}
        >
          <Typography
            align={matchSm ? 'center' : undefined}
            variant="body1"
            paragraph
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            consequatur ab placeat inventore ducimus dignissimos aspernatur
            ratione totam eligendi, eos fugit, voluptate reprehenderit nemo
            praesentium.
          </Typography>
          <Typography
            align={matchSm ? 'center' : undefined}
            variant="body1"
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, facere?
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        direction={matchSm ? 'column' : 'row'}
        className={classes.rowContainer}
        direction={matchSm ? 'column' : 'row'}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <PublicIcon color="primary" className={classes.icons} />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          className={classes.paragraphContainer}
          item
          style={{ marginLeft: matchSm ? 0 : '1em' }}
        >
          <Typography
            align={matchSm ? 'center' : undefined}
            variant="body1"
            paragraph
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            consequatur ab placeat inventore ducimus dignissimos aspernatur
            ratione totam eligendi, eos fugit, voluptate reprehenderit nemo
            praesentium.
          </Typography>
          <Typography
            align={matchSm ? 'center' : undefined}
            variant="body1"
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, facere?
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        justify="flex-end"
        container
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: '15em', marginBottom: '15em' }}
        direction={matchSm ? 'column' : 'row'}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                Search Engine <br /> Optimization
              </Typography>
            </Grid>
            <Grid item>
              <YoutubeSearchedForIcon
                color="primary"
                className={classes.icons}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          className={classes.paragraphContainer}
          item
          style={{ marginLeft: matchSm ? 0 : '1em' }}
        >
          <Typography
            align={matchSm ? 'center' : undefined}
            variant="body1"
            paragraph
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            consequatur ab placeat inventore ducimus dignissimos aspernatur
            ratione totam eligendi, eos fugit, voluptate reprehenderit nemo
            praesentium.
          </Typography>
          <Typography
            align={matchSm ? 'center' : undefined}
            variant="body1"
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, facere?
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Banner setValue={setValue} />
      </Grid>
    </Grid>
  );
}
