import React, { useState, useEffect, useContext } from "react";

import Header from "../components/HomeComponents/Header";
import Book from "../components/HomeComponents/Book";
import MoreBooks from "../components/HomeComponents/MoreBooks";

import { LOCAL_STORAGE_KEY } from "../utils/constants";
import cover1 from "../assets/img/final_emp_cover.webp";

const Home = () => {
  const [books, setBooks] = useState([]);

  function loadSavedBooks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setBooks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedBooks();
  }, []);

  function setBooksAndSave(newBooks) {
    setBooks(newBooks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newBooks));
  }

  function addBook(bookTitle, bookAuthor, bookSaga = "", bookCover = false) {
    const bookId = (bookTitle + bookAuthor).replace(/ /g, "").toLowerCase();

    setBooksAndSave([
      ...books,
      {
        title: bookTitle,
        author: bookAuthor,
        saga: bookSaga,
        id: bookId,
        cover: bookCover,
        quotes: [],
      },
    ]);
  }

  function deleteBookById(bookId) {
    const newBooks = books.filter((book) => book.id != bookId);
    setBooksAndSave(newBooks);
  }

  return (
    <div className="w-full">
      <Header></Header>
      <div className="bg-[#F0EBEB] w-full h-5 shadow-lg"></div>
      <div className="px-7 pt-7 pb-7 space-x-6 space-y-6 w-full h-screen bg-gradient-to-r from-brown_1 to-brown_2">
        <div className="grid sm:grid-cols-4 gap-12">
          {books.map((data, key) => (
            <Book
              key={crypto.randomUUID()}
              title={data.title}
              id={data.id}
              beCover={data.cover}
              deleteBook={deleteBookById}
            />
          ))}
          <Book
            cover={cover1}
            title="The Final Empire"
            author="Brandon Sanderson"
            saga="Stormlight Archive"
          />
          <MoreBooks addBook={addBook} />
        </div>
      </div>
    </div>
  );
};

export default Home;
