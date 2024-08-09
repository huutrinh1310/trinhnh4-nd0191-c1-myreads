function AuthorList({ authors }) {
  const ListAuthorCard = authors?.map((item, index) => {
    return <div key={index} className="book-authors">{item}</div>;
  });
  return <ol className="book-author">{ListAuthorCard}</ol>;
}

export default AuthorList;
