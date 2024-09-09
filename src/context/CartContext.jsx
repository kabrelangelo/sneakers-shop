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


    const addCart=(product)=>{
        setCart([...cart, product])
    }
    const deleteCart=(productId)=>{
        setCart(cart.filter(product=>product.id!==productId));
    }
    return (
        <CartContext.Provider value={{cart, addCart, deleteCart}} >
            {children}
        </CartContext.Provider>
    )
}