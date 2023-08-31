import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiTrash } from "react-icons/bi";

import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";

const Book = ({ title, id, beCover, deleteBook }) => {
  const coverRef = React.createRef();
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    if (beCover) {
      getDownloadURL(ref(storage, `images/${id}`)).then((url) => {
        const img = coverRef.current;

        if (img != null) {
          img.setAttribute("src", url);
        }
      });
    }
  }, []);

  return (
    <div className="bg-brown_6 min-w-[185px] min-h-[282px] relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-brown_9 cursor-pointer">
      <button
        onClick={handleBookClick}
        className="h-full min-w-[130px] min-h-auto relative flex items-center justify-center w-full rounded-xl cursor-pointer"
      >
        {beCover ? (
          <img
            ref={coverRef}
            src=""
            alt="/"
            className="rounded-xl group-hover:opacity-10 "
          />
        ) : (
          <div className="group-hover:block flex text-center">
            <h3 className="break-all m-2 p-2 font-playfair text-2xl font-bold text-[#F0EBEB] tracking-wider text-center">
              {title}
            </h3>
          </div>
        )}

        <div className="hidden group-hover:block text-center absolute top.[50%] left-[50%] translate-x-[-50%]">
          {beCover ? (
            <h3 className="m-2 font-playfair text-2xl font-bold text-brown_text tracking-wider">
              {title}
            </h3>
          ) : null}
        </div>
      </button>
      <div className="hidden group-hover:block absolute right-0 top-0 m-2.5">
        <BiTrash
          size={25}
          style={{ color: "#FFE9D3CA" }}
          title="Delete"
          onClick={() => {
            deleteBook(id);
          }}
        />
      </div>
    </div>
  );
};

export default Book;
