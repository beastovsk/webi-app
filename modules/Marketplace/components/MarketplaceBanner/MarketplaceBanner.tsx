'use client';

import Btn from '@/components/UI/Btn/Btn';
import Image from 'next/image';
import Link from 'next/link';
import React, {FC} from 'react';
import s from './MarketplaceBanner.module.scss';

import banner from '/public/image/marketplace-banner.png';

interface MarketplaceBannerProps {}

export const MarketplaceBanner: FC<MarketplaceBannerProps> = () => {
  return (
    <div className={s.container}>
      <div className={s.banner}>
        <Image src={banner} className={s.image} alt='' width={500} height={500} />
        <h2 className='text-xl mb-3'>Приобретайте сайт, веб-приложения и модули по доступным ценам</h2>
        <p className='mb-5'>Webi Маркетплейс - площадка для покупки веб-ресурсов</p>

        <div className='flex gap-5 md:flex-col'>
          <Link href={'/marketplace/products'}>
            <Btn className='md:w-full'>Каталог</Btn>
          </Link>
          <Link href={'/marketplace/support'}>
            <Btn danger>Поддержка</Btn>
          </Link>
        </div>
      </div>

      <div className='flex md:flex-col gap-5 bg-[#1D1932] p-5 rounded-3xl flex-grow'>
        <Image src={banner} alt='' width={200} height={300} className='object-cover rounded-3xl md:w-full' />

        <div className='flex flex-col justify-between'>
          <h2 className={s.title}>новый продукт</h2>

          <h3 className='mt-5 font-medium'>Сайт для тур-агенства</h3>

          <span className='flex gap-2'>
            Тип: <p className='text-[#6C7AA0]'>веб-сайт</p>
          </span>
          <span className='flex gap-2'>
            Цена: <p className='text-[#6C7AA0]'>10.000 Р</p>
          </span>

          <div className='flex gap-5 md:flex-col md:gap-2 md:mt-5'>
            <Btn>В корзину</Btn>
            <Btn danger>Подробнее</Btn>
          </div>
        </div>
      </div>
    </div>
  );
};
