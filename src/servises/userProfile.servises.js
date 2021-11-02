import baseURL from "../API/api";

const headers = {
  "Content-type": "application/json;charset=utf-8",
  "Access-Control-Allow-Origin": "*",
};

const getUserProfile = async (userId) => {
  const data = await baseURL.get(
    `api/user/get-user-info?userId=${userId}`,
    headers
  );
  if (data) {
    return data;
  }
};

const getUsersList = async (genderValue, startAge, endAge) => {
  const data = await baseURL.get(
    `api/user/get-users-list?gender=${genderValue}&startage=${
      startAge || 0
    }&endage=${endAge || 35}`,
    headers
  );
  if (data) {
    return data;
  }
};

export default {
  getUserProfile,
  getUsersList,
};
