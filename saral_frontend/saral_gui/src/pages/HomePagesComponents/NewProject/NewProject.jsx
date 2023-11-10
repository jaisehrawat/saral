import React from "react";
import InputDemo from "../../../components/TextInputComp";

const NewProject = () => {
  return (
    <div className="h-full w-full">
      <div className="h-fit pt-5 pb-5 px-4 m-5 rounded-xl bg-white">
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

        <div className="flex mt-10 mx-5">
          <a
            class="group relative inline-flex items-center overflow-hidden rounded bg-lime-700 px-8 py-3 text-white focus:outline-none focus:ring active:bg-lime-500"
            href="/demo"
          >
            <span class="absolute -end-full transition-all group-hover:end-4">
              <svg
                class="h-5 w-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span class="text-sm font-medium transition-all group-hover:me-4">
              Register
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewProject;

// import React from "react";
// import { Link, Outlet } from "react-router-dom";
// import { TbListDetails } from "react-icons/tb";

// const NewProject = () => {
//   return (
//     <div className="flex">
//       <div className="flex flex-col w-1/4 h-screen border-r-2 border-gray-300 mt-4">
//         <div>
//           <Link to="/home/newproject/Basic">
//             <Card icon={TbListDetails} name="Basic" />
//           </Link>
//         </div>
//         {/* <Card icon={CiTextAlignLeft} /> */}
//       </div>
//       <div className=" h-screen w-3/4">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default NewProject;

// const Card = ({ icon: Icon, name }) => {
//   return (
//     <div className="w-1/2 h-32 bg-white m-1 rounded-xl">
//       <div className="flex h-2/3 items-center justify-center text-6xl">
//         <Icon />
//       </div>
//       <div className="flex h-1/3 items-center justify-center text-xs text-gray-500">
//         {name}
//       </div>
//     </div>
//   );
// };
