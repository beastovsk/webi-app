'use client';

import Btn from '@/components/UI/Btn/Btn';
import {formatProductPrice, getTypeName} from '@/src/helpers/hooks';
import {Empty, Popover} from 'antd';
import Image, {StaticImageData} from 'next/image';
import Link from 'next/link';
import React, {FC, useEffect, useState} from 'react';
import {IProduct} from '../../types';
import s from './ProductsList.module.scss';

import image from 'public/image/card-banner.png';
import {useStore} from '../../store';
import PreloaderImage from '@/components/PreloaderImage/PreloaderImage';
import {CheckOutlined} from '@ant-design/icons';

import {animated, useInView} from '@react-spring/web';

interface ProductsListProps {
  title: string;
  productsList: IProduct[];
}

export const ProductsList: FC<ProductsListProps> = ({title, productsList}) => {
  const basketList = localStorage.getItem('basketList');

  // dublicating products list after adding in client components, for checking "disabled" state

  const copyList = useStore((store) => store.basketList);
  const setCopyList = useStore((store) => store.setBasketList);

  useEffect(() => {
    if (basketList?.length || basketList) {
      return setCopyList(JSON.parse(basketList) || []);
    }

    localStorage.setItem('basketList', JSON.stringify([]));
  }, []);

  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0.7, y: 40},
      to: {opacity: 1, y: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      <div className='flex justify-between items-center md:flex-col md:items-start'>
        <h2 className='font-medium text-xl'>{title}</h2>

        <Popover
          placement='bottomRight'
          content={
            <div className='cursor-pointer'>
              <p className='cursor-pointer hover:opacity-70 transition-opacity'>сначала недорогие</p>
              <p className='cursor-pointer hover:opacity-70 transition-opacity'>сначала дорогие</p>
            </div>
          }
        >
          <p className='cursor-pointer'>Сортировать по</p>
        </Popover>
      </div>

      <div className={s.list}>
        {productsList.length ? (
          productsList.map(({id, price, name, type, small_image}) => (
            <Link href={`/marketplace/products/${id}`} className={s.item} key={id}>
              <PreloaderImage
                src={small_image || image}
                objectFit='cover'
                alt=''
                width={300}
                height={500}
                className='h-[170px] w-full object-cover md:w-full rounded-3xl'
              />

              <h2 className='my-5 text-lg font-medium'>{name}</h2>

              <div className='flex justify-between mb-5'>
                <span>
                  Тип: <p className='text-[#6F4FF2]'>{getTypeName(type)}</p>
                </span>
                <span className='flex flex-col items-end'>
                  Цена: <p className='text-[#6F4FF2]'>{formatProductPrice(price)}</p>
                </span>
              </div>

              <Btn
                disabled={!!copyList?.filter((item) => item.id == id).length}
                className='w-full'
                onClick={(e: any) => {
                  e.preventDefault();
                  const basketArray = JSON.parse(basketList);

                  localStorage.setItem(
                    'basketList',
                    JSON.stringify([
                      ...(basketArray?.length ? basketArray : []),
                      productsList.filter((item) => item.id == id).at(-1)
                    ])
                  );

                  setCopyList([...basketArray, productsList.filter((item) => item.id == id).at(-1)]);
                }}
              >
                {!!copyList?.filter((item) => item.id == id).length ? (
                  <>
                    <CheckOutlined /> Добавлено
                  </>
                ) : (
                  'Добавить в корзину'
                )}
              </Btn>
            </Link>
          ))
        ) : (
          <div className='w-full bg-[#1D1932] py-10 rounded-3xl'>
            <h2 className='flex justify-center'>Список пуст</h2>
          </div>
        )}
      </div>
    </animated.div>
  );
};
