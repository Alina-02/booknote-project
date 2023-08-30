import React from "react";

const Findbar = () => {
  return (
    <div>
      <input
        type="text"
        className="shadow-lg focus:outline-none focus:ring-brown_1 focus:ring-2 focus:border-brown_2 block w-full p-2.5 bg-[#F0EBEB] text-brown_dark_text text-sm rounded-lg focus:ring-brown_6 focus:border-brown_6"
        placeholder="Search your book..."
      />
    </div>
  );
};

export default Findbar;
