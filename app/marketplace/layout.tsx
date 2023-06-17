import {Footer} from '@/components/Footer/Footer';
import {Header} from '@/modules/Marketplace/components/Header/Header';
import {Navigation} from '@/modules/Marketplace/components/Navigation/Navigation';
import '@/src/styles/global.scss';

import React from 'react';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return <div className='h-full'>{children}</div>;
}
