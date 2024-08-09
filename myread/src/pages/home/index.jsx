import BookList from "../../components/shared/ListBook";
import { useBook } from "@/hook/useBook";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { books, changeStatusBook } = useBook();

  const currentBooks = books.filter(
    (item) => item.shelf === "currentlyReading"
  );

  const wantReadBooks = books.filter((item) => item.shelf === "wantToRead");

  const readBooks = books.filter((item) => item.shelf === "read");

  return (
    <div className="list-books">
      <div className="list-books-title bg-primary flex">
        <h1 className="font-bold text-white text-4xl w-[90%]">MyReads</h1>
        <Link
          to="/search"
          className={
            "px-[20px] font-bold text-xl text-white flex items-center gap-5 text-2xl hover:opacity-85"
          }
        >
          Search<Search />
        </Link>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title text-2xl font-bold text-black">
              Currently Reading
            </h2>
            <div className="bookshelf-books">
              <BookList
                books={currentBooks}
                onChangeStatus={changeStatusBook}
              />
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title text-2xl font-bold text-black">
              Want to Read
            </h2>
            <div className="bookshelf-books">
              <BookList
                books={wantReadBooks}
                onChangeStatus={changeStatusBook}
              />
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title text-2xl font-bold text-black">
              Read
            </h2>
            <div className="bookshelf-books">
              <BookList
                books={readBooks}
                onChangeStatus={changeStatusBook}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
