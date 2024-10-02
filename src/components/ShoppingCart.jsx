import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Trash2Icon = () => <span>🗑️</span>;
const ShoppingCart = () => {
  const { cart, updateQuantity, deleteCart } = useContext(CartContext);
  const navigate = useNavigate();
  // const [promoCode, setPromoCode] = useState('');
  const subtotal = cart.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
  const shippingCost = 1000;
  const total = subtotal + shippingCost;

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

 /*  const applyPromoCode = () => {
    setAlertMessage('Promo code applied successfully!');
   
  }; */

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Votre panier d'achats</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side: Cart items */}
          <div className="lg:w-2/3">
            {cart.length === 0 ? (
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-xl text-gray-600 mb-4">Votre panier est vide</p>
                <button
                  onClick={() => navigate('/')}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.product.id} className="bg-white p-6 rounded-lg shadow-md mb-4 flex items-center">
                  <img src={item.product.image} alt={item.product.name} className="w-24 h-24 object-cover rounded-md" />
                  <div className="ml-6 flex-grow">
                    <h2 className="text-lg font-semibold">{item.product.name}</h2>
                    <p className="text-gray-600 mb-2">{item.product.price} FCFA</p>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                        className="text-gray-500 hover:text-indigo-600 transition duration-300"
                      >
                        -
                      </button>
                      <span className="mx-2 w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                        className="text-gray-500 hover:text-indigo-600 transition duration-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold mb-2">{item.quantity * item.product.price} FCFA</p>
                    <button
                      onClick={() => deleteCart(item.product.id)}
                      className="text-red-500 hover:text-red-700 transition duration-300"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              ))
            )}
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-indigo-600 hover:text-indigo-800 transition duration-300 mt-4"
            >
              ←
              <span className="ml-2">Continuer les achats</span>
            </button>
          </div>
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>{subtotal} FCFA</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>{shippingCost} FCFA</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>{total} FCFA</span>
                </div>
              </div>
            {/*   <div className="mt-6">
                <label htmlFor="promo" className="block text-sm font-medium text-gray-700 mb-2">
                  Promo Code
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="promo"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-grow border rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter code"
                  />
                  <button
                    onClick={applyPromoCode}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition duration-300"
                  >
                    Apply
                  </button>
                </div>
              </div> */}
              <button className="w-full bg-indigo-600 text-white py-3 rounded-md mt-6 hover:bg-indigo-700 transition duration-300 flex items-center justify-center">
              🚚
                <span className="ml-2">Proceder au Paiement</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;