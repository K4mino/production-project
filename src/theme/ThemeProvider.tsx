import { FC, useMemo, useState } from "react"
import { LOCAL_sTORAGE_THEME_KEY, ThemeContext } from "./ThemeContect"
import { Theme } from "./ThemeContect"

const defaultTheme = localStorage.getItem(LOCAL_sTORAGE_THEME_KEY) as Theme || Theme.LIGHT
const ThemeProvider:FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)


    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }),[theme])

  return (
    <ThemeContext.Provider 
        value={defaultProps}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider