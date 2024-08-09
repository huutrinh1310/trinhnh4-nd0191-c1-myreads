import Book from "./Book";

function BookList({ books, onChangeStatus }) {
  const ListBookCard = books?.map((item) => {
    return (
      <Book
        key={item.id}
        content={item}
        onChange={onChangeStatus}
      />
    );
  });

  return <ol className="books-grid">{ListBookCard}</ol>;
}

export default BookList;
