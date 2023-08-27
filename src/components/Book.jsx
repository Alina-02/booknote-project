import React from "react";
import { useNavigate } from "react-router-dom";
import cover from "../assets/img/final_emp_cover.webp";

const Book = ({ title, author, saga, cover, id }) => {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <button
      onClick={handleBookClick}
      className="min-w-[130px] min-h-[200px] relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-brown_9 cursor-pointer"
    >
      {cover != "" ? (
        <img
          src={cover}
          alt="/"
          className="rounded-xl group-hover:opacity-10 "
        />
      ) : (
        <h3 className="p-2 font-playfair text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
      )}

      <div className="hidden group-hover:block absolute top.[50%] left-[50%] translate-x-[-50%]">
        <h3 className="p-2 font-playfair text-2xl font-bold text-brown_text tracking-wider text-center">
          {title}
        </h3>
      </div>
    </button>
  );
};

export default Book;
