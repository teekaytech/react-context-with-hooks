import { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Who the crown fits' },
    { id: 2, title: 'The last princess' },
    { id: 3, title: 'Suzwe Banzi is dead' },
    { id: 4, title: 'Mr. Sada is a farmer' }
  ]);
  return (
    <BookContext.Provider value={{books}}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;