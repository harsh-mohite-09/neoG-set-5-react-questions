import "./App.css";
import Watchlist from "./Components/Watchlist";
import Products from "./Components/Products";
import Books from "./Components/Books";
import Company from "./Components/Company";
import Cookbook from "./Components/Cookbook";

function App() {
  return (
    <div className="App">
      <Watchlist />
      <Products />
      <Books />
      <Company />
      <Cookbook />
    </div>
  );
}

export default App;
