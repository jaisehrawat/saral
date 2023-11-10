import React from "react";
import ilus1 from "../../assets/undraw_product_iteration_kjok.svg";
import "animate.css";
import { Link } from "react-router-dom";
import GradientBgF from "../../components/GradientBgF";
import GradientBgB from "../../components/GradientBgB";

const Body = () => {
  const myStyles = {
    fontFamily: "Roboto Mono",
  };

  return (
    <>
      <div className="relative isolate px-6 lg:px-8">
        <GradientBgF />
        <div className="mx-auto max-w-2xl py-4 sm:py- lg:py-44">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Discover a world of skills and services on our vibrant online
              platform
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              It's a hub for skill sharing and resource access with transparent
              reviews and secure transactions, benefiting all.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/register"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link
                to="/about"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <GradientBgB />
      </div>

      {/* <div className="bg-[url('/Users/cavisson/Documents/ReactJS/tmp/saral_gui/src/assets/dominik-schroder-FIKD9t5_5zQ-unsplash.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="grid grid-cols-2 font-mono">
          <div className="grid grid-rows-2 flex-col h-5/6 items-center justify-evenly p-28 animate__animated animate__bounceInLeft">
            <div className="font-abc">
              <div className="flex text-8xl subpixel-antialiased font-bold justify-evenly">
                <h1>Discover</h1>
              </div>
              <div className="flex text-3xl justify-between pl-16 pr-16">
                <h1>a</h1>
                <h1>world</h1>
                <h1>of</h1>
              </div>
              <div className="flex items-center justify-evenly">
                <h1 className="text-6xl font-bold">skills</h1>
                <h1 className="text-2xl px-4">and</h1>
                <h1 className="text-6xl font-bold">services</h1>
              </div>
              <div className="flex text-2xl justify-between ">
                <h1>on</h1>
                <h1>our</h1>
                <h1>vibrant</h1>
                <h1>online</h1>
                <h1>platform</h1>
              </div>
            </div>

            <div>
              <div className="justify-evenly flex items-center">
                <button className="bg-green-700 hover:bg-green-500 font-bold py-2 px-4 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-evenly">
            <img
              src={ilus}
              alt="ilustration"
              className="w-fit h-5/6 animate__animated animate__bounceInDown p-4"
            />
          </div>
        </div>
      </div> */}

      <div className="">
        <div className="grid grid-cols-2 col-md-12 ftco-animatea fadeInUp ftco-animated">
          <div>
            <img
              src={ilus1}
              alt=""
              className="p-20 animate__animated animate__bounceInLeft"
            />
          </div>
          <div className="flex justify-center items-center h-screen p-20">
            <p
              className="text-2xl text-justify leading-loose p-8 "
              style={myStyles}
            >
              Our platform connects skilled service providers with clients seeking their expertise and resources. Transparent reviews and secure transactions enhance collaboration, fostering a dynamic community of talent and assets.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
