import localFont from 'next/font/local';
import '@/src/styles/global.scss';
import {Metadata} from 'next';
import ClientProvider from '@/modules/ClientProdider';
import React from 'react';
import Head from 'next/head';

import YandexMetrika from 'next-yandex-metrika';

const gilroy = localFont({
  src: [
    {
      path: './../public/fonts/Gilroy-Light.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: './../public/fonts/Gilroy-Regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: './../public/fonts/Gilroy-Bold.woff',
      weight: '700',
      style: 'normal'
    },
    {
      path: './../public/fonts/Gilroy-Medium.woff',
      weight: '500',
      style: 'normal'
    }
  ]
});

export const metadata: Metadata = {
  title: {
    default: 'Webi agency',
    template: `%s | Webi`
  },
  description: 'Купить веб сайт или веб приложение',
  keywords: [
    'веб приложение',
    'создание сайтов',
    'разработка сайтов',
    'landing',
    'e commerce',
    'самый дешевый интернет магазин'
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <Head>
        <meta name='yandex-verification' content='c4492d1cc4639f2c' />
        <YandexMetrika yid={94315700} clickmap={true} trackLinks={true} accurateTrackBounce={true} webvisor={true} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <body>
        <main className={gilroy.className}>
          <ClientProvider>{children}</ClientProvider>
        </main>
      </body>
    </html>
  );
}
