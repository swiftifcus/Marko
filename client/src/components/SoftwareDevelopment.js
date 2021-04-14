import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LightbulbIcon from '@material-ui/icons/EmojiObjects';
import TimerIcon from '@material-ui/icons/Timer';
import MonetizationIcon from '@material-ui/icons/MonetizationOn';
import DescriptionIcon from '@material-ui/icons/Description';
import StorageIcon from '@material-ui/icons/Storage';
import PhoneIcon from '@material-ui/icons/PhoneIphone';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Banner from './ui/Banner';

import roots from '../assets/root.svg';

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
  itemContainer: {
    maxWidth: '40em',
  },
}));

export default function SoftwareDevelopment({ setValue, setSelectedIndex }) {
  const theme = useTheme();
  const classes = useStyles();
  const matchXs = useMediaQuery(theme.breakpoints.down('xs'));
  const matchSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchMd = useMediaQuery(theme.breakpoints.down('md'));

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
              to="/services"
              onClick={() => setSelectedIndex(0)}
            >
              <ArrowBackIcon color="primary" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchMd ? 'center' : undefined} variant="h2">
              Custom software development
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
              to="/mobileapps"
              onClick={() => setSelectedIndex(2)}
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
        justify="center"
        style={{ marginTop: '15em', marginBottom: '20em' }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography variant="h4">Save enery</Typography>
          </Grid>
          <Grid item>
            <LightbulbIcon fontSize="large" color="secondary" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            maxWidth: '40em',
            marginTop: matchSm ? '10em' : 0,
            marginBottom: matchSm ? '10em' : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4">Save time</Typography>
          </Grid>
          <Grid item>
            <TimerIcon fontSize="large" color="secondary" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography variant="h4">Save money</Typography>
          </Grid>
          <Grid item>
            <MonetizationIcon fontSize="large" color="secondary" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchMd ? 'column' : 'row'}
        alignItems={matchMd ? 'center' : undefined}
        justify="space-around"
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{ marginBottom: matchMd ? '15em' : 0 }}
          direction={matchSm ? 'column' : 'row'}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align={matchMd ? 'center' : undefined} variant="h4">
                Digital documents and data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchMd ? 'center' : undefined}
                variant="body1"
                paragraph
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores molestiae unde dignissimos nemo autem nostrum harum
                neque a suscipit sed?
              </Typography>
              <Typography
                align={matchMd ? 'center' : undefined}
                variant="body1"
                paragraph
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
                in fugit distinctio culpa quae possimus illum perspiciatis? Nam
                ab harum minus nihil, sapiente cumque numquam ipsa maxime
                excepturi unde illum dolorem amet asperiores rerum adipisci sed
                dignissimos architecto dolore fugit molestias perferendis animi
                possimus est? Nisi maiores harum doloremque suscipit.
              </Typography>
              <Typography
                align={matchMd ? 'center' : undefined}
                variant="body1"
                paragraph
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                quos eius molestias eos tempora aspernatur officia at! Magni,
                minima eum animi ea aut alias, fugit dolores explicabo quam
                nulla consequuntur.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <DescriptionIcon
              style={{ height: 270, width: 270 }}
              color="primary"
            />
          </Grid>
        </Grid>
        <Grid item container className={classes.itemContainer} md>
          <Grid item md>
            <StorageIcon style={{ height: 270, width: 270 }} color="primary" />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align={matchMd ? 'center' : 'right'} variant="h4">
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchMd ? 'center' : 'right'}
                variant="body1"
                paragraph
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores molestiae unde dignissimos nemo autem nostrum harum
                neque a suscipit sed?
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: '20em', marginBottom: '20em' }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src={roots}
              alt="tree with roots extending out"
              height={matchSm ? '300em' : '450em'}
              width={matchSm ? '300em' : '450em'}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" align="center" gutterBottom>
              Root cause analysis
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, ipsum!
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus harum qui tenetur iure assumenda sed enim aspernatur
              distinctio repellat cupiditate reprehenderit esse, earum
              temporibus rerum?
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchMd ? 'column' : 'row'}
        alignItems={matchMd ? 'center' : undefined}
        justify="space-around"
        style={{ marginBottom: '20em' }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{ marginBottom: matchMd ? '15em' : 0 }}
          direction={matchSm ? 'column' : 'row'}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align={matchMd ? 'center' : undefined} variant="h4">
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchMd ? 'center' : undefined}
                variant="body1"
                paragraph
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores molestiae unde dignissimos nemo autem nostrum harum
                neque a suscipit sed?
              </Typography>
              <Typography
                align={matchMd ? 'center' : undefined}
                variant="body1"
                paragraph
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
                in fugit distinctio culpa quae possimus illum perspiciatis? Nam
                ab harum minus nihil, sapiente cumque numquam ipsa maxime
                excepturi unde illum dolorem amet asperiores rerum adipisci sed
                dignissimos architecto dolore fugit molestias perferendis animi
                possimus est? Nisi maiores harum doloremque suscipit.
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                quos eius molestias eos tempora aspernatur officia at! Magni,
                minima eum animi ea aut alias, fugit dolores explicabo quam
                nulla consequuntur.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <AutorenewIcon
              style={{ height: 270, width: 270 }}
              color="primary"
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchSm ? 'column' : 'row'}
          className={classes.itemContainer}
          md
        >
          <Grid item md>
            <PhoneIcon style={{ height: 270, width: 270 }} color="primary" />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchMd ? 'center' : 'right'}>
                UX and UI
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchMd ? 'center' : 'right'}
                paragraph
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores molestiae unde dignissimos nemo autem nostrum harum
                neque a suscipit sed?
              </Typography>
              <Typography
                variant="body1"
                align={matchMd ? 'center' : 'right'}
                paragraph
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores molestiae unde dignissimos nemo autem nostrum harum
              </Typography>
              <Typography
                variant="body1"
                align={matchMd ? 'center' : 'right'}
                paragraph
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores molestiae unde dignissimos nemo autem nostrum harum
                neque a suscipit sed? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Officiis, quae!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Banner setValue={setValue} />
      </Grid>
    </Grid>
  );
}
