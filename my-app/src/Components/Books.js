import { books } from "../constants";

const Books = () => {
  return (
    <>
      <h1>Books</h1>
      <ul>
        {books.map(({ id, title, author, rating }) => {
          return (
            <li key={id}>
              {title} | {author} | {rating}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Books;
