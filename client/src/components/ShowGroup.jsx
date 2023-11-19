import React, { useState } from "react";
import Card from "./Card";
import Axios from "axios";
import { NavLink } from "react-router-dom";
function ShowGroup() {
  const [id, setId] = useState(null);
  const [groups, setGroups] = useState([]);
  // console.log("group no" ,groups.id);
  // console.log(id);
  const displayGroups = async (e) => {
    e.preventDefault();
    const res = await Axios.get(`/api/team/${id}`);
    // console.log(res.data.users)
    setGroups(res.data.users);
    const heading = document.querySelector("#heading");
    heading.classList.remove("hidden");
  };
  return (
    <div className="bg-blue-500 bg-cover h-screen flex flex-wrap justify-center">
      <NavLink to="/">
        <span className="mx-4 hover:text-white flex  bg-cover bg-red-400 p-0.5 my-2 rounded">
          Visit Home
        </span>
      </NavLink>
      <form onSubmit={displayGroups}>
        <input
          type="text"
          placeholder="Enter group id"
          className="p-1 rounded my-1"
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="submit"
          value="Display Group"
          className="bg-orange-500  p-1 text-white"
        />
      </form>
      <div className="w-full text-center">
        <div
          className="w-auto bg-orange-500 text-white text-3xl overflow-hidden py-1 my-2 hidden"
          id="heading"
        >
          Group no: {groups.id}
        </div>
        <div className="flex flex-wrap justify-around" id="content">
          {groups.members &&
            groups.members.map((user) => (
              <Card
                key={user._id}
                avatar={user.avatar}
                first_name={user.first_name}
                last_name={user.last_name}
                email={user.email}
                gender={user.gender}
                domain={user.domain}
                available={user.available}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ShowGroup;
