import { recipes } from "../constants";

const Cookbook = () => {
  return (
    <>
      <h1>Cook Book</h1>
      <ol>
        {recipes.map(({ id, name, ingredients, instructions }) => {
          return (
            <li key={id}>
              <p>Name: {name}</p>
              <h3>Ingredients</h3>
              <ul>
                {ingredients.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })}
              </ul>
              <h3>Instructions</h3>
              <ul style={{ listStyle: "none", paddingLeft: "10px" }}>
                {instructions.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default Cookbook;
