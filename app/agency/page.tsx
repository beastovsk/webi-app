import {Banner} from '@/modules/Agency/Components/Banner/Banner';
import {CalculatePrice} from '@/modules/Agency/Components/CalculatePrice/CalculatePrice';
import {Consumers} from '@/modules/Agency/Components/Consumers/Consumers';
import {Description} from '@/modules/Agency/Components/Description/Description';
import {Feedback} from '@/modules/Agency/Components/Feedback/Feedback';
import {Marketplace} from '@/modules/Agency/Components/Marketplace/Marketplace';
import {Portfolio} from '@/modules/Agency/Components/Portfolio/Portfolio';
import {Services} from '@/modules/Agency/Components/Services/Services';
import localFont from 'next/dist/compiled/@next/font/dist/local';
import React from 'react';

export default function Page() {
  return (
    <div>
      <Banner />
      <Description />
      {/* <Marketplace /> */}
      <Consumers />
      <Services />
      <Portfolio />
      <Feedback />

      <CalculatePrice />
    </div>
  );
}
