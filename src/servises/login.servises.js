import baseURL from "../API/api";

const handleLogin = async (values) => {
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

export default handleLogin;
