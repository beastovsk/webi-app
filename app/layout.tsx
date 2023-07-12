import localFont from 'next/font/local';
import '@/src/styles/global.scss';
import {Metadata} from 'next';
import ClientProvider from '@/modules/ClientProdider';
import React from 'react';
import Head from 'next/head';

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
  title: 'Webi agency',
  description: 'description template',
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
        {/* <meta charset='utf-8' /> */}
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
