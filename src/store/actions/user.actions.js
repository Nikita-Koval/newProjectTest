import loginService from "../../servises/user.servises";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_ERROR = "REGISTRATION_ERROR";

export const login = (values) => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  try {
    const response = await loginService.login(values);

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

export const registration = (values) => async (dispatch) => {
  dispatch({
    type: REGISTRATION_REQUEST,
  });
  try {
    const response = await loginService.registration(values);
    dispatch({
      type: REGISTRATION_SUCCESS,
      payload: { ...response.data.info },
    });
  } catch (error) {
    dispatch({
      type: REGISTRATION_ERROR,
      payload: error.response.data.message,
    });
  }
};
