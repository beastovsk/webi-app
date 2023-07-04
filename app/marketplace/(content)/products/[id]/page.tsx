import {MarketplaceBanner} from '@/modules/Marketplace/components/MarketplaceBanner/MarketplaceBanner';
import {ProductBanner} from '@/modules/Marketplace/components/ProductBanner/ProductBanner';
import {ProductDescription} from '@/modules/Marketplace/components/ProductDescription/ProductDescription';
import {ProductsList} from '@/modules/Marketplace/components/ProductsList/ProductsList';
import {SearchBar} from '@/modules/Marketplace/components/SearchBar/SearchBar';
import {usePathname} from 'next/navigation';
import React from 'react';

import banner from '/public/image/marketplace-banner.png';

async function getData(id) {
  const res = await fetch(`http://api.webi-agency.ru/api/v1/get-product/${id}`);

  if (!res.ok) {
    return {results: []};
  }

  return res.json();
}

export default async function Page({
  params,
  searchParams
}: {
  params: {id: string};
  searchParams?: {[key: string]: string | string[] | undefined};
}) {
  const data = await getData(params.id);

  console.log(data);

  return (
    <>
      <ProductBanner image={data.full_image} title={data.name} price={data.price} />
      <ProductDescription productInfo={data} />
    </>
  );
}
