import React from 'react';
import {ThemeSwitch} from '@/components/ThemeSwitch/ThemeSwitch';
import {Banner} from '@/modules/Landing/Components/Banner/Banner';
import {Header} from '@/components/Header/Header';
import {Description} from '@/modules/Landing/Components/Description/Description';
import {Services} from '@/modules/Landing/Components/Services/Services';

export default async function Page() {
  return (
    <>
      <Banner />
      <Description />
      <Services />
    </>
  );
}
