import React, { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_NAME", payload: { keyword } });
  };
  return (
    <div className="search-box mb-6">
      <form className="flex gap-4" onSubmit={searchByName}>
        <input
          type="text"
          name="keyword"
          id="keyword"
          placeholder="Search Name"
          className="rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-green-300 focus:outline-none focus:ring focus:ring-green-100"
          onChange={(event) => setKeyword(event.target.value)}
        />
        <button
          type="submit"
          className="rounded-md bg-green-400 px-3 py-2 text-white hover:bg-green-500 focus:outline-none"
        >
          Search
        </button>
        <button
          type="button"
          className="rounded-md bg-red-400 px-3 py-2 text-white hover:bg-red-500 focus:outline-none"
          onClick={() => dispatch({ type: "SHOW_ALL" })}
        >
          Show All
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
