import {MarketplaceBanner} from '@/modules/Marketplace/components/MarketplaceBanner/MarketplaceBanner';
import {ProductBanner} from '@/modules/Marketplace/components/ProductBanner/ProductBanner';
import {ProductDescription} from '@/modules/Marketplace/components/ProductDescription/ProductDescription';
import {ProductDetail} from '@/modules/Marketplace/components/ProductDetail/ProductDetail';
import {ProductsList} from '@/modules/Marketplace/components/ProductsList/ProductsList';
import {SearchBar} from '@/modules/Marketplace/components/SearchBar/SearchBar';
import {usePathname} from 'next/navigation';
import React from 'react';

import banner from '/public/image/marketplace-banner.png';

export default async function Page({params}: {params: {id: string}}) {
  return (
    <>
      <ProductDetail id={params.id} />
    </>
  );
}
