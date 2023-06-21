'use client';

import Btn from '@/components/UI/Btn/Btn';
import {Empty, Popover} from 'antd';
import Image, {StaticImageData} from 'next/image';
import Link from 'next/link';
import React, {FC} from 'react';
import s from './ProductsList.module.scss';

interface ProductsListProps {
  title: string;
  productsList: {id: number; image: string | StaticImageData; title: string; type: number; price: number}[];
}

export const ProductsList: FC<ProductsListProps> = ({title, productsList}) => {
  return (
    <div className={s.container}>
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

      <div className='flex gap-5 mt-5 md:flex-col'>
        {productsList.length ? (
          productsList.map(({id, image, price, title, type}) => (
            <Link href={`/marketplace/products/${id}`} className={s.item} key={id}>
              <Image
                src={image}
                alt=''
                width={300}
                height={500}
                className='h-[170px] object-cover md:w-full rounded-3xl'
              />

              <h2 className='my-5 text-lg font-medium'>{title}</h2>

              <div className='flex justify-between mb-5'>
                <span>
                  Тип: <p className='text-[#6F4FF2]'>{type == 1 ? 'веб-сайт' : 'веб-приложение'}</p>
                </span>
                <span className='flex flex-col items-end'>
                  Цена: <p className='text-[#6F4FF2]'>{price} Р</p>
                </span>
              </div>

              <Btn className='w-full' onClick={(e: any) => e.preventDefault()}>
                Добавить в корзину
              </Btn>
            </Link>
          ))
        ) : (
          <div className='w-full bg-[#1D1932] py-10 rounded-3xl'>
            <h2 className='flex justify-center'>Список пуст</h2>
          </div>
        )}
      </div>
    </div>
  );
};
