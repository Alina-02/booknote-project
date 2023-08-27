import React from "react";

const DetailsHeader = ({ title, author, saga, cover }) => {
  return (
    <div>
      <div>
        <img></img>
        <div>
          <h1 className="font-palyfair">The Final Empire</h1>
          <h3>Brandon Sanderson</h3>
          <h3>Mistborn</h3>
          <p>
            To tell you the truth, I’d kind of like to see one of those flowers
            for myself
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
