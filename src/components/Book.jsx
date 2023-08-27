import React from "react";
import cover from "../assets/img/final_emp_cover.webp";

const Book = ({ title, author, saga, cover }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-brown_9 cursor-pointer">
      <img src={cover} alt="/" className="rounded-xl group-hover:opacity-10 " />
      <div className="hidden group-hover:block absolute top.[50%] left-[50%] translate-x-[-50%]">
        <h3 className="p-2 font-playfair text-2xl font-bold text-brown_text tracking-wider text-center">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Book;
