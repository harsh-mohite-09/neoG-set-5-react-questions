import { watchlist } from "../constants";

const Watchlist = () => {
  return (
    <>
      <h1>Watchlist</h1>
      <ul>
        {watchlist.map(({ id, title, director }) => {
          return (
            <li key={id}>
              {title} by {director}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Watchlist;
