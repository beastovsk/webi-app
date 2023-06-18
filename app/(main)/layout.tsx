import '@/src/styles/global.scss';
import {Header} from '@/components/Header/Header';
import {Footer} from '@/components/Footer/Footer';
import React from 'react';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col h-full'>
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
