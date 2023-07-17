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
import {useQuery} from 'react-query';
import {GetProducts} from '../../api';

interface MarketplaceBannerProps {}

export const MarketplaceBanner: FC<MarketplaceBannerProps> = () => {
  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0.7, y: 40},
      to: {opacity: 1, y: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  const {data, isLoading, isSuccess} = useQuery('productsList', GetProducts);
  const [productItem, setProductItem] = useState<any>({});

  const basketList = localStorage.getItem('basketList');

  const copyList = useStore((store) => store.basketList);
  const setCopyList = useStore((store) => store.setBasketList);

  useEffect(() => {
    setCopyList(JSON.parse(basketList) || []);

    if (basketList?.length || basketList) return;

    localStorage.setItem('basketList', JSON.stringify([]));
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setProductItem(data.results.at(-1));
    }
  }, [isSuccess]);

  const skeletonCard = (
    <div role='status' className='p-4 w-full flex gap-5 rounded-3xl shadow animate-pulse md:p-6'>
      <div className='flex w-1/3 items-center justify-center h-48 mb-4 bg-gray-700 rounded '>
        <svg
          className='w-10 h-10 text-gray-600'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 16 20'
        >
          <path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z' />
          <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
        </svg>
      </div>
      <div className='flex flex-col'>
        <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
        <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
        <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
        <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
      </div>
    </div>
  );

  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      <div className={s.banner}>
        <PreloaderImage src={banner} objectFit='cover' className={s.image} alt='' width={500} height={500} />
        <h2 className='text-xl mb-3'>
          Мы даем возможность запустить ваш онлайн-бизнес с помощью проверенных инструментов
        </h2>
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
        {isSuccess ? (
          <>
            <PreloaderImage
              src={productItem.full_image}
              objectFit='cover'
              alt=''
              width={200}
              height={200}
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
                        data.results.filter((item) => item.id == productItem.id).at(-1)
                      ])
                    );

                    setCopyList([...basketArray, data.results.filter((item) => item.id == productItem.id).at(-1)]);
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
            </div>{' '}
          </>
        ) : (
          <>{skeletonCard}</>
        )}
      </div>
    </animated.div>
  );
};
