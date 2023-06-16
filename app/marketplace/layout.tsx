import '@/src/styles/global.scss';
import {Header} from '@/components/Header/Header';
import {Footer} from '@/components/Footer/Footer';
import React from 'react';
import {Navigation} from '@/modules/Marketplace/components/Navigation/Navigation';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col h-full'>
      <div className={'container'}>
        <div className={'flex flex-col flex-grow'}>
          <Navigation />
          {children}
        </div>
      </div>
    </div>
  );
}
