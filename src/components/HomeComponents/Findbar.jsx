import React, { useState } from "react";

const Findbar = ({ findB }) => {
  const [search, setSearch] = useState("");

  function onChangeSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="flex flex-row">
      <input
        type="text"
        value={search}
        onChange={onChangeSearch}
        className="shadow-lg focus:outline-none focus:ring-brown_1 focus:ring-2 focus:border-brown_2 block w-full p-2.5 bg-[#F0EBEB] text-brown_dark_text text-sm rounded-lg rounded-r-none focus:ring-brown_6 focus:border-brown_6"
        placeholder="Search your book..."
      />
      <button
        onClick={() => {
          findB(search);
        }}
        className="focus:bg-brown_2 hover:bg-brown_4 focus:ring-brown_1 focus:ring-1 focus:border-brown_2 text-brown_dark_text font-bold bg-brown_2 text-lg font-playfair p-2.5 shadow-lg rounded-lg rounded-l-none"
      >
        Find
      </button>
    </div>
  );
};

export default Findbar;
