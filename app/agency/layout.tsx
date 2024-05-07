import {Footer} from '@/components/Footer/Footer';
import {Header} from '@/components/Header/Header';
import '@/src/styles/global.scss';
import {Metadata} from 'next';

import React from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Webi Agency',
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
    follow: true
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
    <div className='flex flex-col h-full w-full'>
      <div className='flex-grow-0 flex-shrink-0 basis-auto container'>
        <Header />
      </div>
      <div className='flex-grow flex-shrink-0 basis-auto container flex flex-col gap-20 md:gap-10'>{children}</div>
      <div className='flex-grow-0 flex-shrink-0 basis-auto mt-20'>
        <Footer />
      </div>
    </div>
  );
}
