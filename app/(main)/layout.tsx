import '@/src/styles/global.scss';
import {Header} from '@/components/Header/Header';
import {Footer} from '@/components/Footer/Footer';
import React from 'react';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col h-full'>
      <div className={'container'}>
        <Header />
        <div className={'flex flex-col flex-grow gap-20'}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}
