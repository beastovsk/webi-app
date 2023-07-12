'use client';

import PreloaderImage from '@/components/PreloaderImage/PreloaderImage';
import Btn from '@/components/UI/Btn/Btn';
import {formatProductPrice, getTypeName} from '@/src/helpers/hooks';
import {CheckOutlined} from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import React, {FC, useEffect, useState} from 'react';
import {useStore} from '../../store';
import {IProduct} from '../../types';
import s from './MarketplaceBanner.module.scss';

import {animated, useInView} from '@react-spring/web';

import banner from '/public/image/marketplace-banner.png';

interface MarketplaceBannerProps {
  productItem: IProduct;
  productsList: IProduct[];
}

export const MarketplaceBanner: FC<MarketplaceBannerProps> = ({productItem, productsList}) => {
  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0.7, y: 40},
      to: {opacity: 1, y: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  const basketList = localStorage.getItem('basketList');

  const copyList = useStore((store) => store.basketList);
  const setCopyList = useStore((store) => store.setBasketList);

  useEffect(() => {
    setCopyList(JSON.parse(basketList) || []);

    if (basketList?.length || basketList) return;

    localStorage.setItem('basketList', JSON.stringify([]));
  }, []);

  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      <div className={s.banner}>
        <PreloaderImage src={banner} objectFit='cover' className={s.image} alt='' width={500} height={500} />
        <h2 className='text-xl mb-3'>Приобретайте сайт, веб-приложения и модули по доступным ценам</h2>
        <p className='mb-5'>Webi Маркетплейс - площадка для покупки веб-ресурсов</p>

        <div className='flex gap-5 sm:flex-col sm:gap-[10px]'>
          <Link href={'/marketplace/products'}>
            <Btn className='md:w-full'>Каталог</Btn>
          </Link>
          <Link href={'/marketplace/support'}>
            <Btn className='md:w-full' danger>
              Поддержка
            </Btn>
          </Link>
        </div>
      </div>

      <div className='flex md:flex-col gap-5 bg-[#1D1932] p-5 rounded-3xl flex-grow'>
        <PreloaderImage
          src={banner}
          objectFit='cover'
          alt=''
          width={200}
          height={300}
          className='object-cover rounded-3xl md:w-full'
        />

        <div className='flex flex-col justify-between'>
          <h2 className={s.title}>новый продукт</h2>

          <h3 className='mt-5 font-medium'>{productItem.name}</h3>

          <span className='flex gap-2'>
            Тип: <p className='text-[#6C7AA0]'>{getTypeName(productItem.type)}</p>
          </span>
          <span className='flex gap-2'>
            Цена: <p className='text-[#6C7AA0]'>{formatProductPrice(productItem.price)}</p>
          </span>

          <div className={s.buttons}>
            <Btn
              className='sm:w-full'
              disabled={!!copyList.filter((item) => item.id == productItem.id).length}
              onClick={(e: any) => {
                e.preventDefault();
                const basketArray = JSON.parse(basketList);

                localStorage.setItem(
                  'basketList',
                  JSON.stringify([
                    ...(basketArray?.length ? basketArray : []),
                    productsList.filter((item) => item.id == productItem.id).at(-1)
                  ])
                );

                setCopyList([...basketArray, productsList.filter((item) => item.id == productItem.id).at(-1)]);
              }}
            >
              {!!copyList.filter((item) => item.id == productItem.id).length ? 'В корзине' : 'В корзину'}
            </Btn>
            <Link className='' href={`/marketplace/products/${productItem.id}`}>
              <Btn className='sm:w-full' danger>
                Подробнее
              </Btn>
            </Link>
          </div>
        </div>
      </div>
    </animated.div>
  );
};
