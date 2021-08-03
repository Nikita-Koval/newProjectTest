import * as Actions from "../actions";

const initialState = {
  isAuthenticated: false,
  error: "",
  isLoading: false,
  name: "",
  email: "",
};
const Login = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOGIN_REQUEST: {
      return {
        ...initialState,
        error: "",
        isLoading: true,
      };
    }
    case Actions.LOGIN_SUCCESS: {
      return {
        ...initialState,
        isAuthenticated: true,
        ...action.payload,
        isLoading: false,
      };
    }
    case Actions.LOGIN_ERROR: {
      return {
        ...initialState,
        error: action.payload,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default Login;
