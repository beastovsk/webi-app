import {MarketplaceBanner} from '@/modules/Marketplace/components/MarketplaceBanner/MarketplaceBanner';
import {ProductsList} from '@/modules/Marketplace/components/ProductsList/ProductsList';
import React from 'react';

import banner from '/public/image/marketplace-banner.png';

export default function Page() {
  return (
    <>
      <MarketplaceBanner />
      <ProductsList
        title={'Популярные товары'}
        productsList={[
          {id: 1, image: banner, title: 'Сайт для тур-агенства', type: 1, price: 10000},
          {id: 2, image: banner, title: 'Сайт для тур-агенства', type: 1, price: 10000},
          {id: 3, image: banner, title: 'Сайт для тур-агенства', type: 1, price: 10000},
          {id: 4, image: banner, title: 'Сайт для тур-агенства', type: 1, price: 10000}
        ]}
      />
    </>
  );
}
