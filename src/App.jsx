import {Routes, Route} from 'react-router-dom'
import ProductDetails from "./components/ProductDetails"
import Home from "./pages/home/Home";
import ShoppingCart from "./components/ShoppingCart";
import Product from "./pages/product/Product";
import Navbar from './components/navbar/Navbar';

function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:slug" element={<ProductDetails/>}/>
        <Route path="/cart" element={< ShoppingCart />}/>
        <Route path="product/" element={< Product />}/>
    </Routes>
    </>
  )
}

export default App;
