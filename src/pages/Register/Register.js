import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Checkbox } from "semantic-ui-react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import Wrapper from "../../Landing/Landing";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Register() {
  const [newm, setNewm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const history = useHistory();
  const onSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password, firstName, lastName };
    setNewm(true);
    try {
      const res = await axios.post(
        "https://ecommercebyejoor.herokuapp.com/user/register",
        user
      );

      if (res.data.success) {
        setError("");
        setSuccess(res.data.msg);
        setTimeout(() => {
          history.push("/user/verify");
        }, 2000);
      }
    } catch (err) {
      setNewm(false);
      if (!err.response.data.success) {
        setSuccess("");
        setError(err.response.data.msg);
      }
    }
  };

  const classes = useStyles();
  return (
    <Wrapper>
      <div className="register-container">
        <h3 style={{ color: "rgb(5, 5, 32)" }}>Create Account</h3>
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
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <TextField
            required={true}
            className="w-100"
            id="First Name"
            label="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <TextField
            required={true}
            className="w-100"
            id="last Name"
            label="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <TextField
            type="email"
            required={true}
            className="w-100"
            id="Email Address"
            label="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            type="password"
            required={true}
            color="red"
            className="w-100"
            id="Password"
            label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Checkbox
            color="red"
            className="w-100"
            label="I accept the Terms and Conditions"
          />
          {newm ? (
            <Button type="submit" color="red" fluid loading>
              Create Account
            </Button>
          ) : (
            <Button type="submit" color="red" fluid>
              Create Account
            </Button>
          )}
          <div className="already__registered w-100">
            <h5>Already have an account?</h5>
            <Link to="/user/login" className="mb-2">
              Login
            </Link>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}
