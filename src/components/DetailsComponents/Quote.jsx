import React, { useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Quote = ({ quote, character, id, deleteQuote }) => {
  return (
    <div className="shadow-lg flex flex-col bg-brown_4 rounded-xl px-5 pt-7 pb-5 text-center">
      <p className="font-serifdisplay text-lg text-brown_dark_text">
        "{quote}"
      </p>
      {character != "" ? (
        <p className="font-serifdisplay mt-6">-{character}</p>
      ) : (
        <p className="font-serifdisplay mt-6">-Anónimo</p>
      )}
      <div className="cursor-pointer flex flex-row">
        <button onClick={() => deleteQuote(id)}>
          <AiOutlineDelete
            className=""
            size={25}
            style={{ color: "#5E3A2B" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Quote;
