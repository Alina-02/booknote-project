import React from "react";
import { useState, useEffect } from "react";
import loadBook from "../utils/loadBook";
import DetailsHeader from "../components/DetailsHeader";

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
      <DetailsHeader />
    </>
  );
};

export default Details;
