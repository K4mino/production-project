import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'shared/lib/classNames/classNames';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}
const LangSwitcher: React.FC<LangSwitcherProps> = ({ className,short }) => {
    const { t, i18n } = useTranslation();

    const handleTranslate = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div className={classNames(styles.langSwitcher, {}, [className])}>
            <Button theme={ThemeButton.CLEAR} onClick={handleTranslate}>
                {t(short ? 'Короткий язык' : 'Язык')}
            </Button>
        </div>
    );
};

export default LangSwitcher;
