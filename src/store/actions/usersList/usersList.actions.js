/* eslint-disable no-unused-vars */
import userProfileServices from "../../../servises/userProfile.servises";

export const GET_USERS_LIST_REQUEST = "GET_USERS_LIST_REQUEST";
export const GET_USERS_LIST_SUCCESS = "GET_USERS_LIST_SUCCESS";
export const GET_USERS_LIST_ERROR = "GET_USERS_LIST_ERROR";

export const getUserList =
  (genderValue, startAge, endAge) => async (dispatch) => {
    dispatch({
      type: GET_USERS_LIST_REQUEST,
    });
    try {
      const response = await userProfileServices.getUsersList(
        genderValue,
        startAge,
        endAge
      );

      dispatch({
        type: GET_USERS_LIST_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_USERS_LIST_ERROR,
        payload: error.response.data.message,
      });
    }
  };
