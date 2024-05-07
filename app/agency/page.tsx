import {Banner} from '@/modules/Agency/Components/Banner/Banner';
import {Consumers} from '@/modules/Agency/Components/Consumers/Consumers';
import {Description} from '@/modules/Agency/Components/Description/Description';
import {Feedback} from '@/modules/Agency/Components/Feedback/Feedback';
import {Marketplace} from '@/modules/Agency/Components/Marketplace/Marketplace';
import {Services} from '@/modules/Agency/Components/Services/Services';
import React from 'react';

export default function Page() {
  return (
    <>
      <Banner />
      <Description />
      <Marketplace />
      <Consumers />
      <Services />
      <Feedback />
    </>
  );
}
