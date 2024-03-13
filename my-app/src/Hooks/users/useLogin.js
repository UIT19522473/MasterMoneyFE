import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiLogin } from "../../apis/userApis";
import { useDispatch } from "react-redux";

import { UserLogin } from "../../Features/user/userSlice";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [waitLogin, setWaitLogin] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);

  const login = async (email, password) => {
    setWaitLogin(true);
    setErrorLogin(false);

    await apiLogin({
      email,
      password,
    })
      .then((response) => {
        if (response.data.status === 200) {
          dispatch(UserLogin(response.data));
          navigate(`/`, {
            replace: true,
          });
        }
      })
      .catch((error) => {
        setWaitLogin(false);
        setErrorLogin(true);
      });
  };

  return { login, waitLogin, errorLogin };
};

export default useLogin;
