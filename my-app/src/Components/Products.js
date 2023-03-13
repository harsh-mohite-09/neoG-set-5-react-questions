import { products } from "../constants";

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map(({ id, name, price, category }) => {
          return (
            <li key={id}>
              {name} | {price} | {category}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Products;
