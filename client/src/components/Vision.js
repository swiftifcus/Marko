import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// import vision from '../assets/vision.svg';
import binoculars from '../assets/1536672881.svg';
import technology from '../assets/1375181369.svg';
import handshake from '../assets/1490609861.svg';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevicesTwoTone';

import brush from '../assets/Brush1.svg';
import build from '../assets/1329374127.svg';
import review from '../assets/reviewIcon.svg';
import launch from '../assets/r-is-for-rocket.svg';

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

export default function Vision({ setValue }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: '2em' }}>
        <Typography align={matchMd ? 'center' : undefined} variant="h2">
          Insights
        </Typography>
      </Grid>
      <Grid
        item
        style={{ marginTop: '5em' }}
        container
        direction={matchMd ? 'column' : 'row'}
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item lg>
          <img
            style={{
              maxWidth: matchSm ? '300px' : '40em',
              marginRight: matchMd ? 0 : '5em',
              marginBottom: matchMd ? '5em' : 0,
            }}
            src={binoculars}
            alt="mountain through binoculars"
          />
        </Grid>
        <Grid item container style={{ maxWidth: '40em' }} direction="column" lg>
          <Grid item>
            <Typography align="right" variant="h4" gutterBottom>
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="right" variant="body1" paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              reiciendis deserunt architecto odio laboriosam consequatur!
            </Typography>
            <Typography align="right" variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut,
              officia? Veritatis tempora nostrum autem rerum dicta nesciunt
              corporis excepturi fugiat?
            </Typography>
            <Typography align="right" variant="body1" paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              ducimus rem, quos repudiandae ad rerum recusandae similique
              laudantium exercitationem dolorum? Voluptate sunt at vero iste
              odit labore corrupti fuga. Harum!
            </Typography>
            <Typography align="right" variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              itaque sequi mollitia!
            </Typography>
            <Typography align="right" variant="body1" paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              incidunt rem facilis temporibus asperiores alias.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        style={{ marginTop: '10em', marginBottom: '10em' }}
        alignItems="center"
        className={classes.rowContainer}
        direction={matchMd ? 'column' : 'row'}
      >
        <Grid item container style={{ maxWidth: '40em' }} direction="column" lg>
          <Grid item>
            <Typography
              align={matchMd ? 'center' : undefined}
              variant="h4"
              gutterBottom
            >
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchMd ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              reiciendis deserunt architecto odio laboriosam consequatur!
            </Typography>
            <Typography
              align={matchMd ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut,
              officia? Veritatis tempora nostrum autem rerum dicta nesciunt
              corporis excepturi fugiat?
            </Typography>
            <Typography
              align={matchMd ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              ducimus rem, quos repudiandae ad rerum recusandae similique
              laudantium exercitationem dolorum? Voluptate sunt at vero iste
              odit labore corrupti fuga. Harum!
            </Typography>
            <Typography
              align={matchMd ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              itaque sequi mollitia!
            </Typography>
            <Typography
              align={matchMd ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              incidunt rem facilis temporibus asperiores alias.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justify={matchMd ? 'center' : 'flex-end'} lg>
          <img
            style={{ maxWidth: '20em', margin: 0 }}
            src={technology}
            alt="server stack"
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchMd ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#b3b3b3', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchMd ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ marginTop: '5em', color: 'black' }}
              align={matchMd ? 'center' : undefined}
            >
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ maxWidth: '20em', color: 'white' }}
              paragraph
              align={matchMd ? 'center' : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quidem, alias cumque ab iste hic animi illo nisi. Cum cupiditate
              eius dolor ratione ex iste quia accusamus necessitatibus animi
              harum?
            </Typography>
            <Typography
              variant="body1"
              style={{ maxWidth: '20em', color: 'white' }}
              paragraph
              align={matchMd ? 'center' : undefined}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              a alias ullam fugiat iure culpa. Eius corrupti dolore sequi
              tenetur, quis dignissimos ad dicta beatae.
            </Typography>
            <Typography
              variant="body1"
              style={{ maxWidth: '20em', color: 'white' }}
              paragraph
              align={matchMd ? 'center' : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              vel voluptatem mollitia tempore voluptates consectetur sed
              corrupti ipsam provident doloremque. Omnis excepturi eligendi
              fugiat cupiditate impedit esse, mollitia, commodi molestias
              recusandae labore obcaecati. Accusantium, quis tenetur?
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            style={{ maxWidth: 700 }}
            src={handshake}
            alt="handshake"
            width="100%"
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchMd ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#ff7373', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchMd ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ marginTop: '5em', color: 'black' }}
              align={matchMd ? 'center' : undefined}
            >
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ maxWidth: '20em', color: 'white' }}
              paragraph
              align={matchMd ? 'center' : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quidem, alias cumque ab iste hic animi illo nisi. Cum cupiditate
              eius dolor ratione ex iste quia accusamus necessitatibus animi
              harum?
            </Typography>
            <Typography
              variant="body1"
              style={{ maxWidth: '20em', color: 'white' }}
              paragraph
              align={matchMd ? 'center' : undefined}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              a alias ullam fugiat iure culpa. Eius corrupti dolore sequi
              tenetur, quis dignissimos ad dicta beatae.
            </Typography>
            <Typography
              variant="body1"
              style={{ maxWidth: '20em', color: 'white' }}
              paragraph
              align={matchMd ? 'center' : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              vel voluptatem mollitia tempore voluptates consectetur sed
              corrupti ipsam provident doloremque. Omnis excepturi eligendi
              fugiat cupiditate impedit esse, mollitia, commodi molestias
              recusandae labore obcaecati. Accusantium, quis tenetur?
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <ImportantDevicesIcon style={{ width: 750, height: 590 }} />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchMd ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#a67c52', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchMd ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchMd ? 'center' : undefined}
              gutterBottom
              style={{ marginTop: '5em', color: 'black' }}
            >
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ maxWidth: '20em', color: 'white' }}
              paragraph
              align={matchMd ? 'center' : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quidem, alias cumque ab iste hic animi illo nisi. Cum cupiditate
              eius dolor ratione ex iste quia accusamus necessitatibus animi
              harum?
            </Typography>
            <Typography
              variant="body1"
              style={{ maxWidth: '20em', color: 'white' }}
              paragraph
              align={matchMd ? 'center' : undefined}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              a alias ullam fugiat iure culpa. Eius corrupti dolore sequi
              tenetur, quis dignissimos ad dicta beatae.
            </Typography>
            <Typography
              variant="body1"
              style={{ maxWidth: '20em', color: 'white' }}
              paragraph
              align={matchMd ? 'center' : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              vel voluptatem mollitia tempore voluptates consectetur sed
              corrupti ipsam provident doloremque. Omnis excepturi eligendi
              fugiat cupiditate impedit esse, mollitia, commodi molestias
              recusandae labore obcaecati. Accusantium, quis tenetur?
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            width="100%"
            style={{ maxWidth: 1000 }}
            src={brush}
            alt="magnifying glass"
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchMd ? 'column' : 'row'}
        style={{ backgroundColor: '#39b54a', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchMd ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ marginTop: '5em', color: 'black' }}
              align={matchMd ? 'center' : undefined}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ maxWidth: '20em', color: 'white' }}
              paragraph
              align={matchMd ? 'center' : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quidem, alias cumque ab iste hic animi illo nisi. Cum cupiditate
              eius dolor ratione ex iste quia accusamus necessitatibus animi
              harum?
            </Typography>
            <Typography
              variant="body1"
              style={{ maxWidth: '20em', color: 'white' }}
              paragraph
              align={matchMd ? 'center' : undefined}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              a alias ullam fugiat iure culpa. Eius corrupti dolore sequi
              tenetur, quis dignissimos ad dicta beatae.
            </Typography>
            <Typography
              variant="body1"
              style={{ maxWidth: '20em', color: 'white' }}
              paragraph
              align={matchMd ? 'center' : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              vel voluptatem mollitia tempore voluptates consectetur sed
              corrupti ipsam provident doloremque. Omnis excepturi eligendi
              fugiat cupiditate impedit esse, mollitia, commodi molestias
              recusandae labore obcaecati. Accusantium, quis tenetur?
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img width="100%" src={review} alt="magnifying glass" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchMd ? 'column' : 'row'}
        style={{ backgroundColor: '#fbb03b', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchMd ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ marginTop: '5em', color: 'black' }}
              align={matchMd ? 'center' : undefined}
            >
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ maxWidth: '20em', color: 'white' }}
              paragraph
              align={matchMd ? 'center' : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quidem, alias cumque ab iste hic animi illo nisi. Cum cupiditate
              eius dolor ratione ex iste quia accusamus necessitatibus animi
              harum?
            </Typography>
            <Typography
              variant="body1"
              style={{ maxWidth: '20em', color: 'white' }}
              paragraph
              align={matchMd ? 'center' : undefined}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              a alias ullam fugiat iure culpa. Eius corrupti dolore sequi
              tenetur, quis dignissimos ad dicta beatae.
            </Typography>
            <Typography
              variant="body1"
              style={{ maxWidth: '20em', color: 'white' }}
              paragraph
              align={matchMd ? 'center' : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              vel voluptatem mollitia tempore voluptates consectetur sed
              corrupti ipsam provident doloremque. Omnis excepturi eligendi
              fugiat cupiditate impedit esse, mollitia, commodi molestias
              recusandae labore obcaecati. Accusantium, quis tenetur?
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            style={{ maxWidth: matchMd ? 700 : 1000 }}
            src={build}
            width="100%"
            alt="construction"
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchMd ? 'column' : 'row'}
        style={{ backgroundColor: '#c1272d', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchMd ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ marginTop: '5em', color: 'black' }}
              align={matchMd ? 'center' : undefined}
            >
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ maxWidth: '20em', color: 'white' }}
              paragraph
              align={matchMd ? 'center' : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quidem, alias cumque ab iste hic animi illo nisi. Cum cupiditate
              eius dolor ratione ex iste quia accusamus necessitatibus animi
              harum?
            </Typography>
            <Typography
              variant="body1"
              style={{ maxWidth: '20em', color: 'white' }}
              paragraph
              align={matchMd ? 'center' : undefined}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              a alias ullam fugiat iure culpa. Eius corrupti dolore sequi
              tenetur, quis dignissimos ad dicta beatae.
            </Typography>
            <Typography
              variant="body1"
              style={{ maxWidth: '20em', color: 'white' }}
              paragraph
              align={matchMd ? 'center' : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              vel voluptatem mollitia tempore voluptates consectetur sed
              corrupti ipsam provident doloremque. Omnis excepturi eligendi
              fugiat cupiditate impedit esse, mollitia, commodi molestias
              recusandae labore obcaecati. Accusantium, quis tenetur?
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            width="100%"
            style={{ height: 800 }}
            src={launch}
            alt="magnifying glass"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
