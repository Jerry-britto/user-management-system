import React, { useEffect, useState } from "react";
import Card from "../Card";
import Axios from "axios";
import { setUser } from "../../store/slice";
import { useDispatch, useSelector } from "react-redux";
function Container() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const pageno = useSelector((state) => state.page);
  const name = useSelector((state) => state.name);
  let domain = useSelector((state) => state.domain);
  const gender = useSelector((state) => state.gender);
  const available = useSelector((state)=>state.available)

  const change = useSelector(state=>state.clickable)
  async function loadData() {
    try {
      const res = await Axios.get(
        `/api/users?page=${pageno}&first_name=${name}&domain=${domain}&gender=${gender}&available=${available}`
      );
      // console.log(res.data)
      setData(res.data);
      dispatch(setUser(res.data));
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    loadData();
  }, [pageno, name, domain, gender,available]);
  return (
    <>
      <div className="flex flex-wrap w-full ">
        {data.map((user) => (
          <Card
            id={user._id}
            icon = {change}
            key={user.id}
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
    </>
  );
}

export default Container;
