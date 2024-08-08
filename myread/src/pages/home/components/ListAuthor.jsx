function ListAuthor({ authors }) {
  const AuthorCard = authors?.map((item, index) => {
    return <div key={index} className="book-authors">{item}</div>;
  });
  return <ol className="book-author">{AuthorCard}</ol>;
}

export default ListAuthor;
