import { createContext, useState } from "react";

export const BooksContext = createContext();

export function BooksContextProvider(props) {
  const [contextBooks, setContextBooks] = useState([]);

  const val = { contextBooks, setContextBooks };

  return (
    <BooksContext.Provider value={val}>{props.children}</BooksContext.Provider>
  );
}
