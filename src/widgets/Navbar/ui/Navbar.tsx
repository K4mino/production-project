import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import classNames from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import Modal from 'shared/ui/Modal/Modal';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?:string
}
const Navbar = ({ className }:NavbarProps) => {

    const {t} = useTranslation();

    const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModalOpen((prev) => !prev);
    },[])

    return(
    <div className={classNames(styles.navbar, {}, [])}>
        <Button
            onClick={onToggleModal}
            theme={ThemeButton.CLEAR_INVERTED} 
            className={styles.links}>
            {t("Войти")}
        </Button>
        <Modal isOpen={isAuthModalOpen} onClose={onToggleModal}>
            qweqweqweqweqwecadas sdqw dsqweqwe qwe         qweqw e
        </Modal>
    </div>
    )
};

export default Navbar;
