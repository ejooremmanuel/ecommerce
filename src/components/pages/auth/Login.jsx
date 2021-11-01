import React, {useContext, useRef} from 'react';
import axios from 'axios';
import './register.css';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core';
import toast from 'react-hot-toast';
import {AuthContext} from '../../../context/AuthContext';
import {loginCall} from '../../../apiCalls';
import { useHistory } from 'react-router';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '100%',
    },
  },

  btn1: {
    backgroundColor: 'rgb(13, 136, 136)',
    color: '#fff',
    fontWeight: 'bold',
    width: '100%',
    maxWidth: '30%',
    padding: '10px',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: 'rgb(13, 136, 136)',
      color: '#fff',
    }
  }

}));

const Login = () => {
  const history = useHistory()
  const classes = useStyles();
  const userInput = useRef();
  const password = useRef();
  // const { isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.current.value) return toast.error('Username is required');
    if (!password.current.value) return toast.error('Password is required');

    const user = {
      userInput: userInput.current.value,
      password: password.current.value,
    }

    try {
      let res = await axios.post(
        "http://localhost:7000/api/v1/auth/login",
        user
      );
      if (res.data.success) toast.success(res.data.msg);
      localStorage.setItem("user", JSON.stringify(res.data.data.user));
      localStorage.setItem("token", JSON.stringify(res.data.data.token));
      console.log(res.data.data.user);
      history.push("/");
    } catch (err) {
      if (!err.response.data.success) return toast.error(err.response.data.msg);
    }

    // loginCall(user, dispatch);

  }

  return (
    <div className="register">
      <div className="holder">
        <h3>User Login</h3>
        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
          <TextField 
            type="text" 
            id="outlined-basic" 
            label="Username or Email" 
            variant="outlined" 
            inputRef={userInput}
          />

          <TextField 
            type="password"
            id="outlined-basic" 
            label="Password" 
            variant="outlined" 
            inputRef={password}
          />

          <Button type="submit" className={classes.btn1} variant="contained">
            Login
          </Button>
        </form>
        <Button >

        </Button>
      </div>
    </div>
  )
}

export default Login;
