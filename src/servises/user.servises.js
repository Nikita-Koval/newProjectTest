import baseURL from "../API/api";

const login = async (values) => {
  const body = {
    ...values,
  };
  const data = await baseURL.post(`api/auth/login`, body, {
    headers: {
      "Content-type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (data) {
    localStorage.setItem("token", data.data.token);
  }

  return data;
};

const registration = async (values) => {
  const body = {
    ...values,
  };
  const data = await baseURL.post(`api/auth/registration`, body, {
    headers: {
      "Content-type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (data) {
    localStorage.setItem("token", data.data.token);
  }

  return data;
};

export default { login, registration };
