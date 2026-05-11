import React, { createContext, useContext, useState } from 'react';
const ThemeContext = createContext<any>(null);
export const ThemeProvider = ({ children, defaultTheme }: { children: React.ReactNode, defaultTheme: string }) => {
  const [theme, setTheme] = useState(defaultTheme);
  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};
export const useTheme = () => useContext(ThemeContext);
