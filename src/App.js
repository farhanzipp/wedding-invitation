import './style/App.css';
import products from "./data/products.json";
import Product from "./components/Product";
import Navbar from './components/Navbar';
import Opening from './components/Opening';

function App() {
  return (
    <div>
      <Navbar />
      <main className="container text-center">
        <Opening />
        <div >
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </main>
      
    </div>
  );
}

export default App;
