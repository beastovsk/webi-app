import {MarketplaceBanner} from '@/modules/Marketplace/components/MarketplaceBanner/MarketplaceBanner';
import {ProductBanner} from '@/modules/Marketplace/components/ProductBanner/ProductBanner';
import {ProductDescription} from '@/modules/Marketplace/components/ProductDescription/ProductDescription';
import {ProductsList} from '@/modules/Marketplace/components/ProductsList/ProductsList';
import {SearchBar} from '@/modules/Marketplace/components/SearchBar/SearchBar';
import React from 'react';

import banner from '/public/image/marketplace-banner.png';

export default function Page() {
  return (
    <>
      <ProductBanner image={banner} title='Сайт для турагенства' />
      <ProductDescription
        date='12 Июня 2023'
        description='Сайт для тур агенства - продукт, для продажи туристических путевок онлайн.'
        id={1}
        link={'agency.vercel.app'}
        modulesList={[
          {id: 1, label: 'Лендинг страница'},
          {id: 2, label: 'Авторизация'},
          {id: 3, label: 'Регистрация'}
        ]}
        techList={[
          {id: 1, label: 'React.js'},
          {id: 2, label: 'Next.js'},
          {id: 3, label: 'TypeScript'},
          {id: 4, label: 'Ant.design'}
        ]}
      />
    </>
  );
}
