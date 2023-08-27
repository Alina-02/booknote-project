import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Book from "../components/Book";
import MoreBooks from "../components/MoreBooks";
import cover1 from "../assets/img/final_emp_cover.webp";

import { LOCAL_STORAGE_KEY } from "../utils/constants";

const Home = () => {
  const [books, setBooks] = useState([]);

  function loadSavedBooks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setBooks(JSON.parse(saved));
    }
    console.log(saved);
  }

  useEffect(() => {
    loadSavedBooks();
  }, []);

  function setBooksAndSave(newBooks) {
    setBooks(newBooks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newBooks));
  }

  function addBook(bookTitle, bookAuthor, bookSaga = "", bookCover = "") {
    setBooksAndSave([
      ...books,
      {
        key: crypto.randomUUID(),
        title: bookTitle,
        author: bookAuthor,
        saga: bookSaga,
        cover: bookCover,
      },
    ]);
  }

  function deleteBookById(bookId) {
    const newBooks = books.filter((book) => book.id != bookId);
    setBooksAndSave(newBooks);
  }

  return (
    <div className="h-screen w-full">
      <Header></Header>
      <div className="bg-auto bg-gradient-to-r from-brown_2 to-brown_7 max-w-[1040] m-auto px-7 py-7">
        <div className="grid sm:grid-cols-4 gap-12">
          {books.map((data, key) => (
            <Book
              title={data.title}
              author={data.author}
              saga={data.saga}
              cover={data.cover}
              id={data.key != null ? data.key : data.id}
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
