import eventService from "../../../servises/event.servises";

export const GET_MARKS_REQUEST = "GET_MARKS_REQUEST";
export const GET_MARKS_SUCCESS = "GET_MARKS_SUCCESS";
export const GET_MARKS_ERROR = "GET_MARKS_ERROR";

export const CREATE_MARKS_REQUEST = "CREATE_MARKS_REQUEST";
export const CREATE_MARKS_SUCCESS = "CREATE_MARKS_SUCCESS";
export const CREATE_MARKS_ERROR = "CREATE_MARKS_ERROR";

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

export const createMark = (values) => async (dispatch) => {
  dispatch({
    type: CREATE_MARKS_REQUEST,
  });
  try {
    const response = await eventService.createMark(values);

    dispatch({
      type: CREATE_MARKS_SUCCESS,
      payload: { ...response.data },
    });
  } catch (error) {
    dispatch({
      type: CREATE_MARKS_ERROR,
      payload: error.response.data.message,
    });
  }
};
