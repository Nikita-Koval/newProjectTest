import baseURL from "../API/api";

const getMarks = async (filterValue, startDateValue, endDateValue) => {
  const data = await baseURL.get(
    `api/map/get-marks?type=${filterValue || "All"}&starttime=${
      startDateValue || ""
    }&endtime=${endDateValue || ""}`,
    {
      headers: {
        "Content-type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  if (data) {
    return data;
  }
};

const createMark = async (values) => {
  const body = {
    ...values,
  };
  const data = await baseURL.post(`api/map/new-mark`, body, {
    headers: {
      "Content-type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (data) {
    return data;
  }
};

export default { getMarks, createMark };
