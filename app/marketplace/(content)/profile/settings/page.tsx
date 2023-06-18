import {MarketplaceBanner} from '@/modules/Marketplace/components/MarketplaceBanner/MarketplaceBanner';
import {ProductsList} from '@/modules/Marketplace/components/ProductsList/ProductsList';
import {SearchBar} from '@/modules/Marketplace/components/SearchBar/SearchBar';
import {SettingsMenu} from '@/modules/Marketplace/components/SettingsMenu/SettingsMenu';
import React from 'react';

import banner from '/public/image/marketplace-banner.png';

export default function Page() {
  return (
    <>
      <h2 className='text-xl font-medium'>Настройки</h2>
      <SettingsMenu />
    </>
  );
}
