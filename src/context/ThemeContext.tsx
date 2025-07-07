import { createContext, useContext, useState } from "react";
import { themes } from "./themes";

export const ThemeContext = createContext({
  theme: themes.primary, //initial value(starting value)
  toggleTheme: () => {}, //initial value (starting value)
});
type ThemeContextProviderProps = {
  children: React.ReactNode;
  toggleTheme: () => void;
};
type ThemeType = "primary" | "secondary";

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("primary");
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "primary" ? "secondary" : "primary");
  };
  return (
    <ThemeContext.Provider value={{ theme: themes[currentTheme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
