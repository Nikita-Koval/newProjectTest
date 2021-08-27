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

export default {
  getUserProfile,
};
