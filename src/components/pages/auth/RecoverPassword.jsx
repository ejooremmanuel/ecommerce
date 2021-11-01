import React, { useContext, useRef, useState, useParams } from "react";
import axios from "axios";
import "./register.css";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import toast from "react-hot-toast";
// import { AuthContext } from "../../../context/AuthContext";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "100%",
    },
  },

  btn1: {
    backgroundColor: "rgb(13, 136, 136)",
    color: "#fff",
    fontWeight: "bold",
    width: "100%",
    maxWidth: "30%",
    padding: "10px",
    textAlign: "center",
    "&:hover": {
      backgroundColor: "rgb(13, 136, 136)",
      color: "#fff",
    },
  },
}));

const RecoverPassword = () => {
  const history = useHistory();
  const classes = useStyles();
  const userEmail = useRef();
  // const { isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userEmail.current.value)
      return toast.error("email is required");

    const user = {
      userEmail: userEmail.current.value,
    };

    try {
      let res = await axios.post(
        "http://localhost:7000/api/v1/auth/recover-password",
        user
      );
      if (res.data.success) toast.success(res.data.msg);
    } catch (err) {
      if (!err.response.data.success) return toast.error(err.response.data.msg);
    }
  };

  return (
    <div className="register">
      <div className="holder">
        <h3>Forgotten Password</h3>
        <form
          onSubmit={handleSubmit}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            type="email"
            id="outlined-basic"
            label="Your Email address"
            variant="outlined"
            inputRef={userEmail}
          />

          <Button type="submit" className={classes.btn1} variant="contained">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RecoverPassword;
