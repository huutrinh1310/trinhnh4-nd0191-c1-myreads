import { search, update } from "@/BooksAPI";
import ListBook from "@/components/shared/ListBook";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SearchPage() {
  const [books, setBooks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getBooks = async () => {
      const data = await search(inputValue);
      if (data.length > 0) setBooks(data);
    };

    if (inputValue.length > 0) {
      getBooks();
    }

    return () => setBooks([]);
  }, [inputValue]);

  const handleChangeValue = (value) => {
    setInputValue(value);
  };

  const changeStatus = async (book, status) => {
    await update(book, status).then(() => navigate("/"));
  };

  return (
    <div className="app">
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/"
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={inputValue}
              onChange={(e) => {
                handleChangeValue(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          {(books.length > 0 && (
            <ListBook
              books={books}
              onChangeStatus={changeStatus}
            />
          )) || (
            <div className="w-full h-[100vh] flex justify-center items-center">
              <p className="font-bold text-neutral-300 text-6xl">
                List is empty
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
