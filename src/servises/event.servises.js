import baseURL from "../API/api";

const getMarks = async () => {
  const data = await baseURL.get(`api/map/getMarks`, {
    headers: {
      "Content-type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (data) {
    return data;
  }
};

export default { getMarks };
