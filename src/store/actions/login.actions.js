import loginService from "../../servises/login.servises";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const Login = (values) => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  try {
    const response = await loginService(values);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { ...response.data.info },
    });
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR,
      payload: error.response.data.message,
    });
  }
};
