import { createContext, useState } from "react";

export const ContextCart=createContext();

export default function CartContextProvider({children}){
    const [cart, setCart]=useState([]);
    const addCart=(product)=>{
        setCart([...cart, product])
    }
    const deleteCart=(productId)=>{
        setCart(cart.filter(product=>product.id!==productId));
    }
    return (
        <CartContextProvider value={{cart, addCart, deleteCart}} >
            {children}
        </CartContextProvider>
    )
}