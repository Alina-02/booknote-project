import React, { useState, useEffect } from "react";

import loadBook from "../utils/loadBook";

import DetailsHeader from "../components/DetailsComponents/DetailsHeader";
import Quote from "../components/DetailsComponents/Quote";
import MoreQuotes from "../components/DetailsComponents/MoreQuotes";

const pathname = window.location.pathname;
const keyBook = pathname.substring(8, pathname.length);

const resource = loadBook(keyBook);

const Details = () => {
  const [quotes, setQuotes] = useState([]);

  const book = resource.selectedBook.read();

  function loadSavedQuotes() {
    const saved = localStorage.getItem(keyBook);
    if (saved) {
      setQuotes(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedQuotes();
  }, []);

  function setQuotesAndSave(newQuotes) {
    setQuotes(newQuotes);
    localStorage.setItem(keyBook, JSON.stringify(newQuotes));
  }

  function addQuotes(quote, character = "") {
    setQuotesAndSave([
      ...quotes,
      {
        id: crypto.randomUUID(),
        text: quote,
        character: character,
      },
    ]);
  }

  function deleteQuoteById(quoteId) {
    const newQuotes = quotes.filter((quote) => quote.id != quoteId);
    setQuotesAndSave(newQuotes);
  }

  return (
    <>
      <div className="w-full">
        {book != null ? (
          <DetailsHeader
            title={book.title}
            author={book.author}
            saga={book.saga}
            bookId={book.id}
            beCover={book.cover}
          />
        ) : null}
        <div className="bg-[#F0EBEB] w-full h-5 shadow-lg"></div>

        <div className="px-7 pt-7 pb-7 space-y-6 w-full h-full bg-gradient-to-r from-brown_text to-brown_1">
          {quotes != []
            ? quotes.map((data) => (
                <Quote
                  quote={data.text}
                  id={data.id}
                  key={Math.random()}
                  character={data.character}
                  deleteQuote={deleteQuoteById}
                />
              ))
            : null}

          <Quote
            quote='Pero estoy a favor de ese oficio, de todos modos. Lo que sea con tal de
        dar empleo remunerado a los músicos. No es que no seamos capaces de
        hacer otra cosa, sino más bien que o se nos busca alguna acticidad
        productiva o solemos empezar a hacer preguntas del tipo: "Oye, ¿cómo es
        que esa gente no me está venerando a mí"'
            character=""
            saga="Mistborn"
          />
          <Quote
            quote='Pero estoy a favor de ese oficio, de todos modos. Lo que sea con tal de
        dar empleo remunerado a los músicos. No es que no seamos capaces de
        hacer otra cosa, sino más bien que o se nos busca alguna acticidad
        productiva o solemos empezar a hacer preguntas del tipo: "Oye, ¿cómo es
        que esa gente no me está venerando a mí"'
            character="Vin"
            saga="Mistborn"
          />
          <MoreQuotes addQuote={addQuotes} />
        </div>
      </div>
    </>
  );
};

export default Details;
