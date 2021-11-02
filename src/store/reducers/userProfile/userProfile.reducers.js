import * as Actions from "../../actions";

const initialState = {
  data: [],
  error: "",
  isLoading: false,
};

const userProfile = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_USER_PROFILE_REQUEST:
      return {
        ...initialState,
        error: "",
        isLoading: true,
      };

    case Actions.GET_USER_PROFILE_SUCCESS:
      return {
        ...initialState,
        data: [...action.payload],
        isLoading: false,
      };

    case Actions.GET_USER_PROFILE_ERROR:
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

export default userProfile;
