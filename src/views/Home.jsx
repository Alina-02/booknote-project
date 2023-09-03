import React, { useState, useEffect } from "react";

import Header from "../components/HomeComponents/Header";
import Book from "../components/HomeComponents/Book";
import MoreBooks from "../components/HomeComponents/MoreBooks";

import { LOCAL_STORAGE_KEY } from "../utils/constants";

import { removeAccents } from "../utils/utils";

import { db } from "../firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [seenBooks, setSeenBooks] = useState([]);

  const [bookDB, setBooksDB] = useState([]);
  const bookCollectionRef = collection(db, "books");

  function loadSavedBooks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setBooks(JSON.parse(saved));
      setSeenBooks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedBooks();

    //CON FIREBASE
    const getBookList = async () => {
      try {
        const data = await getDocs(bookCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
        setBooksDB(filteredData);
      } catch (error) {
        console.error(error);
      }
    };

    getBookList();
  }, []);

  function setBooksAndSave(newBooks) {
    setBooks(newBooks);
    setSeenBooks(newBooks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newBooks));
  }

  function addBook(bookTitle, bookAuthor, bookSaga = "", bookCover = false) {
    const bookId = removeAccents(
      (bookTitle + bookAuthor).replace(/ /g, "").toLowerCase()
    );

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

    const storeDBData = async () => {
      try {
        const docRef = await addDoc(collection(db, "books"), {
          title: bookTitle,
          author: bookAuthor,
          saga: bookSaga,
          id: bookId,
          cover: bookCover,
          quotes: [],
        });
      } catch (error) {
        console.error(error);
      }
    };

    storeDBData();
  }

  function findBook(title) {
    if (title == "") {
      loadSavedBooks();
    } else {
      if (books.length != 0) {
        const newBooks = books.filter((book) => book.title == title);
        setSeenBooks(newBooks);
      }
    }
  }

  function deleteBookById(bookId) {
    const newBooks = books.filter((book) => book.id != bookId);
    setBooksAndSave(newBooks);
  }

  return (
    <div className="w-full">
      <Header find={findBook}></Header>
      <div className="bg-[#F0EBEB] w-full h-5 shadow-lg"></div>
      <div className="min-w-[348px] px-7 pt-7 pb-7 space-x-6 space-y-6 w-full h-screen bg-gradient-to-r from-brown_1 to-brown_2">
        <div className="min-w-[348px] mr-2 grid m-auto grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5">
          {seenBooks.map((data, key) => (
            <Book
              key={crypto.randomUUID()}
              title={data.title}
              id={data.id}
              beCover={data.cover}
              deleteBook={deleteBookById}
            />
          ))}
          <MoreBooks addBook={addBook} />
        </div>
      </div>
    </div>
  );
};

export default Home;
