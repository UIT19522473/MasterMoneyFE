import React from "react";
import logoApp from "../images/logoApp.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";

import ReactLoading from "react-loading";
import useRegister from "../Hooks/users/useRegister";

const Register = () => {
  const { register, waitRegister, errorRegister, isNotEqualPassword } =
    useRegister();

  const handleSubmit = (value) => {
    // e.preventDefault();
    const { name, email, password, re_password } = value;
    register(name, email, password, re_password);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      re_password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(3, "Must be 3 characters or more")
        .max(12, "Must be 12 character or less")
        .required("Required"),
      re_password: Yup.string()
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
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register your new account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                {formik.touched.name && formik.errors.name ? (
                  <p
                    style={{ fontWeight: 500 }}
                    className="text-red-500 text-sm ml-auto"
                  >
                    {formik.errors.name}*
                  </p>
                ) : null}
              </div>
              <div className="mt-2">
                <input
                  // onChange={(e) => setName(e.target.value)}
                  // value={name}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...formik.getFieldProps("name")}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email Address
                </label>
                {formik.touched.email && formik.errors.email ? (
                  <p
                    style={{ fontWeight: 500 }}
                    className="text-red-500 text-sm ml-auto"
                  >
                    {formik.errors.email}*
                  </p>
                ) : null}

                {errorRegister && (
                  <p
                    style={{ fontWeight: 500 }}
                    className="text-red-500 text-sm ml-auto"
                  >
                    email was registered
                  </p>
                )}
              </div>
              <div className="mt-2">
                <input
                  // onChange={(e) => setEmail(e.target.value)}
                  // value={email}
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
                    className="text-red-500 text-sm"
                  >
                    {formik.errors.password}*
                  </p>
                ) : null}
              </div>

              <div className="mt-2">
                <input
                  // onChange={(e) => setPassword(e.target.value)}
                  // value={password}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...formik.getFieldProps("password")}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="re_password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Retype password
                </label>
                {formik.touched.re_password && formik.errors.re_password ? (
                  <p
                    style={{ fontWeight: 500 }}
                    className="text-red-500 text-sm ml-auto"
                  >
                    {formik.errors.re_password}*
                  </p>
                ) : null}

                {isNotEqualPassword && (
                  <p
                    style={{ fontWeight: 500 }}
                    className="text-red-500 text-sm ml-auto"
                  >
                    retype password is not match
                  </p>
                )}
              </div>

              <div className="mt-2">
                <input
                  // onChange={(e) => setRe_password(e.target.value)}
                  // value={re_password}
                  id="re_password"
                  name="re_password"
                  type="password"
                  // autoComplete="current-password"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...formik.getFieldProps("re_password")}
                />
              </div>
            </div>

            <div>
              <button
                disabled={waitRegister}
                type="submit"
                className={`flex w-full justify-center rounded-md ${
                  waitRegister
                    ? "bg-indigo-400"
                    : "bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"
                }  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}
              >
                Register
                {waitRegister && (
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

          <p className="mt-6 text-center text-sm text-gray-500">
            Have an account?
            <a
              href="/"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1"
            >
              Sign in
            </a>
          </p>

          {/* <button onClick={(e) => handleSubmit(e)}>test</button> */}
        </div>
      </section>
    </>
  );
};

export default Register;
