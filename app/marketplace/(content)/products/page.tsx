import {MarketplaceBanner} from '@/modules/Marketplace/components/MarketplaceBanner/MarketplaceBanner';
import {ProductsList} from '@/modules/Marketplace/components/ProductsList/ProductsList';
import {SearchBar} from '@/modules/Marketplace/components/SearchBar/SearchBar';
import React from 'react';

async function getData() {
  const res = await fetch('http://api.webi-agency.ru/api/v1/search');

  if (!res.ok) {
    return {results: []};
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      <SearchBar />
      <ProductsList title={'Товары'} productsList={data.results} />
    </>
  );
}
