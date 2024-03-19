// eslint-disable-next-line no-unused-vars
import React from "react";
import { useRef } from "react";

const Manage = () => {
  const ref = useRef();
  const showPassword = () => {
    alert("show the password");
    if (ref.current.src.includes("public/images/hide.png")) {
      ref.current.src = "public/images/visible.png";
    } else {
      ref.current.src = "public/images/hide.png";
    }
  };
  return (
    <>
      <div className="absolute top-0 -z-10 bg-red-50 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <div className=" mycontainer ">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-red-600"> &lt; </span>
          Pass
          <span className="text-red-600">Man /&gt;</span>
        </h1>
        <p className="text-red-800 text-lg text-center">
          Your own Password Manager
        </p>
        <div className="text-white flex flex-col p-4 text-black gap-8 items-center">
          <input
            placeholder="Enter website URL"
            className="rounded-full border border-red-500 w-full p-4 py-1"
            type="text"
            name=""
            id=""
          />
          <div className="flex w-full justify-between gap-8">
            <input
              placeholder="Enter Username"
              className="rounded-full border border-red-500 w-full p-4 py-1"
              type="text"
              name=""
              id=""
            />
            <div className="relative">
              <input
                placeholder="Enter Password"
                className="border rounded-full border-red-500 w-full p-4 py-1"
                type="text"
                name=""
                id=""
              />
              <span
                className="absolute right-[6px] top-[6px] cursor-pointer"
                onClick={showPassword}
              >
                <img ref={ref} width={20} src="../images/visible.png" alt="" />
              </span>
            </div>
          </div>
          <button className="flex justify-center items-center bg-red-600 rounded-full px-6 py-2 w-fit gap-2  border-2 hover:bg-red-200">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manage;
