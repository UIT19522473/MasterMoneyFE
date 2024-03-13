// useConfirmRegister.js
import { useEffect } from "react";
import { apiConfirmRegister } from "../../apis/userApis";
import { useNavigate } from "react-router-dom";

const useConfirmRegister = (queryParamValue) => {
  const navigate = useNavigate();

  useEffect(() => {
    const confirmRegister = async () => {
      try {
        const response = await apiConfirmRegister({ token: queryParamValue });
        if (response.data.status === 200) {
          navigate(`/register-successfully`, {
            replace: true,
          });
          return;
        } else {
          navigate(`/not-found`, {
            replace: true,
          });
        }
      } catch (error) {
        // Handle error from axios or API response
        console.error("Error confirming registration:", error);
        if (error.response && error.response.data) {
          console.error("API Error:", error.response.data);
          // Handle API error here
        }
        navigate(`/not-found`, {
          replace: true,
        });
      }
    };

    confirmRegister();
  }, [navigate, queryParamValue]);
};

export default useConfirmRegister;
