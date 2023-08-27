import React from "react";

const Findbar = () => {
  return (
    <div>
      <input
        type="text"
        className=" block w-full p-2.5 bg-white text-brown_9 text-sm rounded-lg focus:ring-brown_6 focus:border-brown_6"
        placeholder="Search your book..."
      />
    </div>
  );
};

export default Findbar;
