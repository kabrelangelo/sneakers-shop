import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ShoppingCart = () => {
  const { cart, deleteCart } = useContext(CartContext);
  const totalCost = cart.reduce((acc, item) => acc + item.quantity * item.product.price, 0);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Votre Panier</h1>
        <div className="sm:flex shadow-lg rounded-lg overflow-hidden">
          {/* Partie gauche : liste des articles */}
          <div className="w-full sm:w-3/4 bg-white p-6">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500">Votre panier est vide</p>
            ) : (
              cart.map((item) => (
                <div key={item.product.id} className="flex items-center justify-between border-b py-4">
                  <img src={item.product.image} alt={item.product.name} className="h-24 object-cover rounded-md" />
                  <div className="flex-grow pl-4">
                    <p className="text-lg font-semibold">{item.product.name}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <button className="bg-gray-200 hover:bg-gray-300 rounded-l px-3" /* Logic for decrease quantity */>-</button>
                        <input
                          type="number"
                          value={item.quantity}
                          className="border text-center w-12"
                          readOnly
                        />
                        <button className="bg-gray-200 hover:bg-gray-300 rounded-r px-3" /* Logic for increase quantity */>+</button>
                      </div>
                      <p className="text-lg font-semibold">{`${item.quantity} x ${item.product.price} FCFA`}</p>
                    </div>
                    <div className="flex justify-center">
                      <button
                        className="text-red-500 py-2 px-4 rounded hover:underline"
                        onClick={() => deleteCart(item.product.id)}
                      >
                        Supprimer
                      </button>
                    </div>


                  </div>
                </div>
              ))
            )}
            <Link to="/" className="flex items-center justify-center mt-6 text-indigo-600 font-semibold hover:underline">
              <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continuer vos achats
            </Link>
          </div>

          {/* Partie droite : résumé de la commande */}
          <div className="w-full sm:w-1/4 bg-white p-6 border-l">
            <h2 className="text-2xl font-semibold border-b pb-4">Résumé de la commande</h2>
            <div className="flex justify-between mt-4 mb-2">
              <span className="font-semibold">Articles ({cart.length})</span>
              <span>{totalCost} FCFA</span>
            </div>
            <div>
              <label className="font-medium text-sm">Livraison</label>
              <select className="block w-full p-2 mt-1 border rounded">
                <option>Livraison standard - 1000 FCFA</option>
              </select>
            </div>
            {/* <div className="mt-4">
              <label htmlFor="promo" className="font-medium text-sm">Code Promo</label>
              <input
                type="text"
                id="promo"
                placeholder="Entrez votre code"
                className="block w-full p-2 border rounded mt-1"
              />
            </div> */}
          {/*   <button className="bg-red-500 hover:bg-red-600 text-white uppercase w-full py-2 mt-4 rounded">
              Appliquer
            </button> */}
            <div className="border-t mt-6 pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total à payer</span>
                <span>{totalCost + 1000} FCFA</span> {/* En supposant que la livraison est incluse */}
              </div>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white uppercase w-full py-2 mt-4 rounded">
                Commander
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
