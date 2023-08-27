import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Book from "../components/Book";
import MoreBooks from "../components/MoreBooks";
import cover1 from "../assets/img/final_emp_cover.webp";

const LOCAL_STORAGE_KEY = "booknote:books";

const Home = () => {
  const [books, setBooks] = useState([]);

  function loadSavedBooks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log(saved);
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

  function addBook(bookTitle, bookAuthor, bookSaga = "", bookCover = "") {
    setBooksAndSave([
      ...books,
      {
        id: crypto.randomUUID(),
        title: bookTitle,
        author: bookAuthor,
        saga: bookSaga,
        cover: bookCover,
      },
    ]);
  }

  return (
    <div className="bg-auto bg-gradient-to-r from-brown_2 to-brown_7 ">
      <Header></Header>
      <div className="grid sm:grid-cols-4 gap-12 m-auto md:pl-20 p-10 py-10">
        {books.map((data, key) => (
          <Book
            title={data.title}
            author={data.author}
            saga={data.saga}
            cover={data.cover}
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
  );
};

export default Home;
