import '@/src/styles/global.scss';
import {Header} from '@/components/Header/Header';
import {Footer} from '@/components/Footer/Footer';
import React from 'react';
import {LandingLayout} from '@/modules/Landing/Components/LandingLayout/LandingLayout';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return <div>{children}</div>;
}
