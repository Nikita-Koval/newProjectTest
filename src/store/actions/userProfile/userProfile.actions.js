import userProfileService from "../../../servises/userProfile.servises";

export const GET_USER_PROFILE_REQUEST = "GET_USER_PROFILE_REQUEST";
export const GET_USER_PROFILE_SUCCESS = "GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_ERROR = "GET_USER_PROFILE_ERROR";

export const getUserProfile = (userId) => async (dispatch) => {
  dispatch({
    type: GET_USER_PROFILE_REQUEST,
  });
  try {
    const response = await userProfileService.getUserProfile(userId);

    dispatch({
      type: GET_USER_PROFILE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_PROFILE_ERROR,
      payload: error.response.data.message,
    });
  }
};
