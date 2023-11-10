import React from "react";
import InputDemo from "../../../components/TextInputComp";

const Basic = () => {
  return (
    <div className="h-full w-full">
      <div className="h-2/3 pt-5 px-4 m-5 rounded-xl bg-white">
        <div className="flex gap-10 mt-5 mx-5">
          <div className="w-1/2">
            <InputDemo name="Store Username" />
          </div>
          <div className="w-1/2">
            <InputDemo name="Store Name" />
          </div>
        </div>

        <div className="flex gap-10 mt-10 mx-5">
          <div className="w-1/2">
            <InputDemo name="Store email" />
          </div>
          <div className="w-1/2">
            <InputDemo name="Store phone" />
          </div>
        </div>

        <div className="flex gap-10 mt-10 mx-5">
          <div className="w-1/2">
            <InputDemo name="Brand username" />
          </div>
          <div className="w-1/2">
            <InputDemo name="Brand username" />
          </div>
        </div>

        <div className="mt-10 mx-5">
          <label
            htmlFor="description"
            className="relative block rounded-md border border-gray-900 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <textarea
              id="description"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 m-1 w-full px-1 pr-3"
              placeholder=" "
              rows="8"
            ></textarea>

            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs rounded">
            Description
            </span>
          </label>
        </div>


      </div>
    </div>
  );
};

export default Basic;
