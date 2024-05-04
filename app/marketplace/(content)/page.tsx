import {MarketplaceBanner} from '@/modules/Marketplace/components/MarketplaceBanner/MarketplaceBanner';
import {PopularContent} from '@/modules/Marketplace/components/PopularContent/PopularContent';
import React from 'react';

export default async function Page() {
  return (
    <>
      <MarketplaceBanner />
      <PopularContent title='Последние добавления' />{' '}
    </>
  );
}
