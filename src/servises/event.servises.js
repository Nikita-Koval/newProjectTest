import baseURL from "../API/api";

const headers = {
  "Content-type": "application/json;charset=utf-8",
  "Access-Control-Allow-Origin": "*",
};

const getMarks = async (filterValue, startDateValue, endDateValue) => {
  const data = await baseURL.get(
    `api/map/get-marks?type=${filterValue || "All"}&starttime=${
      startDateValue || ""
    }&endtime=${endDateValue || ""}`,
    headers
  );
  if (data) {
    return data;
  }
};

const getUserMarks = async (userId) => {
  const data = await baseURL.get(
    `api/map/get-user-marks?userId=${userId || "610d3d604b9f581c68a2a651"}`,
    headers
  );
  if (data) {
    return data;
  }
};

const createMark = async (values) => {
  const body = {
    ...values,
  };
  const data = await baseURL.post(`api/map/new-mark`, body, headers);
  if (data) {
    return data;
  }
};

const changeMark = async (values, itemId, userId) => {
  const body = {
    ...values,
    itemId,
    userId,
  };
  const data = await baseURL.patch(`api/map/change-mark`, body, headers);
  if (data) {
    return data;
  }
};

const deleteMark = async (itemId, userId) => {
  const data = await baseURL.delete(
    `api/map/delete-mark?itemId=${itemId}&userId=${userId}`,
    headers
  );
  if (data) {
    return data;
  }
};

export default {
  getMarks,
  getUserMarks,
  createMark,
  changeMark,
  deleteMark,
};
