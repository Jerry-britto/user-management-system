import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterDomain, filterGender,filterAvailable } from "../store/slice";
function Filter() {
  const dispatch = useDispatch();
  // console.log(domain)
  function display(e) {
    if(e.target.checked){
      dispatch(filterDomain(e.target.value));
    }
    else{
      dispatch(filterDomain(""))
    }
  }
  function display2(e) {
    if(e.target.checked){
      dispatch(filterGender(e.target.value));
    }
    else{
      dispatch(filterGender(""))
    }
  }
  function display3(e){
    if(e.target.checked){
      dispatch(filterAvailable(e.target.value))
    }
    else{
      dispatch(filterAvailable(""))
    }
  }
  return (
    <div className=" bg-slate-300 relative h-auto">
      <div className="px-3 mb-2">
        <h4 className="text-lg font-semibold mb-2 ">Domain</h4>
        <div className="mx-2">
          <div className="mx-2 mb-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                value="Sales"
                onChange={display}
              />
              <span className="ml-2">Sales</span>
            </label>
          </div>
          <div className="mx-2 mb-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-green-500"
                value="Finance"
                onChange={display}
              />
              <span className="ml-2">Finance</span>
            </label>
          </div>
          <div className="mx-2 mb-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-green-500"
                value="Marketing"
                onChange={display}
              />
              <span className="ml-2">Marketing</span>
            </label>
          </div>
          <div className="mx-2 mb-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-green-500"
                value="IT"
                onChange={display}
              />
              <span className="ml-2">IT</span>
            </label>
          </div>
          <div className="mx-2 mb-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-green-500"
                value="Management"
                onChange={display}
              />
              <span className="ml-2">Management</span>
            </label>
          </div>
          <div className="mx-2 mb-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-green-500"
                value="UI Designing"
                onChange={display}
              />
              <span className="ml-2">UI Designing</span>
            </label>
          </div>
          <div className="mx-2 mb-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-green-500"
                value="Business Development"
                onChange={display}
              />
              <span className="ml-2">Business Development</span>
            </label>
          </div>
        </div>
      </div>
      <div className="px-3 mb-3">
        <h4 className="text-lg font-semibold mb-2 ">Gender</h4>
        <div className="mx-2">
          <div className="mx-2 mb-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                value="Female"
                onChange={display2}
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
          <div className="mx-2 mb-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-green-500"
                value="Male"
                onChange={display2}
              />
              <span className="ml-2">Male</span>
            </label>
          </div>
          <div className="mx-2 mb-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-green-500"
                value="Agender"
                onChange={display2}
              />
              <span className="ml-2">Agender</span>
            </label>
          </div>
          <div className="mx-2 mb-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-green-500"
                value="Bigender"
                onChange={display2}
              />
              <span className="ml-2">Bigender</span>
            </label>
          </div>
          <div className="mx-2 mb-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-green-500"
                value="Polygender"
                onChange={display2}
              />
              <span className="ml-2">Polygender</span>
            </label>
          </div>
          <div className="mx-2 mb-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-green-500"
                value="Non-binary"
                onChange={display2}
              />
              <span className="ml-2">Non-binary</span>
            </label>
          </div>
          <div className="mx-2 mb-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-green-500"
                value="Genderfluid"
                onChange={display2}
              />
              <span className="ml-2">Genderfluid</span>
            </label>
          </div>
          <div className="mx-2 mb-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-green-500"
                value="Genderqueer"
                onChange={display2}
              />
              <span className="ml-2">Genderqueer</span>
            </label>
          </div>
        </div>
      </div>
      <div className="px-3 pb-96">
        <h4 className="text-lg font-semibold ">Available</h4>
        <div className="mx-2">
          <div className="mx-2 mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                value="yes"
                onChange={display3}
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                value="no"
                onChange={display3}
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
