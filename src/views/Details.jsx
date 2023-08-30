import React, { useState, useEffect, useContext } from "react";

import loadBook from "../utils/loadBook";

import DetailsHeader from "../components/DetailsComponents/DetailsHeader";
import Quote from "../components/DetailsComponents/Quote";
import MoreQuotes from "../components/DetailsComponents/MoreQuotes";

import { readData, storeData } from "../utils/storage";
import { LOCAL_STORAGE_KEY } from "../utils/constants";
import { BooksContext } from "../contexts/booksContext";

const pathname = window.location.pathname;
const keyBook = pathname.substring(8, pathname.length);

const resource = loadBook(keyBook);

console.log(resource);

const Details = () => {
  const [quotes, setQuotes] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  const { contextBooks, setContextBooks } = useContext(BooksContext);

  const data = resource.selectedBook.read();

  function loadSavedQuotes() {
    const saved = localStorage.getItem(keyBook);
    if (saved) {
      setQuotes(JSON.parse(saved));
    }
  }

  useEffect(() => {
    console.log("Context books details: ", contextBooks);
    loadSavedQuotes();
    readData(LOCAL_STORAGE_KEY).then((data) => {
      setAllBooks(data);
    });
  }, []);

  function setQuotesAndSave(newQuotes) {
    setQuotes(newQuotes);
    localStorage.setItem(keyBook, JSON.stringify(newQuotes));
  }

  function addQuotes(quote, character = "") {
    setQuotesAndSave([
      ...quotes,
      {
        key: crypto.randomUUID(),
        quote: quote,
        fav: false,
        character: character,
      },
    ]);
  }

  function deleteQuoteById(quoteKey) {
    const newQuotes = quotes.filter((quote) => quote.key != quoteKey);
    setQuotesAndSave(newQuotes);
  }

  function setFav(quoteKey) {
    const newQuotes = quotes.map((qu) => {
      if (qu.key == quoteKey) {
        return {
          ...quotes,
          fav: !qu.fav,
        };
      }
    });
    setQuotesAndSave(newQuotes);
  }

  return (
    <>
      <div className="w-full">
        {data != null ? (
          <DetailsHeader
            title={data.title}
            author={data.author}
            saga={data.saga}
          />
        ) : null}

        <div className="px-7 pt-7 pb-7 space-y-6 w-full h-full bg-gradient-to-r from-brown_text to-brown_1">
          {quotes != []
            ? quotes.map((data, key) => (
                <Quote
                  quote={data.quote}
                  key={Math.random()}
                  fav={data.fav}
                  character={data.character}
                  setQuoteFav={setFav}
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
            fav={false}
          />
          <Quote
            quote='Pero estoy a favor de ese oficio, de todos modos. Lo que sea con tal de
        dar empleo remunerado a los músicos. No es que no seamos capaces de
        hacer otra cosa, sino más bien que o se nos busca alguna acticidad
        productiva o solemos empezar a hacer preguntas del tipo: "Oye, ¿cómo es
        que esa gente no me está venerando a mí"'
            character="Vin"
            saga="Mistborn"
            fav={true}
          />
          <Quote
            quote='Pero estoy a favor de ese oficio, de todos modos. Lo que sea con tal de
        dar empleo remunerado a los músicos. No es que no seamos capaces de
        hacer otra cosa, sino más bien que o se nos busca alguna acticidad
        productiva o solemos empezar a hacer preguntas del tipo: "Oye, ¿cómo es
        que esa gente no me está venerando a mí"'
            character="Vin"
            saga="Mistborn"
            fav={false}
          />
          <Quote
            quote='Pero estoy a favor de ese oficio, de todos modos. Lo que sea con tal de
        dar empleo remunerado a los músicos. No es que no seamos capaces de
        hacer otra cosa, sino más bien que o se nos busca alguna acticidad
        productiva o solemos empezar a hacer preguntas del tipo: "Oye, ¿cómo es
        que esa gente no me está venerando a mí"'
            character="Vin"
            saga="Mistborn"
            fav={false}
          />
          <MoreQuotes addQuote={addQuotes} />
        </div>
      </div>
    </>
  );
};

export default Details;
