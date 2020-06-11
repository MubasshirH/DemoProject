import React, { useState }  from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'

function Copyright() {
  return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Abc Co.
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Signin = React.memo((props) => {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {


    const obj = {
      email,
      password,
      remeberMe: true
    }

    if (email !== '' && password !== '') {
      axios.post("https://txc.azurewebsites.net/api/auth/login", obj, {
        headers:{
          'Access-Control-Allow-Origin': '*'
        }
      }).then( res => {
        var token = res.data
        axios.defaults.headers.common['Authorization'] = token;
        alert("Token returned: "+token+" no get user function available in api")
        console.log(res);
      }).catch( err => {
        console.log(err);
      })
    }
  }

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <div className={classes.form} noValidate>
            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(input)=>{
                      console.log(input.target.value);
                      setEmail(input.target.value)
                    }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(input)=>{
                      setPassword(input.target.value)
                      console.log(password);
                    }}
                />
              </Grid>

            </Grid>
            <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => { handleSubmit() }}
            >
              Sign in
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href={'JavaScript:"void(0)'} variant="body2" onClick={() => { props.history.push('/register') }}>
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
  );
})

export default Signin
