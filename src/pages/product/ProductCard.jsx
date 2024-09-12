import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { products } from '../../data/Products';
import { Link } from 'react-router-dom';


const ProductCard = () => {
    const {addCart}=useContext(CartContext)
    return (
        <div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-3'>
           {
       products.map((item)=>(
        <div key={item.id} className="group mx-5 flex w-full flex-col rounded-lg border
         border-gray-100 hover:scale-110 transition-transform duration-300 bg-white shadow-md">
  <Link to={`/product/${item.slug}`} className="relative  mt-3 mx-2 flex h-64 overflow-hidden rounded-xl">
    <img className="peer top-0 right-0 w-full object-contain" 
    src={item.image} alt={item.name} />
  </Link>
  <div className="mt-4 px-5 pb-5">
    <Link to={`/product/${item.slug}`}>
      <h5 className="text-xl tracking-tight text-slate-900">{item.name}</h5>
    </Link>
    <div className="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span className="text-xl font-bold text-slate-900">{item.price}</span>
        {/* <span className="text-sm text-slate-900 line-through">$699</span> */}
      </p>
    </div>
    <Link to="/product/cart" onClick={()=>addCart(item,1)} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Add to cart</Link
    >
  </div>
</div>
       ))
      }
      
</div> 
        </div>
    );
};

export default ProductCard;