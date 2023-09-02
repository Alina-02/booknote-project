import React, { useEffect } from "react";

import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";

const DetailsHeader = ({ title, bookId, author, saga, beCover }) => {
  const navigate = useNavigate();
  const coverRef = React.createRef();

  const handleBack = () => {
    navigate(`/`);
  };

  useEffect(() => {
    if (beCover) {
      getDownloadURL(ref(storage, `images/${bookId}`)).then((url) => {
        const img = coverRef.current;

        if (img != null) {
          img.setAttribute("src", url);
        }
      });
    }
  }, []);

  return (
    <div className="shadow-lg px-5 pt-5 w-full flex bg-brown_9">
      <div className="cursor-pointer" onClick={handleBack}>
        <IoMdArrowRoundBack style={{ color: "#FFE9D3CA" }} size={30} />
      </div>
      <div className="justify-center w-[-webkit-fill-available] flex flex-row mt-3 mx-5 mb-7">
        <div className="m-5 text-center">
          <img
            ref={coverRef}
            className="shadow-lg border-4 border-brown_4 justify-self-center rounded-full w-80 h-80 object-cover"
            src=""
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
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
