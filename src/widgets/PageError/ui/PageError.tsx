import React from "react";
import { useTranslation } from "react-i18next";
import classNames from "shared/lib/classNames/classNames";
import Button from "shared/ui/Button/Button";
import styles from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}
const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames(styles.pageError, {}, [className])}>
      {t("Произошла непредвиденная ошибка")}
      <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
    </div>
  );
};

export default PageError;
