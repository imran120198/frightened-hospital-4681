import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const Cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
  const [cart, setCartLength] = useState(Cart.length);
  const value = { cart, setCartLength };
  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
};
