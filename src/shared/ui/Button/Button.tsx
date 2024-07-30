import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED ='clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum SizeButton {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: SizeButton;
}
const Button: React.FC<ButtonProps> = (props) => {
    const {
        className, children, theme,size = SizeButton.M, ...otherProps
    } = props;

    const mods = {
        [styles[theme]]: true,
        [styles.square]: props.square,
        [styles[size]]: true,
    }

    return (
        <button
            type="button"
            className={classNames(styles.button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
