import React from "react";
import ilus from "../../assets/businessman.svg";
import "animate.css";
import { Link } from "react-router-dom";
import axios from "axios";
import GradientBgF from "../../components/GradientBgF";
import GradientBgB from "../../components/GradientBgB";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { baseUrl } from "../../conf/config";

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name should be at least 3 characters")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone should be 10 digits")
    .required("Phone is required"),
  password: Yup.string()
    .min(8, "Password should be at least 8 characters")
    .required("Password is required"),
});

const SignUpPage = () => {
  const phoneNotify = () => toast("Phone number already registered");
  const registerNotify = () => toast("User registered");
  const wrong = () => toast("Something went wrong");

  const handleSubmit = async (values, { resetForm }) => {
    const phoneCheck = await isPhoneAlreadyExists(values.phone);
    if (!phoneCheck) {
      saveUserData(values);
      resetForm();
    }
  };

  const isPhoneAlreadyExists = async (phone) => {
    try {
      const response = await axios.get(baseUrl+"/getUserByPhone/" + phone);

      if (response.status === 200) {
        phoneNotify();
        return true;
      }
    } catch (error) {
      wrong()
      console.log("error: " + error);
      return true;
    }
  };

  const saveUserData = async (values) => {
    try {
      const response = await axios.post(baseUrl+"/", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Response Data:", response.data);
        registerNotify();
      }
    } catch (error) {
      wrong()
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-screen">
      <GradientBgF />
      <GradientBgB />
      <div className="grid grid-cols-2 justify-center px-44 pt-12">
        <div>
          <img
            className="animate__animated animate__slideInRight"
            src={ilus}
            alt=""
          />
        </div>
        <div className="px-20 bg-fuchsia-200 animate__animated animate__slideInLeft rounded-md">
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              password: "",
              provider: false,
            }}
            validationSchema={SignUpSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <h2 className="text-4xl text-center font-bold py-6 animate__animated animate__slideInLeft">
                Sign Up
              </h2>
              <div className="flex flex-col py-2">
                <label htmlFor="name">Name</label>
                <Field
                  type="name"
                  name="name"
                  id="name"
                  autoComplete="off"
                  className="border p-2 rounded-md"
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="border p-2 rounded-md"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-red-500"
                />
              </div>
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
              <div>
                <label className="inline-block pl-[0.15rem] hover:cursor-pointer">
                  <Field
                    className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-white before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-primary after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                    type="checkbox"
                    role="switch"
                    id="provider"
                    name="provider"
                  />
                  Service provider
                </label>
              </div>

              <button className="border w-full my-5 py-2 bg-green-700 hover:bg-green-500 text-white rounded-md">
                Sign Up
              </button>
              <div>
                <p>
                  Having an account? <Link to="/signin">Sign In</Link>
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUpPage;
