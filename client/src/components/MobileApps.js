import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PhoneIcon from '@material-ui/icons/PhoneIphone';

import BuildIcon from '@material-ui/icons/BuildTwoTone';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNewOutlined';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportantTwoTone';

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
}));

export default function MobileApps({ setSelectedIndex, setValue }) {
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
              to="/softwaredevelopment"
              onClick={() => setSelectedIndex(1)}
            >
              <ArrowBackIcon color="primary" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchMd ? 'center' : undefined} variant="h2">
              Mobile App Development
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
              to="/websites"
              onClick={() => setSelectedIndex(3)}
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
        className={classes.rowContainer}
        direction={matchSm ? 'column' : 'row'}
        item
        container
        style={{ marginTop: '15em', marginBottom: '15em' }}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchSm ? 'center' : undefined}
              variant="h4"
              gutterBottom
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchSm ? 'center' : undefined} variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              eum id veniam recusandae rem quasi?
            </Typography>
            <Typography align={matchSm ? 'center' : undefined} variant="body1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
              repellat consectetur ipsam non deleniti nam! Est tenetur incidunt
              blanditiis. Eius.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <PhoneIcon
            color="primary"
            style={{ height: '30em', width: '20em' }}
          />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchSm ? 'center' : 'right'}
              variant="h4"
              gutterBottom
            >
              Simoultaneous platfrom support
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchSm ? 'center' : 'right'} variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              eum id veniam recusandae rem quasi?
            </Typography>
            <Typography align={matchSm ? 'center' : 'right'} variant="body1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
              repellat consectetur ipsam non deleniti nam! Est tenetur incidunt
              blanditiis. Eius.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchMd ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ marginBottom: '15em' }}
      >
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Functional.
            </Typography>
          </Grid>
          <Grid item>
            <BuildIcon color="primary" style={{ height: 230, width: 230 }} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          style={{
            marginTop: matchMd ? '10em' : 0,
            marginBottom: matchMd ? '10em' : 0,
          }}
          direction="column"
          alignItems="center"
          md
        >
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Accessible.
            </Typography>
          </Grid>
          <Grid item>
            <AccessibilityNewIcon
              color="primary"
              style={{ height: 230, width: 230 }}
            />
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Engagement.
            </Typography>
          </Grid>
          <Grid item>
            <NotificationImportantIcon
              color="primary"
              style={{ height: 230, width: 230 }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Banner setValue={setValue} />
      </Grid>
    </Grid>
  );
}
