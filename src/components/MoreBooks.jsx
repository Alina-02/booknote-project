import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from "react";

const MoreBooks = ({ addBook }) => {
  const [seen, setSeen] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [saga, setSaga] = useState("");
  const [cover, setCover] = useState("");

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

  function handleSubmit(event) {
    event.preventDefault();
    addBook(title, author, saga);
    setTitle("");
    setAuthor("");
    setSaga("");
    setCover("");
    setSeen(false);
    console.log(title);
  }

  //Al clicar sale un popup para añadir un nuevo libro

  return (
    <>
      <button
        onClick={moreBooksClicked}
        className="h-30 w-30 bg-brown_text relative flex items-center justify-center shadow-xl shadow-gray-400 rounded-xl group hover:bg-brown_9 cursor-pointer"
      >
        <IoIosAddCircleOutline size={35} />
        <div className="hidden group-hover:block absolute left-[50%] translate-x-[-50%]">
          <h3 className="p-2 font-playfair text-2xl font-bold text-brown_text tracking-wider text-center">
            New book
          </h3>
        </div>
      </button>

      {seen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-2/5 my-6 mx-auto max-w-3xl">
              <div className="border-4 border-brown_dark_text rounded-lg shadow-lg relative flex flex-col w-full bg-brown_text/90 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold font-playfair text-brown_dark_text">
                    Add a book
                  </h3>
                </div>
                <div className="relative px-6 pt-3 flex-auto">
                  <form className="flex flex-col" onSubmit={handleSubmit}>
                    <label className="font-playfair font-bold text-brown_dark_text">
                      Title
                    </label>
                    <input
                      className="text-brown_dark_text shadow-sm focus:ring-brown_2 focus:ring-1 focus:border-brown_2 focus:outline-none p-2.5 mx-1 mb-1 mt-0.15 rounded-lg font-playfair"
                      placeholder="Title"
                      value={title}
                      onChange={onChangeTitle}
                    />
                    <label className="font-playfair font-bold text-brown_dark_text">
                      Author
                    </label>
                    <input
                      className="text-brown_dark_text shadow-sm focus:ring-brown_2 focus:ring-1 focus:border-brown_2 focus:outline-none p-2.5 mx-1 mb-1 mt-0.15 rounded-lg font-playfair"
                      placeholder="Author"
                      value={author}
                      onChange={onChangeAuthor}
                    />
                    <label className="font-playfair font-bold text-brown_dark_text">
                      Saga
                    </label>
                    <input
                      className="text-brown_dark_text shadow-sm focus:ring-brown_2 focus:ring-1 focus:border-brown_2 focus:outline-none p-2.5 mx-1 mb-1 mt-0.15 rounded-lg font-playfair"
                      placeholder="Saga"
                      value={saga}
                      onChange={onChangeSaga}
                    />
                    <div className="mt-2 flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="my-1 font-playfair text-brown_9çdark_text background-transparent font-bold uppercase px-6 py-2 mb-1 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
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
