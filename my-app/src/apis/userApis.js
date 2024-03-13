import axios from "axios";

// api register: data: {name, email, password, re_password}
const apiRegister = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_URL_SERVER_API}/users/register`,

    { ...data }
  );

  return response;
};

// api confirm register: data: {token}
const apiConfirmRegister = async (data) => {
  const { token } = data;
  const response = await axios.get(
    `${process.env.REACT_APP_URL_SERVER_API}/users/confirm-register?token=${token}`
  );
  return response;
};

// api login: data: {email, password}
const apiLogin = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_URL_SERVER_API}/users/login`,
    { ...data }
  );
  return response;
};

// api forgot password: data: {email}
const apiForgotPassword = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_URL_SERVER_API}/users/forgot-password`,
    { ...data }
  );
  return response;
};

// api change password: data: {token, password,rePassword}
const apiChangePassword = async (data) => {
  const { token, password, rePassword } = data;
  const response = await axios.post(
    `${process.env.REACT_APP_URL_SERVER_API}/users/change-password?token=${token}`,
    { password, rePassword }
  );
  return response;
};

export {
  apiRegister,
  apiConfirmRegister,
  apiLogin,
  apiForgotPassword,
  apiChangePassword,
};
