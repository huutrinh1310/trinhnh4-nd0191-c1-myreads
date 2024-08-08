import { search, update } from "@/BooksAPI";
import ListBook from "@/components/shared/ListBook";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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

  const handleChangeInput = (value) => {
    setInputValue(value);
  };

  const changeStatusBook = async (book, status) => {
    await update(book, status).then(() => navigate("/"));
  };

  return (
    <div className="app">
      <div className="search-books">
        <div className="search-books-bar">
          <NavLink
            className="close-search"
            to="/"
          >
            Close
          </NavLink>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={inputValue}
              onChange={(e) => {
                handleChangeInput(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          {(books.length > 0 && (
            <ListBook
              books={books}
              onChange={changeStatusBook}
            />
          )) || (
            <p className="font-bold text-neutral-300 font-[2rem]">
              List is empty
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
