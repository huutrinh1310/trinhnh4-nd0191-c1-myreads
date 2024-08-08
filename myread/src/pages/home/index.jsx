import ListBook from "../../components/shared/ListBook";
import { useBook } from "@/hook/useBook";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  const { books, changeStatusBook } = useBook();

  const listCurrentBooks = books.filter(
    (item) => item.shelf === "currentlyReading"
  );

  const listWantReadBooks = books.filter((item) => item.shelf === "wantToRead");

  const listReadBooks = books.filter((item) => item.shelf === "read");

  return (
    <div className="list-books">
      <div className="list-books-title bg-primary">
        <h1 className="font-bold text-white text-[2rem]">MyReads</h1>
      </div>
      <NavLink
        to="/search"
        className={"px-[20px] font-bold text-lg text-sky-500"}
      >
        Search
      </NavLink>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title text-lg font-bold text-black">
              Currently Reading
            </h2>
            <div className="bookshelf-books">
              <ListBook
                books={listCurrentBooks}
                onChange={changeStatusBook}
              />
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title text-lg font-bold text-black">
              Want to Read
            </h2>
            <div className="bookshelf-books">
              <ListBook
                books={listWantReadBooks}
                onChange={changeStatusBook}
              />
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title text-lg font-bold text-black">
              Read
            </h2>
            <div className="bookshelf-books">
              <ListBook
                books={listReadBooks}
                onChange={changeStatusBook}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
