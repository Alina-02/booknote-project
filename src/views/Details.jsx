import React, { useState, useEffect } from "react";

import DetailsHeader from "../components/DetailsComponents/DetailsHeader";
import Quote from "../components/DetailsComponents/Quote";
import MoreQuotes from "../components/DetailsComponents/MoreQuotes";

import { LOCAL_STORAGE_KEY } from "../utils/constants";

const Details = () => {
  const [quotes, setQuotes] = useState([]);
  const [book, setBook] = useState();

  function loadSavedQuotes() {
    console.log("Book en load: ", book);
    if (book != null) {
      const saved = book.quotes;
      if (saved) {
        setQuotes(saved);
      }
    }
  }

  useEffect(() => {
    const loadBookAsync = async () => {
      try {
        const response = localStorage.getItem(LOCAL_STORAGE_KEY);
        const arrayRes = await JSON.parse(response);

        const pathname = await window.location.pathname;
        const keyBook = pathname.substring(8, pathname.length);

        const selected = await arrayRes.filter((obj) => obj.id == keyBook);
        console.log("Selected: ", selected);
        setBook(selected[0]);
      } catch (error) {
        console.log(error);
      }
    };

    loadBookAsync().then(() => {
      console.log("Book: ", book);
      loadSavedQuotes();
    });
  }, []);

  function setQuotesAndSave(newQuotes) {
    setQuotes(newQuotes);
    book.quotes = newQuotes;
    console.log(book.quotes);
  }

  function addQuotes(quote, character = "") {
    setQuotesAndSave([
      {
        id: crypto.randomUUID(),
        text: quote,
        character: character,
      },
      ...quotes,
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

        <div className="px-7 pt-7 pb-7 space-y-6 w-full h-full bg-auto bg-gradient-to-r from-brown_text to-brown_1">
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

          <MoreQuotes addQuote={addQuotes} />
        </div>
      </div>
    </>
  );
};

export default Details;
