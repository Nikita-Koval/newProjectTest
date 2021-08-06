import * as Actions from "../actions";

const initialState = {
  isAuthenticated: false,
  error: "",
  isLoading: false,
  name: "",
  email: "",
};
const login = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOGIN_REQUEST:
    case Actions.REGISTRATION_REQUEST:
      return {
        ...initialState,
        error: "",
        isLoading: true,
      };

    case Actions.LOGIN_SUCCESS:
    case Actions.REGISTRATION_SUCCESS:
      return {
        ...initialState,
        isAuthenticated: true,
        ...action.payload,
        isLoading: false,
      };

    case Actions.LOGIN_ERROR:
    case Actions.REGISTRATION_ERROR:
      return {
        ...initialState,
        error: action.payload,
        isLoading: false,
      };

    default: {
      return state;
    }
  }
};

export default login;
