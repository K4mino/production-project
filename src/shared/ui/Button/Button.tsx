import React, { ButtonHTMLAttributes } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'


export enum ThemeButton {
    CLEAR = 'clear',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string;
    theme?:ThemeButton;
}
const Button:React.FC<ButtonProps> = (props) => {

    const {
        className,
        children,
        theme,
        ...otherProps
    } = props

  return (
    <button className={classNames(styles.button, {}, [className,styles[theme]])} {...otherProps}>
        {children}
    </button>
  )
}

export default Button