import React from 'react'
import { useTranslation } from 'react-i18next';
import classNames from 'shared/lib/classNames/classNames';
import styles from './NotfoundPage.module.scss';

interface NotfoundPageProps {
    className?: string
}
const NotfoundPage = ({ className }: NotfoundPageProps = {}) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.notFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  )
}

export default NotfoundPage