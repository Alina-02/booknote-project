import React, { useState } from "react";

import { IoIosAddCircleOutline } from "react-icons/io";
import { MdExitToApp } from "react-icons/md";

const MoreQuotes = ({ addQuote }) => {
  const [seen, setSeen] = useState(false);
  const [quote, setQuote] = useState("");
  const [character, setCharacter] = useState("");

  function moreQuotesClicked() {
    setSeen(!seen);
  }

  function onChangeQuote(event) {
    setQuote(event.target.value);
  }

  function onChangeCharacter(event) {
    setCharacter(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addQuote(quote, character);
    setQuote("");
    setCharacter("");
    setSeen(false);
  }

  return (
    <>
      <button
        onClick={moreQuotesClicked}
        className="w-full group hover:bg-brown_9 items-center shadow-gray-400 mb-5 shadow-lg flex flex-col bg-brown_4 rounded-lg p-7 cursor-pointer"
      >
        <IoIosAddCircleOutline size={30} />
      </button>
      {seen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  focus:outline-none">
            <div className="min-w-[343px] min-h-[487px] relative w-2/5 my-6 mx-auto max-w-3xl">
              <div className="border-4 border-brown_dark_text rounded-lg shadow-lg relative flex flex-col w-full bg-brown_text/90 outline-none focus:outline-none">
                <button
                  onClick={() => {
                    setQuote("");
                    setCharacter("");
                    setSeen(false);
                  }}
                >
                  <MdExitToApp
                    size={30}
                    className="right-0 top-0 absolute m-2.5"
                    style={{ color: "#5E3A2B" }}
                  ></MdExitToApp>
                </button>
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold font-playfair text-brown_dark_text">
                    Add a quote
                  </h3>
                </div>
                <div className="relative px-6 pt-3 flex-auto">
                  <form className="flex flex-col" onSubmit={handleSubmit}>
                    <label className="font-playfair font-bold text-brown_dark_text">
                      Quote*
                    </label>
                    <textarea
                      className="min-h-[45px] max-h-[300px] text-brown_dark_text shadow-sm focus:ring-brown_2 focus:ring-1 focus:border-brown_2 focus:outline-none p-2.5 mx-1 mb-1 mt-0.15 rounded-lg font-playfair"
                      placeholder="Write a quote..."
                      value={quote}
                      maxLength={400}
                      onChange={onChangeQuote}
                      required
                    />
                    <label className="font-playfair font-bold text-brown_dark_text">
                      Character
                    </label>
                    <input
                      className="text-brown_dark_text shadow-sm focus:ring-brown_2 focus:ring-1 focus:border-brown_2 focus:outline-none p-2.5 mx-1 mb-1 mt-0.15 rounded-lg font-playfair"
                      placeholder="Character"
                      value={character}
                      maxLength={25}
                      onChange={onChangeCharacter}
                    />

                    <div className="flex items-center justify-end pb-6 pt-4 pr-1 rounded-b">
                      <div className=" absolute p-6 left-0 font-playfair text-brown_dark_text">
                        <p className="text-sm">*campos obligatorios</p>
                      </div>
                      <button
                        className="my-1 font-playfair text-brown_dark_text background-transparent font-bold uppercase px-6 py-2 mb-1 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setQuote("");
                          setCharacter("");
                          setSeen(false);
                        }}
                      >
                        Close
                      </button>
                      <button
                        className="my-1 font-playfair bg-brown_9 hover:bg-brown_dark_text text-white font-bold uppercase text-sm px-6 py-3 mb-1 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default MoreQuotes;
