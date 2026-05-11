import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState([]);
  return <CartContext.Provider value={{ items }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
