import React from "react";
import ilus from "../../assets/businessman.svg";
import "animate.css";
import { Link, useNavigate } from "react-router-dom";
import GradientBgF from "../../components/GradientBgF";
import GradientBgB from "../../components/GradientBgB";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { baseUrl } from "../../conf/config";

const SignInSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone should be 10 digits")
    .required("Phone is required"),
  password: Yup.string().required("Password is required"),
});

const SignInPage = () => {
  const navigate = useNavigate();
  const wrongEntry = () => toast("Wrong phone or password");

  const submitHandler = async (values) => {
    signIn(values.phone, values.password);
  };

  const signIn = async (phone, password) => {
    try {
      const response = await axios.post(baseUrl+"/signin", {
        phone,
        password,
      });
      // Handle the response from the server (e.g., store user data or token).

      if (response.status === 200) {
        const userData = response.data;
        localStorage.setItem('userData', JSON.stringify(userData));
        navigate("/home")
      }
    } catch (error) {
      // Handle authentication errors (e.g., show error message).
      wrongEntry();
      console.error("Error:", error);
    }
  };

  return (
    <div className=" h-screen">
      <GradientBgF />
      <GradientBgB />
      <div className="grid grid-cols-2 justify-center px-44 pt-12">
        <div className="px-20 bg-fuchsia-200 animate__animated animate__slideInRight rounded-md">
          <div className="pt-20">
            <h2 className="text-4xl text-center font-bold py-6 animate__animated animate__slideInRight">
              Sign In
            </h2>
            <Formik
              initialValues={{
                phone: "",
                password: "",
              }}
              validationSchema={SignInSchema}
              onSubmit={submitHandler}
            >
              <Form>
                <div className="flex flex-col py-2">
                  <label htmlFor="phone">Phone</label>
                  <Field
                    type="text"
                    name="phone"
                    id="phone"
                    className="border p-2 rounded-md"
                  />
                  <ErrorMessage
                    name="phone"
                    component="span"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="border p-2 rounded-md"
                  />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="text-red-500"
                  />
                </div>
                <button className="border w-full my-5 py-2 bg-lime-700 hover:bg-green-500 text-white rounded-md">
                  Sign In
                </button>
                <div className="pt-5">
                  <p>
                    <Link to="/register">Forgot password?</Link>
                  </p>
                </div>
                <div className="pt-2">
                  <p>
                    Not having an account? <Link to="/register">Register</Link>
                  </p>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
        <div>
          <img
            className="animate__animated animate__slideInLeft"
            src={ilus}
            alt=""
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignInPage;
