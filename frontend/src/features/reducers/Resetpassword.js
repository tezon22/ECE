/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  loading: false,
  message: "",
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "RESET_PASSWORD_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "RESET_PASSWORD_SUCCESS":
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: "",
      };
    case "RESET_PASSWORD_FAILURE":
      return {
        ...state,
        loading: false,
        message: "",
        error: action.payload,
      };
    default:
      return state;
  }
};