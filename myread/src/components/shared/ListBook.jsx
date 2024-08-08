import Book from "./Book";

function ListBook({ books, onChange }) {
  const BookCard = books?.map((item) => {
    return (
      <Book
        key={item.id}
        content={item}
        onChange={onChange}
      />
    );
  });

  return <ol className="books-grid">{BookCard}</ol>;
}

export default ListBook;
