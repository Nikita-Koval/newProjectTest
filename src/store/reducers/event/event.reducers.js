import * as Actions from "../../actions";

const initialState = {
  data: [],
  error: "",
  isLoading: false,
};

const eventsMap = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_MARKS_REQUEST:
      return {
        ...initialState,
        error: "",
        isLoading: true,
      };
    case Actions.GET_MARKS_SUCCESS:
      return {
        ...initialState,
        data: [...action.payload],
        isLoading: false,
      };

    case Actions.GET_MARKS_ERROR:
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

export default eventsMap;
