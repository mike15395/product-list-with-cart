import {  createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider =({children})=>{
    const [cartItems,setCartItems] = useState([])

    const addToCart = (item)=>{

        setCartItems(prev=>[...prev,item]);
    }

    const removeFromCart = (name)=>{
        setCartItems(prev=>prev.filter(item=>item.name !==name))
    }

    return(
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}