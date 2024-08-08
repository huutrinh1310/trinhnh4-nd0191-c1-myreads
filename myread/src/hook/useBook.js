import { getAll, update } from "@/BooksAPI";
import { useEffect, useState } from "react";

export const useBook = () => {
  const [books, setBooks] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      const data = await getAll();
      if (JSON.stringify(books) !== JSON.stringify(data)) {
        setBooks(data);
      }
    };

    getBooks();

    return () => setBooks([]);
  }, [isLoad]);

  const changeStatusBook = async (book, status) => {
    setIsLoad(true);
    await update(book, status);
    setIsLoad(false);
  };

  return {
    books,
    changeStatusBook,
  };
};
