// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useRef, useState } from "react";

const Manage = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    alert("show the password");
    if (ref.current.src.includes("public/images/hide.png")) {
      ref.current.src = "public/images/visible.png";
    } else {
      ref.current.src = "public/images/hide.png";
    }
  };
  const savePassword = () => {
    setpasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log(passwordArray);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
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
        <div className=" flex flex-col p-4 text-black gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="rounded-full border border-red-500 w-full p-4 py-1"
            type="text"
            name="site"
            id=""
          />
          <div className="flex w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-red-500 w-full p-4 py-1"
              type="text"
              name="username"
              id=""
            />
            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="border rounded-full border-red-500 w-full p-4 py-1"
                type="text"
                name="password"
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
          <button
            className="flex justify-center items-center bg-red-600 rounded-full px-6 py-2 w-fit gap-2  border-2 hover:bg-red-200"
            onClick={savePassword}
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add password
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No passwords to show</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className=" bg-red-600">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                </tr>
              </thead>
              <tbody className="bg-red-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-2 border border-white text-center w-32">
                        <a href={item.site} target="_blank"></a>
                      </td>
                      <td className="py-2 border border-white text-center w-32">
                        {item.username}
                      </td>
                      <td className="py-2 border border-white text-center w-32">
                        {item.password}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manage;
