import React from "react";
import { AiOutlineStar, AiFillStar, AiOutlineDelete } from "react-icons/ai";

const Quote = ({ quote, character, fav, key, setQuoteFav, deteleQuote }) => {
  function deleteQuoteClicked() {
    delecteQuote(key);
  }

  return (
    <div className="shadow-lg flex flex-col bg-brown_4 rounded-xl px-5 pt-7 pb-5 text-center">
      <p className="font-serifdisplay text-lg text-brown_dark_text">{quote}</p>
      {character != "" ? (
        <p className="font-serifdisplay mt-6">-{character}</p>
      ) : (
        <p className="font-serifdisplay mt-6">-Anónimo</p>
      )}
      <div
        className="cursor-pointer flex flex-row"
        onClick={() => {
          console.log(key);
          setQuoteFav(key);
        }}
      >
        {fav ? <AiFillStar size={25} /> : <AiOutlineStar size={25} />}
        <button onClick={deleteQuoteClicked}>
          <AiOutlineDelete className="" size={25} />
        </button>
      </div>
    </div>
  );
};

export default Quote;
