import React, { createContext, useContext, useState } from 'react';
const ComparisonContext = createContext<any>(null);
export const ComparisonProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState([]);
  return <ComparisonContext.Provider value={{ items }}>{children}</ComparisonContext.Provider>;
};
export const useComparison = () => useContext(ComparisonContext);
