import React, { useEffect, useState } from "react";
import Card from "../Card";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../store/slice";
import Loader from "../Loader";
function Container() {
  const [data, setData] = useState([]);
  const pageno = useSelector((state) => state.page);
  const name = useSelector((state) => state.name);
  let domain = useSelector((state) => state.domain);
  const gender = useSelector((state) => state.gender);
  const available = useSelector((state) => state.available);
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(true);
  const change = useSelector((state) => state.clickable);
  async function loadData() {
    try {
      const res = await Axios.get(
        `https://intern-project-blush.vercel.app/api/users?page=${pageno}&first_name=${name}&domain=${domain}&gender=${gender}&available=${available}`
      );
      setData(res.data);
      dispatch(setUser(res.data));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setLoading(true);
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    loadData();
    return () => {
      // Clear the timeout if the component unmounts or the data is loaded before 3 seconds
      clearTimeout(loaderTimeout);
    };

  }, [pageno, name, domain, gender, available]);
  return (
    <>
      {loading?(
        <Loader/>
      ):
      data.length === 0 ?
        <h1 className="md:mx-auto md:my-36 md:text-4xl text-3xl m-5">USER NOT FOUND</h1>
       : 
        <div className="flex flex-wrap w-full ">
          {data.map((user) => (
            <Card
              id={user._id}
              icon={change}
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
      }
    </>
  );
}

export default Container;
