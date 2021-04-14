import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import history from '../assets/1377986179.svg';
import Avatar from '@material-ui/core/Avatar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

import profile from '../assets/IMG_0118-1.png';

import Banner from './ui/Banner';

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.5rem',
    maxWidth: '50em',
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  avatar: {
    height: '25em',
    width: '25em',
    [theme.breakpoints.down('sm')]: {
      height: '20em',
      width: '20em',
      maxHeight: 300,
      maxWidth: 300,
    },
  },
}));

export default function About({ setValue }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchMd = useMediaQuery(theme.breakpoints.down('md'));
  const matchSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction="column">
      <Grid
        item
        style={{ marginTop: matchMd ? '1em' : '2em' }}
        className={classes.rowContainer}
      >
        <Typography align={matchMd ? 'center' : undefined} variant="h2">
          About us
        </Typography>
      </Grid>
      <Grid
        item
        style={{ marginTop: '3em' }}
        className={classes.rowContainer}
        container
        justify="center"
      >
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo
          eveniet, iste autem soluta aspernatur. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quo, quos repudiandae. Saepe suscipit
          dolorem consequuntur!
        </Typography>
      </Grid>
      <Grid
        className={classes.rowContainer}
        item
        container
        justify="space-around"
        direction={matchMd ? 'column' : 'row'}
        alignItems={matchMd ? 'center' : undefined}
        style={{ marginTop: '10em', marginBottom: '10em' }}
      >
        <Grid item>
          <Grid
            item
            container
            style={{ maxWidth: '35em' }}
            direction="column"
            lg
          >
            <Grid item>
              <Typography
                align={matchMd ? 'center' : undefined}
                variant="h4"
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchMd ? 'center' : undefined}
                paragraph
              >
                Lorem ipsum dolor sit amet.
              </Typography>
              <Typography
                variant="body1"
                align={matchMd ? 'center' : undefined}
                paragraph
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam reiciendis labore quasi nesciunt dolores porro? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Dolore quae
                tempore unde dolor ipsam rerum officia fugiat magni
                exercitationem maxime.
              </Typography>
              <Typography
                variant="body1"
                align={matchMd ? 'center' : undefined}
                paragraph
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                possimus maxime nesciunt cupiditate corrupti, nobis delectus eum
                recusandae facere minima. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Laudantium distinctio ab quidem
                incidunt non debitis corporis libero porro pariatur eligendi?
                Voluptatum ullam soluta totam temporibus quo quae incidunt
                delectus impedit.
              </Typography>
              <Typography
                variant="body1"
                align={matchMd ? 'center' : undefined}
                paragraph
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                alias temporibus velit voluptas eaque dolore consequuntur
                voluptates? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Esse harum minus sequi repudiandae doloremque odit!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify="center" lg>
            <img
              style={{
                height: '25em',
                width: '25em',
                maxHeight: matchMd ? 200 : undefined,
              }}
              src={history}
              alt="blah"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginBottom: '15em' }}
      >
        <Grid item>
          <Typography variant="h4" align="center" gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Marko Ilic
          </Typography>
          <Typography variant="body1" paragraph align="center">
            I am a programmer!
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="founder" src={profile} className={classes.avatar} />
        </Grid>
      </Grid>
      <Grid item>
        <Banner setValue={setValue} />
      </Grid>
    </Grid>
  );
}
