import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (keyword !== "") {
      const list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);

  return (
    <div className="list">
      <p className="mb-2 ml-4">
        {contactList.length} contact{contactList.length < 2 ? "" : "s"}
      </p>
      <ul className="rounded-lg border border-slate-400">
        {filteredList.map(({ name, phoneNumber }) => (
          <ListItem
            key={name}
            name={name}
            phoneNumber={phoneNumber}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
