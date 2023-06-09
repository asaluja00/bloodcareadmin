import React, { useState } from "react";
import Navbar from "./Navbar";
import UserList from "./UserList";

import Reciver from "./Reciver";
import Doner from "./Doner";
import Hospitals from "./Hospitals";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "admin" && password === "admin") {
      setLoggedIn(true);
    }
    else{
        alert("Wrond UserID or Password");
    }
  };

//   const handleLogout = () => {
//     setLoggedIn(false);
//   };

  if (loggedIn) {
    return <>      <div className="div"> <Navbar/></div>
      <div className="flex h-screen flex-col">
      <div className="flex-1 flex">
        <div className="w-1/3 bg-cyan-500"><Doner/></div>
        <div className="w-1/3 bg-red-500"><Reciver/></div>
        <div className="w-1/3 bg-green-300"><Hospitals/></div>
      </div>
      <div className="flex-1 bg-white-500"><UserList/></div>
    </div>
    </>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;


