import {Footer} from '@/components/Footer/Footer';
import {Header} from '@/modules/Marketplace/components/Header/Header';
import {Navigation} from '@/modules/Marketplace/components/Navigation/Navigation';
import '@/src/styles/global.scss';

import React from 'react';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex h-full'>
      <Navigation />
      <div className='flex flex-col w-full h-full ml-[100px] md:ml-0 flex-grow gap-10'>
        <div className='flex-grow-0 flex-shrink-0 basis-auto container'>
          <Header />
        </div>
        <div className='flex-grow min-h-[90vh] flex-shrink-0 basis-auto container flex flex-col gap-20 md:gap-10'>
          {children}
        </div>
        <div className='flex-grow-0 flex-shrink-0 basis-auto'>
          <Footer />
        </div>
      </div>
    </div>
  );
}
