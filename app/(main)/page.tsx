import React from 'react';
import {ThemeSwitch} from '@/components/ThemeSwitch/ThemeSwitch';
import {Banner} from '@/modules/Landing/Components/Banner/Banner';
import {Header} from '@/components/Header/Header';
import {Description} from '@/modules/Landing/Components/Description/Description';
import {Services} from '@/modules/Landing/Components/Services/Services';
import {Marketplace} from '@/modules/Landing/Components/Marketplace/Marketplace';
import {Faq} from '@/modules/Landing/Components/Faq/Faq';
import {Consumers} from '@/modules/Landing/Components/Consumers/Consumers';

export default async function Page() {
  return (
    <>
      <Banner />
      <Description />
      <Marketplace />
      <Consumers />
      <Services />
      {/* <Faq /> */}
    </>
  );
}
