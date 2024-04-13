import { useContext } from 'react'
import { Theme, ThemeContext, LOCAL_sTORAGE_THEME_KEY } from './ThemeContect'
 

interface useThemeResult {
    theme: Theme
    toggleTheme: () => void
}

export default function useTheme(): useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
      const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
      setTheme(newTheme)
        localStorage.setItem(LOCAL_sTORAGE_THEME_KEY, newTheme)
    }

    return {theme, toggleTheme}
}