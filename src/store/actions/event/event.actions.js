import eventService from "../../../servises/event.servises";

export const GET_MARKS_REQUEST = "GET_MARKS_REQUEST";
export const GET_MARKS_SUCCESS = "GET_MARKS_SUCCESS";
export const GET_MARKS_ERROR = "GET_MARKS_ERROR";

export const getMarks =
  (filterValue, startDateValue, endDateValue) => async (dispatch) => {
    dispatch({
      type: GET_MARKS_REQUEST,
    });
    try {
      const response = await eventService.getMarks(
        filterValue,
        startDateValue,
        endDateValue
      );

      dispatch({
        type: GET_MARKS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_MARKS_ERROR,
        payload: error.response.data.message,
      });
    }
  };

export const GET_USER_MARKS_REQUEST = "GET_USER_MARK_REQUEST";
export const GET_USER_MARKS_SUCCESS = "GET_USER_MARK_SUCCESS";
export const GET_USER_MARKS_ERROR = "GET_USER_MARK_ERROR";

export const getUserMarks = (userId) => async (dispatch) => {
  dispatch({
    type: GET_USER_MARKS_REQUEST,
  });
  try {
    const response = await eventService.getUserMarks(userId);

    dispatch({
      type: GET_USER_MARKS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_MARKS_ERROR,
      payload: error.response.data.message,
    });
  }
};

export const CREATE_MARK_REQUEST = "CREATE_MARK_REQUEST";
export const CREATE_MARK_SUCCESS = "CREATE_MARK_SUCCESS";
export const CREATE_MARK_ERROR = "CREATE_MARK_ERROR";

export const createMark = (values) => async (dispatch) => {
  dispatch({
    type: CREATE_MARK_REQUEST,
  });
  try {
    const response = await eventService.createMark(values);

    dispatch({
      type: CREATE_MARK_SUCCESS,
      payload: { ...response.data },
    });
  } catch (error) {
    dispatch({
      type: CREATE_MARK_ERROR,
      payload: error.response.data.message,
    });
  }
};

export const CHANGE_MARK_REQUEST = "CHANGE_MARK_REQUEST";
export const CHANGE_MARK_SUCCESS = "CHANGE_MARK_SUCCESS";
export const CHANGE_MARK_ERROR = "CHANGE_MARK_ERROR";

export const changeMark = (values, itemId, userId) => async (dispatch) => {
  dispatch({
    type: CHANGE_MARK_REQUEST,
  });
  try {
    const response = await eventService.changeMark(values, itemId, userId);

    dispatch({
      type: CHANGE_MARK_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: CHANGE_MARK_ERROR,
      payload: error.response.data.message,
    });
  }
};

export const DELETE_MARK_REQUEST = "DELETE_MARK_REQUEST";
export const DELETE_MARK_SUCCESS = "DELETE_MARK_SUCCESS";
export const DELETE_MARK_ERROR = "DELETE_MARK_ERROR";

export const deleteMark = (itemId, userId) => async (dispatch) => {
  dispatch({
    type: DELETE_MARK_REQUEST,
  });
  try {
    const response = await eventService.deleteMark(itemId, userId);

    dispatch({
      type: DELETE_MARK_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_MARK_ERROR,
      payload: error.response.data.message,
    });
  }
};
