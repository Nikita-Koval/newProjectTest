import eventService from "../../../servises/event.servises";

export const GET_MARKS_REQUEST = "GET_MARKS_REQUEST";
export const GET_MARKS_SUCCESS = "GET_MARKS_SUCCESS";
export const GET_MARKS_ERROR = "GET_MARKS_ERROR";

export const getMarks = () => async (dispatch) => {
  dispatch({
    type: GET_MARKS_REQUEST,
  });
  try {
    const response = await eventService.getMarks();

    dispatch({
      type: GET_MARKS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_MARKS_ERROR,
      payload: error.response.data.message,
    });
  }
};
