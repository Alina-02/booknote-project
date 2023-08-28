import React from "react";
import { useState, useEffect } from "react";
import loadBook from "../utils/loadBook";
import DetailsHeader from "../components/DetailsHeader";
import Quote from "../components/Quote";

const pathname = window.location.pathname;
const key = pathname.substring(8, pathname.length);

const resource = loadBook(key);

console.log(resource);

const Details = () => {
  const [quotes, setQuotes] = useState([]);

  const data = resource.selectedBook.read();

  function loadSavedQuotes() {
    const saved = localStorage.getItem(key);
    if (saved) {
      setQuotes(JSON.parse(saved));
    }
  }

  function setQuotesAndSave(newQuotes) {
    setQuotes(newQuotes);
    localStorage.setItem(key, JSON.stringify(newQuotes));
  }

  function addQuotes(quote) {
    setQuotesAndSave([
      ...quotes,
      {
        key: crypto.randomUUID(),
        quote: quote,
      },
    ]);
  }

  function deleteQuoteById(quoteKey) {
    const newQuotes = quotes.filter((quote) => quote.key != quoteKey);
    setQuotesAndSave(newQuotes);
  }

  return (
    <>
      <div className="w-full">
        <DetailsHeader />
        <div className="p-7 space-y-6 w-full h-screen bg-auto bg-gradient-to-r from-brown_text to-brown_1">
          <Quote />
          <Quote />
          <Quote />
        </div>
      </div>
    </>
  );
};

export default Details;
