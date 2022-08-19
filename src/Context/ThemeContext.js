import React, { useContext } from "react";

const ThemeContext = React.createContext();

export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = React.useState("red")

    function toggleTheme() {
        setTheme(prevTheme => !prevTheme)
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)