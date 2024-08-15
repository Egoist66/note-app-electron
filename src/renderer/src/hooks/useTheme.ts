import { useState } from "react"

/**
 * A custom React hook to manage the application theme.
 *
 * @return {[string, function]} An array containing the current theme and a function to toggle the theme.
*/

export const useTheme = (mode?: 'light' | 'dark'): [string, () => void] => {
    const [theme, setTheme] = useState(mode || 'dark')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    
    return [theme, toggleTheme]
}