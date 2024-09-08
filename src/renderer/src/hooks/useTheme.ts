import { useEffect, useState } from "react"

/**
 * A custom React hook to manage the application theme.
 *
 * @return {[string, function]} A "tuple" (array) containing the current theme and a function to toggle the theme.
*/

type ThemeMode = 'light' | 'dark' | string
export const useTheme = (mode?: ThemeMode): [string, () => void] => {
    const [theme, setTheme] = useState(mode || 'dark')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }


    useEffect(() => {
        localStorage.setItem('theme', theme)

        return () => {

        }
    }, [theme])

    
    return [theme, toggleTheme]
}