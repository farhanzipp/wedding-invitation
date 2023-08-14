import './App.css';
import products from "./data/products.json";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <div>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
