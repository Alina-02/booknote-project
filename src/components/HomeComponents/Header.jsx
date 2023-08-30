import React from "react";
import Findbar from "./Findbar";

const Header = () => {
  return (
    <div className=" shadow-lg p-5 w-full flex flex-col items-center bg-brown_9">
      <h1 className="p-5 text-brown_text text-center text-4xl font-playfair font-normal">
        Find a BookNote
      </h1>
      <div className="w-2/5 p-2.5">
        <Findbar />
      </div>
      <div className="p-10 flex flex-col items-center">
        <p className="text-brown_text text-base font-playfair text-normal italic">
          To tell you the truth. I'd kind of like to see one of those flowers
          for myself.
        </p>
        <p className="text-brown_text text-base font-playfair text-normal italic">
          -The Final Empire
        </p>
      </div>
    </div>
  );
};

export default Header;
