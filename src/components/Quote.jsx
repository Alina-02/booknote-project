import React from "react";

const Quote = ({ quote, character }) => {
  return (
    <div className="flex flex-col bg-brown_4 rounded-xl p-7 text-center">
      <div></div>
      <p className="font-serifdisplay text-lg text-brown_dark_text">
        Pero estoy a favor de ese oficio, de todos modos. Lo que sea con tal de
        dar empleo remunerado a los músicos. No es que no seamos capaces de
        hacer otra cosa, sino más bien que o se nos busca alguna acticidad
        productiva o solemos empezar a hacer preguntas del tipo: "Oye, ¿cómo es
        que esa gente no me está venerando a mí?"
      </p>
      <p className="font-serifdisplay mt-6">-Vin</p>
    </div>
  );
};

export default Quote;
