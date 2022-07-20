import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCartLength] = useState();
  const value = [ cart, setCartLength ];
  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
};
