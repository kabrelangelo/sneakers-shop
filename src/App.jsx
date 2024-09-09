import Navbar from "./components/Navbar"
import {Routes, Route} from 'react-router-dom'
import ProductDetails from "./components/ProductDetails"
import Home from "./pages/home/Home";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:slug" element={<ProductDetails/>}/>
        <Route path="product/cart" element={< ShoppingCart />}/>
    </Routes>
    </>
  )
}

export default App;
