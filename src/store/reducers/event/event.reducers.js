import * as Actions from "../../actions";

const initialState = {
  data: [],
  error: "",
  isLoading: false,
};

const eventsMap = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_MARKS_REQUEST:
    case Actions.GET_USER_MARKS_REQUEST:
    case Actions.CREATE_MARK_REQUEST:
    case Actions.CHANGE_MARK_REQUEST:
    case Actions.DELETE_MARK_REQUEST:
      return {
        ...initialState,
        error: "",
        isLoading: true,
      };

    case Actions.CREATE_MARK_SUCCESS:
      return {
        ...initialState,
        data: [action.payload],
        isLoading: false,
      };

    case Actions.GET_MARKS_SUCCESS:
    case Actions.GET_USER_MARKS_SUCCESS:
    case Actions.CHANGE_MARK_SUCCESS:
    case Actions.DELETE_MARK_SUCCESS:
      return {
        ...initialState,
        data: [...action.payload],
        isLoading: false,
      };

    case Actions.GET_MARKS_ERROR:
    case Actions.GET_USER_MARKS_ERROR:
    case Actions.CREATE_MARK_ERROR:
    case Actions.CHANGE_MARK_ERROR:
    case Actions.DELETE_MARK_ERROR:
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
