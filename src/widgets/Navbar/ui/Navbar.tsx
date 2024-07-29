import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?:string
}
const Navbar = ({ className }:NavbarProps) => (
    <div className={classNames(styles.navbar, {}, [])}>
        <div className={styles.links}>
            /
        </div>
    </div>
);

export default Navbar;
