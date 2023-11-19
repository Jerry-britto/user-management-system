import React from "react";
import { addToGroup,removeFromGroup } from "../store/slice";
import { useDispatch } from "react-redux";
function Card({
  avatar,
  first_name,
  last_name,
  email,
  gender,
  domain,
  available,
  icon,
  id,
}) {
  const dispatch = useDispatch();
  const handleCheckboxChange = (event) => {
    // Check if the checkbox is checked or unchecked
    const isChecked = event.target.checked;

    // Dispatch the makeGroup action with the component id if checked
    if (isChecked) {
      dispatch(addToGroup(id));
    } else {
      dispatch(removeFromGroup(id))
    }
  };
  return (
    <div className="border cursor-pointer gap-1 bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-6 rounded-lg shadow-lg hover:shadow-lg transform transition-transform hover:scale-105 w-full md:w-1/2 lg:w-1/4 flex flex-col items-center">
      {icon && (
        <div>
        <input
          type="checkbox"
          className="rounded-lg p-10"
          name="checbox"
          id={`check-${id}`}
          onChange={handleCheckboxChange}
        />
        <label htmlFor={`${id}`}>Add</label>
        </div>
      )}
      <div className="flex-shrink-0 mb-4">
        <img
          src={avatar}
          alt="Avatar"
          className="w-20 h-20 rounded-full border-4 border-white"
        />
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-extrabold mb-2">
          {first_name} {last_name}
        </h2>

        <p className="text-sm mb-2">{email}</p>

        <p className="text-sm mb-2">Gender: {gender}</p>

        <p className="text-sm mb-2">Domain: {domain}</p>

        <p className="text-sm flex items-center font-semibold">
          <span className="mr-1">Available</span>
          <span className="bg-green-500 text-white rounded-full px-2 py-1 text-xs">
            {available ? "Yes" : "No"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Card;
