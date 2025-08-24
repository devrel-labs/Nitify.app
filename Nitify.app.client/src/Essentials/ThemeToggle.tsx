import { useTheme } from "../hooks/useTheme"
import { SunIcon, MoonIcon } from "../icons"

export const ThemeToggle = ({disabled}: {disabled: Boolean}) => {

    const {theme, toggletheme} = useTheme()

    return  (
        <button onClick={toggletheme} className={disabled ? "flex items-center space-x-2 w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" : "p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors"}
          aria-label="Toggle dark mode">
            {theme === "light" ? <SunIcon/> : <MoonIcon className="h-5 w-5"/>}
            {disabled && <span>{theme ? "Light Mode" : "Dark Mode"}</span>}
        </button>
    )
}


