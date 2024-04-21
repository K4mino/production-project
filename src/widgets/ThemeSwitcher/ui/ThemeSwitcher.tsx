import React from 'react'
import { useTheme, Theme  } from 'app/providers/ThemeProvider'
import classNames from 'shared/lib/classNames/classNames'
import styles from './ThemeSwitcher.module.scss'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import Button from 'shared/ui/Button/Button'
import { ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?:string
}
const ThemeSwitcher:React.FC<ThemeSwitcherProps> = ({className}) => {
  const {theme,toggleTheme} = useTheme();

  return (
      <Button theme={ThemeButton.CLEAR} className={classNames(styles.themeSwitcher, {}, [className])} onClick={toggleTheme}>
        {
          theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>
        }
      </Button>
  )
}

export default ThemeSwitcher