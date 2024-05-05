'use client';

import Btn from '@/components/UI/Btn/Btn';
import {formatProductPrice} from '@/src/helpers/hooks';
import Link from 'next/link';
import React, {FC, useEffect} from 'react';
import {IService} from '../../types';
import s from './ProductsList.module.scss';

import PreloaderImage from '@/components/PreloaderImage/PreloaderImage';
import {EditOutlined} from '@ant-design/icons';

import {animated, useInView} from '@react-spring/web';

interface ProductsListProps {
  title: string;
  productsList: IService[];
  isLoading: boolean;
}

export const ProductsList: FC<ProductsListProps> = ({title, isLoading, productsList}) => {
  const profileId = localStorage.getItem('id');

  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0.7, y: 40},
      to: {opacity: 1, y: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  const skeletonCard = (
    <div
      role='status'
      className='p-4 border border-gray-200 rounded-3xl shadow animate-pulse md:p-6 dark:border-gray-700'
    >
      <div className='flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700'>
        <svg
          className='w-10 h-10 text-gray-200 dark:text-gray-600'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 16 20'
        >
          <path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z' />
          <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
        </svg>
      </div>
      <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
    </div>
  );

  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      <div className='flex justify-between items-center md:flex-col md:items-start'>
        <h2 className='font-medium text-xl'>{title}</h2>
      </div>

      <div className={s.list}>
        {productsList.length ? (
          productsList.map(({owner_id, id, title, price, images}) => (
            <Link href={`/marketplace/products/${id}`} className={s.item} key={id}>
              <PreloaderImage
                src={images[0]}
                objectFit='cover'
                alt=''
                width={300}
                height={500}
                className='h-[170px] w-full object-cover md:w-full rounded-3xl'
              />

              <h2 className='my-5 text-lg font-medium'>
                {title}
                {profileId == owner_id ? (
                  <Link href={`/marketplace/products/${id}/update`}>
                    <EditOutlined className='text-[#6F4FF2] ml-3 hover:opacity-70 transition-opacity' />
                  </Link>
                ) : null}
              </h2>

              <div className='flex justify-end mb-5'>
                <span className='flex flex-col items-end'>
                  Цена: <p className='text-[#6F4FF2]'>{formatProductPrice(price)}</p>
                </span>
              </div>

              {owner_id != profileId ? (
                <Link href={`/marketplace/purchase?serviceId=${id}`}>
                  <Btn className='w-full mt-auto'>Оформить заказ</Btn>
                </Link>
              ) : (
                <Link href={`/marketplace/products/${id}/update`}>
                  <Btn className='w-full'>Изменить сервис</Btn>
                </Link>
              )}
            </Link>
          ))
        ) : isLoading ? (
          <>
            {skeletonCard}
            {skeletonCard}
            {skeletonCard}
          </>
        ) : (
          <div className='w-full bg-[#1D1932] py-10 rounded-3xl'>
            <h2 className='flex justify-center'>Список пуст</h2>
          </div>
        )}
      </div>
    </animated.div>
  );
};
