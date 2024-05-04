'use client';

import PreloaderImage from '@/components/PreloaderImage/PreloaderImage';
import Btn from '@/components/UI/Btn/Btn';
import Link from 'next/link';
import React, {FC} from 'react';
import s from './MarketplaceBanner.module.scss';

import {animated, useInView} from '@react-spring/web';

import banner from '/public/image/marketplace-banner.png';

interface MarketplaceBannerProps {}

export const MarketplaceBanner: FC<MarketplaceBannerProps> = () => {
  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0.7, y: 40},
      to: {opacity: 1, y: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      <div className={s.banner}>
        <PreloaderImage src={banner} objectFit='cover' className={s.image} alt='' width={500} height={500} />
        <h2 className='text-xl mb-3'>
          Мы даем возможность запустить ваш онлайн-бизнес с помощью проверенных инструментов
        </h2>
        <p className='mb-5'>Webi Маркетплейс - площадка для покупки/продажи веб-ресурсов</p>

        <div className='flex gap-5 sm:flex-col sm:gap-[10px]'>
          <Link href={'/marketplace/products'}>
            <Btn className='md:w-full'>Каталог</Btn>
          </Link>
          <Link href={'https://t.me/beastovsk'}>
            <Btn className='md:w-full' danger>
              Поддержка
            </Btn>
          </Link>
        </div>
      </div>
    </animated.div>
  );
};
