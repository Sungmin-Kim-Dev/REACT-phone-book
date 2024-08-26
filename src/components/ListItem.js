import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

const ListItem = ({ name, phoneNumber }) => {
  const dispatch = useDispatch();
  const deleteContact = () => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: { name },
    });
  };
  return (
    <li className="flex items-center gap-4 border-b border-slate-400 p-4 last:border-b-0">
      <img
        src="https://s3-ap-northeast-1.amazonaws.com/ojuz-attach/profile/images/GioChkhaidze"
        alt=""
        className="size-20"
      />
      <div className="list-text flex-grow space-y-2">
        <p className="list-name text-xl font-semibold">{name}</p>
        <p className="list-number text-lg">{phoneNumber}</p>
      </div>
      <button className="text-3xl text-red-500" onClick={deleteContact}>
        <FontAwesomeIcon icon={faDeleteLeft} />
      </button>
    </li>
  );
};

export default ListItem;
