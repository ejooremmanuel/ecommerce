import axios from "axios";
import toast from "react-hot-toast";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });

  try {
    let res = await axios.post(
      "http://localhost:7000/api/v1/auth/login",
      userCredentials
    );
    if (res.data.success) toast.success(res.data.msg);

    dispatch({ type: "LOGIN_SUCCESS", payload: res.data.data });
  } catch (err) {
    if (!err.response.data.success) return toast.error(err.response.data.msg);
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
export const verifyUserCall = async (userCredentials, dispatch) => {
  dispatch({ type: "VERIFY_ACCOUNT_START" });

  try {
    let res = await axios.post(
      "http://localhost:7000/api/v1/auth/confirm-user",
      userCredentials
    );
    if (res.data.success) toast.success(res.data.msg);

    dispatch({ type: "VERIFY_ACCOUNT_SUCCESS", payload: res.data.data });
  } catch (err) {
    if (!err.response.data.success) return toast.error(err.response.data.msg);
    dispatch({ type: "VERIFY_ACCOUNT_FAILURE", payload: err });
  }
};

export const registerCall = async (userCredentials, dispatch) => {
  dispatch({ type: "REGISTER_START" });

  try {
    let res = await axios.post(
      "http://localhost:7000/api/v1/auth/register",
      userCredentials
    );
    if (res.data.success) toast.success(res.data.msg);

    dispatch({ type: "REGISTER_SUCCESS", payload: res.data.data });
  } catch (err) {
    if (!err.response.data.success) return toast.error(err.response.data.msg);
    dispatch({ type: "REGISTER_FAILURE", payload: err });
  }
};

export const recoverPasswordCall = async (userCredentials, dispatch) => {
  dispatch({ type: "RECOVER_PASSWORD_START" });

  try {
    let res = await axios.post(
      "http://localhost:7000/api/v1/auth/recover-password",
      userCredentials
    );
    if (res.data.success) toast.success(res.data.msg);

    dispatch({ type: "RECOVER_PASSWORD_SUCCESS", payload: res.data.data });
  } catch (err) {
    if (!err.response.data.success) return toast.error(err.response.data.msg);
    dispatch({ type: "RECOVER_PASSWORD_FAILURE", payload: err });
  }
};

export const resetPasswordCall = async (userCredentials, dispatch) => {
  dispatch({ type: "RESET_PASSWORD_START" });

  try {
    let res = await axios.post(
      "http://localhost:7000/api/v1/auth/reset-password",
      userCredentials
    );
    if (res.data.success) toast.success(res.data.msg);

    dispatch({ type: "RESET_PASSWORD_SUCCESS", payload: res.data.data });
  } catch (err) {
    if (!err.response.data.success) return toast.error(err.response.data.msg);
    dispatch({ type: "RESET_PASSWORD_FAILURE", payload: err });
  }
};
