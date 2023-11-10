import React from "react";

const TextInputComp = ({name}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="relative block rounded-md border border-gray-900 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          type="text"
          id={name}
          className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 m-1 w-full px-1 pr-3"
          placeholder={name}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white  text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs rounded">
          {name}
        </span>
      </label>
    </div>
  );
};

export default TextInputComp;
