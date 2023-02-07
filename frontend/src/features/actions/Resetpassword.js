import axios from "axios";

// actions/resetPassword.js
export default function resetpassword(email) {
  return (dispatch) => {
    dispatch({ type: "RESET_PASSWORD_REQUEST" });

    return axios
      .post("/password-reset", { email })
      .then((res) => {
        dispatch({
          type: "RESET_PASSWORD_SUCCESS",
          payload: res.data.message,
        });
      })
      .catch((err) => {
        dispatch({
          type: "RESET_PASSWORD_FAILURE",
          payload: err.response.data.message,
        });
      });
  };
}
