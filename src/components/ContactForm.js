import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();
  const addContact = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber },
    });
    // entered text reset
    event.target.reset();
    // move focus to the first input, name
    document.querySelector("input").focus();
  };
  return (
    <form className="space-y-8" onSubmit={addContact}>
      <div className="name-box">
        <label htmlFor="name" className="mb-2 block text-sm text-gray-600">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
          className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-100"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="phone-number">
        <label
          htmlFor="phone-number"
          className="mb-2 block text-sm text-gray-600"
        >
          Phone Number
        </label>
        <input
          type="number"
          name="phone-number"
          id="phone-number"
          placeholder="Phone Number"
          className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-100"
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full rounded-md bg-sky-400 px-3 py-4 text-white hover:bg-sky-500 focus:outline-none"
        >
          ADD CONTACT
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
