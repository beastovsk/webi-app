import {MarketplaceBanner} from '@/modules/Marketplace/components/MarketplaceBanner/MarketplaceBanner';
import {ProductsList} from '@/modules/Marketplace/components/ProductsList/ProductsList';
import {SearchBar} from '@/modules/Marketplace/components/SearchBar/SearchBar';
import {SearchContent} from '@/modules/Marketplace/components/SearchContent/SearchContent';
import React from 'react';

export default async function Page() {
  return (
    <>
      <SearchBar />
      <SearchContent title={'Товары'} />
    </>
  );
}
