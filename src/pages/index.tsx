import React, {ReactElement} from 'react';
import {GetServerSideProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from "next-i18next";


export default function Home(): ReactElement {
  const { t } = useTranslation();

  return (
    <div>{t('common:some.key.path.welcome')}</div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {...(await serverSideTranslations(locale, ['common']))},
});
