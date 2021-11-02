import * as Actions from "../../actions";

const initialState = {
  data: [],
  error: "",
  isLoading: false,
};

const usersList = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_USERS_LIST_REQUEST:
      return {
        ...initialState,
        error: "",
        isLoading: true,
      };

    case Actions.GET_USERS_LIST_SUCCESS:
      return {
        ...initialState,
        data: [...action.payload],
        isLoading: false,
      };

    case Actions.GET_USERS_LIST_ERROR:
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

export default usersList;
