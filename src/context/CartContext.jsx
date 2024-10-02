import { createContext, useState, useEffect } from "react";

export const CartContext=createContext();

export default function CartContextProvider({children}){
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('shoppingCart');
        return savedCart ? JSON.parse(savedCart) : [];
      });
      useEffect(() => {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
      }, [cart]);

      const addCart = (product, quantity = 1) => {
        setCart((prevCart) => {
          const existingProduct = prevCart.find(p => p.product.id === product.id);
          
          if (existingProduct) {
            // Si le produit existe déjà, on met à jour la quantité
            return prevCart.map(p =>
              p.product.id === product.id
                ? { ...p, quantity: p.quantity + quantity } 
                : p
            );
          } else {
            // Si le produit n'existe pas, on l'ajoute avec la quantité par défaut
            return [...prevCart, { product, quantity }];
          }
        });
      };
    const deleteCart=(productId)=>{
        setCart(cart.filter(c=>c.product.id!==productId));
    }


    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    return (
        <CartContext.Provider value={{cart, addCart, deleteCart, totalItems}} >
            {children}
        </CartContext.Provider>
    )
}