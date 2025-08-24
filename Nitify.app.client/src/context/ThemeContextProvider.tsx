import { useEffect, useState } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";

export const ThemeContextProvider = ({children}: {children: React.ReactNode}) => {

    const [theme, setTheme] = useState<Theme>(() => localStorage.getItem("theme") as Theme || "light")

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);

    }, [theme])

    const toggletheme = () => {
         setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{theme, toggletheme}}>
            {children}
        </ThemeContext.Provider>
    )
}