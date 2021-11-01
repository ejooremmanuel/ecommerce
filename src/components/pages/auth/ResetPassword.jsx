import React, { useContext, useRef } from "react";
import axios from "axios";
import "./register.css";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import toast from "react-hot-toast";
// import { AuthContext } from "../../../context/AuthContext";
import { useHistory, useParams } from "react-router-dom";

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
  const token = useParams()
  const history = useHistory();
  const classes = useStyles();
  const newPassword = useRef();
  const confirmNewPassword = useRef();
  // const { isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newPassword.current.value || !confirmNewPassword)
      return toast.error("Please the two password fields are required");

    if (newPassword.current.value !== confirmNewPassword.current.value)
      return toast.error("Passwords does not match");

    const user = {
      newPassword: newPassword.current.value,
      confirmNewPassword: confirmNewPassword.current.value,
      secretToken: token.token
    };

    console.log(user);

    try {
      let res = await axios.post(
        "http://localhost:7000/api/v1/auth/reset-password",
        user
      );
      if (res.data.success) toast.success(res.data.msg);
      history.push("/login");
    } catch (err) {
      if (!err.response.data.success) return toast.error(err.response.data.msg);
    }
  };

  return (
    <div className="register">
      <div className="holder">
        <h3>Reset Password</h3>
        <form
          onSubmit={handleSubmit}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            type="password"
            id="outlined-basic"
            label="New password"
            variant="outlined"
            inputRef={newPassword}
          />
          <TextField
            type="password"
            id="outlined-basic"
            label="Confirm new password"
            variant="outlined"
            inputRef={confirmNewPassword}
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
