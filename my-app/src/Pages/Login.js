import React from "react";
import logoApp from "../images/logoApp.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";

import ReactLoading from "react-loading";
import useLogin from "../Hooks/users/useLogin";

const Login = () => {
  const { login, waitLogin, errorLogin } = useLogin();

  const handleSubmit = (value) => {
    const { email, password } = value;
    login(email, password);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(3, "Must be 3 characters or more")
        .max(12, "Must be 12 character or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <>
      <section className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <img
            className="mx-auto h-10 w-auto rounded-full"
            src={logoApp}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                {formik.touched.email && formik.errors.email ? (
                  <p
                    style={{ fontWeight: 500 }}
                    className="text-red-500 text-sm ml-auto"
                  >
                    {formik.errors.email}*
                  </p>
                ) : null}
                {errorLogin && (
                  <p
                    style={{ fontWeight: 500 }}
                    className="text-red-500 text-sm ml-auto"
                  >
                    email is invalid
                  </p>
                )}
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...formik.getFieldProps("email")}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                {formik.touched.password && formik.errors.password ? (
                  <p
                    style={{ fontWeight: 500 }}
                    className="text-red-500 text-sm ml-auto"
                  >
                    {formik.errors.password}*
                  </p>
                ) : null}
                {errorLogin && (
                  <p
                    style={{ fontWeight: 500 }}
                    className="text-red-500 text-sm ml-auto"
                  >
                    password is invalid
                  </p>
                )}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...formik.getFieldProps("password")}
                />
              </div>

              <div className="text-sm flex mt-2">
                <a
                  href="/forgot-password"
                  className="font-semibold text-indigo-600 hover:text-indigo-500 ml-auto"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                disabled={waitLogin}
                type="submit"
                className={`flex w-full justify-center rounded-md ${
                  waitLogin
                    ? "bg-indigo-400"
                    : "bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"
                }  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}
              >
                Sign in
                {waitLogin && (
                  <ReactLoading
                    className="ml-2"
                    type={"spin"}
                    color={"white"}
                    height={22}
                    width={22}
                  />
                )}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?
            <a
              href="/register"
              className="font-semibold leading-6 text-red-600 hover:text-red-500 ml-1"
            >
              Register
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Login;
