'use client';

import Image, {StaticImageData} from 'next/image';

import React, {FC} from 'react';
import s from './ProductBanner.module.scss';

interface ProductBannerProps {
  image: StaticImageData;
  title: string;
}

export const ProductBanner: FC<ProductBannerProps> = ({title, image}) => {
  return (
    <div className={s.container}>
      <h2 className='font-medium text-xl mb-10'>Информация о товаре</h2>

      <div className={s.wrapper}>
        <Image src={image} alt='' width={500} height={500} className={s.image} />
        <div className={s.content}>
          <h1 className={s.title}>{title}</h1>
          <p className={s.price}>23000 Р</p>
        </div>
      </div>
    </div>
  );
};
