import {GetProducts} from '@/modules/Marketplace/api';
import {MarketplaceBanner} from '@/modules/Marketplace/components/MarketplaceBanner/MarketplaceBanner';
import {PopularContent} from '@/modules/Marketplace/components/PopularContent/PopularContent';
import {ProductsList} from '@/modules/Marketplace/components/ProductsList/ProductsList';
import React from 'react';
import {useQuery} from 'react-query';

export default async function Page() {
  return (
    <>
      <MarketplaceBanner />
      <PopularContent title='Список товаров' />{' '}
    </>
  );
}
