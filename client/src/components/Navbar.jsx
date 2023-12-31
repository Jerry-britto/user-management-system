import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUser, setChange, emptyGroup } from "../store/slice";
import { NavLink } from "react-router-dom";
import Axios from "axios";
function Navbar() {
  const dispatch = useDispatch();
  const change = useSelector((state) => state.clickable);
  const group = useSelector((state) => state.group);
  const users = useSelector((state) => state.users);

  let [val, setVal] = useState("");
  const submitName = (e) => {
    e.preventDefault();
    if (!val) {
      dispatch(searchUser(""));
    } else {
      dispatch(searchUser(val.trim()));
    }
  };

  const createGroup = async () => {
    if (group.length === 0) {
      alert("Kindly select the your group members");
      return;
    }
    if (group.length > 1) {
      //checking group member domain and available status

      //retrieving users data
      const usersInGroup = users.filter((user) => group.includes(user._id));
      const domains = new Set(usersInGroup.map((user) => user.domain)); //extracting unique domains
      const availableStatus = new Set(
        usersInGroup.map((user) => user.available)
      );

      if (
        usersInGroup.length != domains.size ||
        usersInGroup.length != availableStatus.size
      ) {
        alert(
          "Users in the group must have unique domains and available status"
        );
        dispatch(emptyGroup());
        return;
      }
    }

    let nums = [
      2, 4, 6, 8, 10, 12, 14, 16, 69, 59, 49, 9, 19, 29, 39, 49, 18, 20,
    ];
    const randomIndex = Math.floor(Math.random() * nums.length);
    const id = Math.floor(Math.random() * 1000) + nums[randomIndex];
    const body = {
      id,
      members: group,
    };

    const res = await Axios.post(
      "https://intern-project-blush.vercel.app/api/team",
      body
    );
    alert("Group id " + body.id.toString());
    dispatch(emptyGroup());
  };
  return (
    <div className="bg-black w-auto p-2 text-white">
      <ul className="flex justify-around w-full">
        <li
          className="cursor-pointer hover:shadow-2xl"
          onClick={() => dispatch(setChange())}
        >
          <button className="bg-red-500 p-1 md:p-2 rounded-md mx-4">
            {change ? (
              <li onClick={createGroup}>Save Changes</li>
            ) : (
              "Create Group"
            )}
          </button>
        </li>
        <li className="cursor-pointer hover:text-orange-500 md:my-1">
          <NavLink to="/showgroups">View Group</NavLink>
        </li>
        <li className="md:my-auto my-1">
          <form className="flex" onSubmit={submitName}>
            <input
              type="text"
              placeholder="Search user"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              className="p-1.5 w-full active:border active:border-blue-500 text-black rounded-md"
            />
            <input
              type="submit"
              value="Search"
              className="bg-orange-400 text-white rounded p-1.5 cursor-pointer"
            />
          </form>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
