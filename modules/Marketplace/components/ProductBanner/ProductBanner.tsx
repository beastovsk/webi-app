'use client';

import PreloaderImage from '@/components/PreloaderImage/PreloaderImage';
import {formatProductPrice} from '@/src/helpers/hooks';
import Image, {StaticImageData} from 'next/image';

import React, {FC} from 'react';
import s from './ProductBanner.module.scss';

import banner from 'public/image/marketplace-banner.png';
import {Carousel} from 'antd';

interface ProductBannerProps {
  title: string;
  price: number;
}

export const ProductBanner: FC<ProductBannerProps> = ({title, price}) => {
  return (
    <div className={s.container}>
      <h2 className='font-medium text-xl mb-10'>Информация о товаре</h2>

      <div className={s.wrapper}>
        <div className={s.carousel}>
          <Carousel autoplay>
            <PreloaderImage src={banner} className={s.image} objectFit='cover' alt='' width={200} height={200} />
            <PreloaderImage src={banner} className={s.image} objectFit='cover' alt='' width={200} height={200} />
            <PreloaderImage src={banner} className={s.image} objectFit='cover' alt='' width={200} height={200} />
          </Carousel>
        </div>
        <div className={s.content}>
          <h1 className={s.title}>{title}</h1>
          <p className={s.price}>{formatProductPrice(price)}</p>
        </div>
      </div>
    </div>
  );
};
