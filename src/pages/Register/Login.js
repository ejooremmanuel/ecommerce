import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link, useHistory } from "react-router-dom";
import { Button, Checkbox } from "semantic-ui-react";
import "./Register.css";
import Wrapper from "../../Landing/Landing";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Login() {
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);
  const {
    email,
    error,
    success,
    setError,
    setSuccess,
    password,
    setPassword,
    setEmail,
  } = useContext(UserContext);
  const classes = useStyles();
  const [newm, setNewm] = useState(false);
  const [newmm, setNewmm] = useState(true);
  const onSubmit = async (e) => {
    e.preventDefault();
    const newuser = { email, password };
    setNewm(true);
    console.log(email, password);
    dispatch({ type: "LOGIN_START" });
    try {
      let res = await axios.post("https://ecommercebyejoor.herokuapp.com/user/login", newuser);
      if (res.data.success);
      setSuccess(res.data.msg);
      setError("");
      setTimeout(() => {
        setSuccess("");
        history.push("/");
      }, 2000);

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.data });
    } catch (err) {
      setNewm(false);
      setSuccess("");
      if (!err.response.data.success) dispatch({ type: "LOGIN_FAILURE" });
      setError(err.response.data.msg);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <Wrapper>
      <div className="register-container">
        <h3 style={{ color: "rgb(5, 5, 32)" }}>Login</h3>
        {error.length > 0 ? (
          <div
            style={{
              color: "rgb(255, 255,255)",
              backgroundColor: "red",
              width: "100%",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
            }}
          >
            {error}
          </div>
        ) : (
          ""
        )}
        {success.length > 0 ? (
          <div
            style={{
              color: "rgb(255, 255,255)",
              backgroundColor: "green",
              width: "100%",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
            }}
          >
            {success}
          </div>
        ) : (
          ""
        )}
        <form
          className={`${classes.root} mt-5`}
          onSubmit={onSubmit}
          noValidate
          autoComplete="off"
        >
          <TextField
            className="w-100"
            type="email"
            id="Email Address"
            label="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            color="red"
            type={newmm ? "password" : "text"}
            className="w-100"
            id="Password"
            label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {newmm ? (
            <VisibilityOffIcon
              style={{
                position: "relative",
                bottom: "50px",
                left: "110px",
                cursor: "pointer",
              }}
              onClick={() => {
                setNewmm(!newmm);
              }}
            />
          ) : (
            <VisibilityIcon
              onClick={() => {
                setNewmm(!newmm);
              }}
              style={{
                position: "relative",
                bottom: "50px",
                left: "110px",
                cursor: "pointer",
              }}
            />
          )}
          <Checkbox
            color="red"
            className="w-100"
            label="I accept the Terms and Conditions"
          />
          {newm ? (
            <Button color="red" fluid loading>
              Login
            </Button>
          ) : (
            <Button color="red" fluid>
              Login
            </Button>
          )}
          <div className="already__registered w-100">
            <h5>Don't have an account?</h5>
            <Link to="/user/register" className="mb-2">
              Register
            </Link>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}
