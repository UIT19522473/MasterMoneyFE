import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRegister } from "../../apis/userApis";

const useRegister = () => {
  const navigate = useNavigate();
  const [waitRegister, setWaitRegister] = useState(false);
  const [errorRegister, setErrorRegister] = useState(false);
  const [isNotEqualPassword, setIsNotEqualPassword] = useState(false);

  const register = async (name, email, password, re_password) => {
    setWaitRegister(true);
    setErrorRegister(false);
    setIsNotEqualPassword(false);

    if (password !== re_password) {
      setIsNotEqualPassword(true);
      setWaitRegister(false);
    } else {
      await apiRegister({
        name,
        email,
        password,
        re_password,
      })
        .then((response) => {
          // console.log(response.data);
          if (response.data.status === 200) {
            navigate(`/notify-verify-email`, {
              replace: true,
            });
          }
        })
        .catch((error) => {
          setWaitRegister(false);
          setErrorRegister(true);
        });
    }

    // window.open(`/notify-verify-email`, "_blank");

    // if (response.data.status === 200) {
    //   navigate(`/notify-verify-email`, {
    //     replace: true,
    //   });
    //   // window.open(`/notify-verify-email`, "_blank");

    // } else {
    //   setWaitRegister(false);
    //   navigate(`/not-found`, {
    //     replace: true,
    //   });
    // }
  };

  return { register, waitRegister, errorRegister, isNotEqualPassword };
};

export default useRegister;
