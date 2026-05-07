import React, { createContext, useContext, useState } from 'react';
const FavoritesContext = createContext<any>(null);
export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState([]);
  return <FavoritesContext.Provider value={{ favorites }}>{children}</FavoritesContext.Provider>;
};
export const useFavorites = () => useContext(FavoritesContext);
