import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link, useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./Register.css";
import axios from "axios";
import Wrapper from "../../Landing/Landing";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Verify() {
  const classes = useStyles();
  const [newm, setNewm] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const history = useHistory();
  const onSubmit = async (e) => {
    e.preventDefault();
    setNewm(true);
    const user = { email };
    try {
      const res = await axios.post(
        "https://ecommercebyejoor.herokuapp.com/user/forgot",
        user
      );
      setSuccess(res.data.msg);
      setError("");
      setTimeout(() => {
        history.push("/user/reset");
      }, 3000);
    } catch (err) {
      setNewm(false);
      if (!err.response.data.success) {
        setError(err.response.data.msg);
        setSuccess("");
      }
    }
  };

  return (
    <Wrapper>
      <div className="register-container">
        <h3 style={{ color: "rgb(5, 5, 32)" }}>Change Password</h3>
        <form
          className={`${classes.root} mt-5`}
          onSubmit={onSubmit}
          noValidate
          autoComplete="off"
        >
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
          <TextField
            className="w-100"
            id="Email Address"
            label="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          {newm ? (
            <Button color="red" fluid loading>
              Change Password
            </Button>
          ) : (
            <Button color="red" fluid>
              Change Password
            </Button>
          )}
        </form>
      </div>
    </Wrapper>
  );
}
