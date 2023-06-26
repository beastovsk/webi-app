import {GetProducts} from '@/modules/Marketplace/api';
import {MarketplaceBanner} from '@/modules/Marketplace/components/MarketplaceBanner/MarketplaceBanner';
import {ProductsList} from '@/modules/Marketplace/components/ProductsList/ProductsList';
import React from 'react';
import {useQuery} from 'react-query';

import banner from '/public/image/marketplace-banner.png';

async function getData() {
  const res = await fetch('http://api.webi-agency.ru/api/v1/search');

  if (!res.ok) {
    return;
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      <MarketplaceBanner productItem={data?.results[0]} />
      <ProductsList title={'Популярные товары'} productsList={data?.results || []} />
    </>
  );
}
