import React from "react";
import aaa from "../../assets/img/final_emp_cover.webp";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const DetailsHeader = ({ title, author, saga, cover }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`/`);
  };

  return (
    <div className="px-5 pt-5 w-full flex bg-brown_9">
      <div className="cursor-pointer" onClick={handleBack}>
        <IoMdArrowRoundBack size={30} />
      </div>
      <div className="justify-center w-[-webkit-fill-available] flex flex-row mt-3 mx-5 mb-7">
        <div className="m-5 text-center">
          <img
            className="justify-self-center rounded-lg w-80 h-80 object-cover"
            src={aaa}
          ></img>
        </div>
        <div className="content-center text-top p-2.5 flex flex-col justify-center">
          <h1 className="px-5 text-brown_text text-4xl font-playfair font-bold">
            {title}
          </h1>
          <h3 className="px-5 text-brown_text text-2xl font-playfair">
            {author}
          </h3>
          {saga != "" ? (
            <h3 className="px-5 text-brown_text text-2xl font-playfair">
              {saga}
            </h3>
          ) : null}
          <p className="px-5 pt-7 text-brown_text text-1xl font-playfair">
            To tell you the truth, I’d kind of like to see one of those flowers
            for myself
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
