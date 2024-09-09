import Navbar from "./components/Navbar"
import {Routes, Route} from 'react-router-dom'
import ProductDetails from "./components/ProductDetails"
import Home from "./pages/home/Home";

function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:slug" element={<ProductDetails />}/>
    </Routes>
    </>
  )
}

export default App;
