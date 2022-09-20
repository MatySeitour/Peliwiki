import React, { useState } from "react";

const ThemeContext = React.createContext({});

export function ThemeContextProvider({ children }) {

    const [stateNav, setStateNav] = useState(false)
    return (
        <ThemeContext.Provider value={{ stateNav, setStateNav }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;