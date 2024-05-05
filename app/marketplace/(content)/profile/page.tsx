import {MarketplaceBanner} from '@/modules/Marketplace/components/MarketplaceBanner/MarketplaceBanner';
import {ProductsList} from '@/modules/Marketplace/components/ProductsList/ProductsList';
import {SearchBar} from '@/modules/Marketplace/components/SearchBar/SearchBar';
import React from 'react';

import banner from '/public/image/marketplace-banner.png';
import { PersonalServices } from '@/modules/Marketplace/components/PersonalServices/PersonalServices';

export default function Page() {
  return (
    <>
      <h2 className='text-xl font-medium'>Личный кабинет</h2>
      <PersonalServices />
    </>
  );
}
