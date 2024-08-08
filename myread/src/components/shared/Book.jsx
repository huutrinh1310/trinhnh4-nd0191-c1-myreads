import ListAuthor from "../../pages/home/components/ListAuthor";

function Book({ content, onChange }) {
  const { imageLinks, title, authors, id } = content;

  return (
    <li key={id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${imageLinks.thumbnail}")`,
            }}
          ></div>
          <div className="book-shelf-changer bg-primary">
            <select
              onChange={(e) => {
                onChange(content, e.target.value);
              }}
              value={'none'}
            >
              <option
                value="none"
                disabled
              >
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <ListAuthor authors={authors} />
      </div>
    </li>
  );
}

export default Book;
