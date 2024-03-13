import React from "react";
import ReactLoading from "react-loading";
import useConfirmRegister from "../Hooks/users/useConfirmRegister";
import { useLocation } from "react-router-dom";

const ConfirmRegister = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryParamValue = searchParams.get("token");

  useConfirmRegister(queryParamValue);

  return (
    <div className="bg-gray-100 flex h-screen">
      <div className="bg-white px-48 py-12  md:mx-auto my-auto">
        <div className="flex justify-center my-6">
          <ReactLoading
            className="ml-2"
            type={"spin"}
            color={"blue"}
            height={50}
            width={50}
          />
        </div>

        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Waiting confirm email!
          </h3>
          <p className="text-gray-600 my-2">Please wait a moment!</p>
          <p> we are verifying your account! </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRegister;
