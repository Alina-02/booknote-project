import React, { useState } from "react";

import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";

import { IoIosAddCircleOutline } from "react-icons/io";
import { MdExitToApp } from "react-icons/md";

const MoreBooks = ({ addBook }) => {
  const [seen, setSeen] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [saga, setSaga] = useState("");
  const [cover, setCover] = useState("");
  const [beCover, setBeCover] = useState(false);

  const uploadCoverBook = (bookId) => {
    if (cover == "") return;
    const imageRef = ref(storage, `images/${bookId}`);

    //Upload the image
    uploadBytes(imageRef, cover);
  };

  function moreBooksClicked() {
    setSeen(!seen);
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  function onChangeAuthor(event) {
    setAuthor(event.target.value);
  }

  function onChangeSaga(event) {
    setSaga(event.target.value);
  }

  function onChangeCover(event) {
    setBeCover(true);
    setCover(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const bookId = (title + author).replace(/ /g, "").toLowerCase();
    uploadCoverBook(bookId);

    addBook(title, author, saga, beCover);
    setTitle("");
    setAuthor("");
    setSaga("");
    setCover("");
    setBeCover(false);
    setSeen(false);
  }

  //Al clicar sale un popup para añadir un nuevo libro

  return (
    <>
      <button
        onClick={moreBooksClicked}
        className="min-w-[185px] min-h-[282px] w-full bg-brown_text relative flex items-center justify-center shadow-xl shadow-gray-400 rounded-xl group hover:bg-brown_9 cursor-pointer"
      >
        <IoIosAddCircleOutline
          style={{ color: "#774936" }}
          className="hover:hidden"
          size={35}
        />
        <div className="hidden group-hover:block absolute left-[50%] translate-x-[-50%]">
          <h3 className="p-2 font-playfair text-2xl font-bold text-brown_text tracking-wider text-center">
            New book
          </h3>
        </div>
      </button>

      {seen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="min-w-[343px] min-h-[487px] relative w-2/5 my-6 mx-auto max-w-3xl">
              <div className="border-4 border-brown_dark_text rounded-lg shadow-lg relative flex flex-col w-full bg-brown_text/90 outline-none focus:outline-none">
                <button
                  onClick={() => {
                    setTitle("");
                    setAuthor("");
                    setSaga("");
                    setCover("");
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
                    Add a book
                  </h3>
                </div>
                <div className="relative px-6 pt-3 flex-auto">
                  <form className="flex flex-col" onSubmit={handleSubmit}>
                    <label className="font-playfair font-bold text-brown_dark_text">
                      Title*
                    </label>
                    <input
                      className="bg-white text-brown_dark_text shadow-sm focus:ring-brown_2 focus:ring-1 focus:border-brown_2 focus:outline-none p-2.5 mx-1 mb-1 mt-0.15 rounded-lg font-playfair"
                      placeholder="Title"
                      value={title}
                      onChange={onChangeTitle}
                      maxLength={30}
                      required
                    />
                    <label className="font-playfair font-bold text-brown_dark_text">
                      Author*
                    </label>
                    <input
                      className="bg-white text-brown_dark_text shadow-sm focus:ring-brown_2 focus:ring-1 focus:border-brown_2 focus:outline-none p-2.5 mx-1 mb-1 mt-0.15 rounded-lg font-playfair"
                      placeholder="Author"
                      maxLength={25}
                      value={author}
                      onChange={onChangeAuthor}
                      required
                    />
                    <label className="font-playfair font-bold text-brown_dark_text">
                      Saga
                    </label>
                    <input
                      className="bg-white outline-none text-brown_dark_text shadow-sm focus:ring-brown_2 focus:ring-1 focus:border-brown_2 focus:outline-none p-2.5 mx-1 mb-1 mt-0.15 rounded-lg font-playfair"
                      placeholder="Saga"
                      value={saga}
                      maxLength={25}
                      onChange={onChangeSaga}
                    />
                    <label className="font-playfair font-bold text-brown_dark_text">
                      Cover
                    </label>
                    <input
                      id="cover_input"
                      style={{ content: "Select a cover" }}
                      className="file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] file:rounded-lg file:bg-brown_text/50 file:border-brown_1 file:font-playfair file:cursor-pointer file:text-brown_dark_text font-playfair bg-white block w-full text-sm text-brown_dark_text rounded-lg p-2.5 mx-1 mb-1 mt-0.15 cursor-pointer bg-gray-50 focus:outline-none"
                      placeholder="Saga"
                      type="file"
                      onChange={onChangeCover}
                    />
                    <div className="flex items-center justify-end pb-6 pt-4 pr-1 rounded-b">
                      <div className=" absolute p-6 left-0 font-playfair text-brown_dark_text">
                        <p className="text-sm">*campos obligatorios</p>
                      </div>
                      <button
                        className="my-1 font-playfair text-brown_dark_text background-transparent font-bold uppercase px-6 py-2 mb-1 text-sm outline-none focus:outline-none ease-linear transition-all duration-150 cursor-pointer"
                        type="button"
                        onClick={() => {
                          setTitle("");
                          setAuthor("");
                          setSaga("");
                          setCover("");
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

export default MoreBooks;
