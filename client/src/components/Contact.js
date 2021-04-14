import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

import background from '../assets/donald-giannatti-Wj1D-qiOseE-unsplash.jpg';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import airplane from '../assets/send.svg';
import mobileBackground from '../assets/donald-giannatti-Wj1D-qiOseE-unsplash.jpg';

import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    paddingBottom: '10em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },

  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    paddingLeft: '1em',
    paddingRight: '1em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
  },
  message: {
    border: `2px solid ${theme.palette.primary.main}`,
    marginTop: '5em',
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.contactUs,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('sm')]: {
      height: 40,
      width: 225,
    },
  },
  mailIcon: {
    color: theme.palette.primary.dark,
    marginRight: '0.5em',
  },
  phoneIcon: {
    color: theme.palette.primary.dark,
    marginRight: '0.5em',
  },
  textInputContainer: {
    maxWidth: '20em',
  },
  textFieldContainer: {
    marginBottom: '0.5em',
  },
}));

const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

export default function Contact({ setValue }) {
  const classes = useStyles();
  const theme = useTheme();

  const [name, setName] = useState('');
  const [nameHelper, setNameHelper] = useState('');
  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');
  const [message, setMessage] = useState('');
  const [messageHelper, setMessageHelper] = useState('');

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: '',
    backgroundColor: '',
  });

  const buttonChildren = (
    <>
      Send message
      <img style={{ marginLeft: '1em' }} src={airplane} alt="paper airplane" />
    </>
  );

  const onChange = (e) => {
    let valid;

    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value);
        valid = emailRegex.test(e.target.value);

        if (!valid) {
          setEmailHelper('Invalid email');
        } else {
          setEmailHelper('');
        }
        break;

      case 'phone':
        setPhone(e.target.value);
        valid = phoneRegex.test(e.target.value);

        if (!valid) {
          setPhoneHelper('Invalid phone');
        } else {
          setPhoneHelper('');
        }
        break;

      default:
        break;
    }
  };

  const sendContact = () => {
    setLoading(true);
    axios
      .get('http://localhost:4200/mail', {
        params: { name, email, phone, message },
      })
      .then((res) => {
        setLoading(false);
        setOpen(false);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setAlert({
          open: true,
          message: 'Contact information sent successfully!',
          backgroundColor: theme.palette.success.main,
        });
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          open: true,
          message: 'Something went wrong, please try again!',
          backgroundColor: theme.palette.error.main,
        });
      });
  };

  const matchSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchMd = useMediaQuery(theme.breakpoints.down('md'));
  const matchXs = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{
          marginBottom: matchMd ? '5em' : 0,
          marginTop: matchSm ? '1em' : matchMd ? '5em' : 0,
        }}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchMd ? 'center' : undefined} variant="h2">
                Contact
              </Typography>
              <Typography
                align={matchMd ? 'center' : undefined}
                variant="body1"
              >
                I am waiting
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: '2em' }}>
              <Grid item>
                <PhoneIcon className={classes.phoneIcon} />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.primary.main,
                    fontSize: '1rem',
                  }}
                >
                  1112223333
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: '2em' }}>
              <Grid item>
                <MailIcon className={classes.mailIcon} />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.primary.main,
                    fontSize: '1rem',
                  }}
                >
                  <a
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    href="mailto:myemail@gmail.com"
                  >
                    myemail@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              className={classes.textInputContainer}
            >
              <Grid item className={classes.textFieldContainer}>
                <TextField
                  label="Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item className={classes.textFieldContainer}>
                <TextField
                  label="Email"
                  id="email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  value={email}
                  onChange={onChange}
                  fullWidth
                />
              </Grid>
              <Grid item className={classes.textFieldContainer}>
                <TextField
                  label="Phone"
                  id="phone"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  value={phone}
                  onChange={onChange}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid item className={classes.textInputContainer}>
              <TextField
                value={message}
                className={classes.message}
                id="message"
                multiline
                rows={10}
                InputProps={{ disableUnderline: true }}
                onChange={(e) => setMessage(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item container justify="center" style={{ marginTop: '2em' }}>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  email.length === 0 ||
                  phone.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                className={classes.sendButton}
                variant="contained"
                onClick={() => setOpen(true)}
              >
                Send message
                <img
                  style={{ marginLeft: '1em' }}
                  src={airplane}
                  alt="paper airplane"
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: 1302 }}
        open={open}
        onClose={() => setOpen(false)}
        fullScreen={matchXs}
        PaperProps={{
          style: {
            paddingTop: matchXs ? '1em' : '2em',
            paddingBottom: matchXs ? '1em' : '2em',
            paddingLeft: matchXs
              ? 0
              : matchSm
              ? '1em'
              : matchMd
              ? '2em'
              : '3em',
            paddingRight: matchXs
              ? 0
              : matchSm
              ? '1em'
              : matchMd
              ? '2em'
              : '3em',
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item align="center">
              <Typography variant="h4" gutterBottom>
                Confirm
              </Typography>
            </Grid>

            <Grid item className={classes.textFieldContainer}>
              <TextField
                label="Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item className={classes.textFieldContainer}>
              <TextField
                label="Email"
                id="email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                value={email}
                onChange={onChange}
                fullWidth
              />
            </Grid>
            <Grid item className={classes.textFieldContainer}>
              <TextField
                label="Phone"
                id="phone"
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                value={phone}
                onChange={onChange}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item style={{ maxWidth: matchXs ? '100%' : '100%' }}>
            <TextField
              value={message}
              className={classes.message}
              id="message"
              multiline
              rows={10}
              InputProps={{ disableUnderline: true }}
              onChange={(e) => setMessage(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid
            item
            container
            direction={matchSm ? 'column' : 'row'}
            alignItems="center"
            style={{ marginTop: '2em' }}
          >
            <Grid item>
              <Button color="primary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  email.length === 0 ||
                  phone.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                className={classes.sendButton}
                variant="contained"
                onClick={sendContact}
              >
                {loading ? <CircularProgress size={20} /> : buttonChildren}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        open={alert.open}
        message={alert.message}
        onClose={() => setAlert({ ...alert, open: false })}
      />
      <Grid
        item
        container
        alignItems="center"
        justify={matchMd ? 'center' : undefined}
        direction={matchMd ? 'column' : 'row'}
        className={classes.background}
        lg={8}
        xl={9}
      ></Grid>
    </Grid>
  );
}
