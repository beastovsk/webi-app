'use client';

import PreloaderImage from '@/components/PreloaderImage/PreloaderImage';
import {formatProductPrice} from '@/src/helpers/hooks';
import Image, {StaticImageData} from 'next/image';

import React, {FC, useRef} from 'react';
import s from './ProductBanner.module.scss';

import banner from 'public/image/marketplace-banner.png';
import {Carousel} from 'antd';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import {CarouselRef} from 'antd/es/carousel';

interface ProductBannerProps {
  title: string;
  price: number;
  images: string[];
}

export const ProductBanner: FC<ProductBannerProps> = ({title, price, images}) => {
  const slider = useRef();
  console.log(slider);

  return (
    <div className={s.container}>
      <h2 className='font-medium text-xl mb-10'>Информация о товаре</h2>
      <div className={s.wrapper}>
        <div className={s.carousel}>
          {/* @ts-ignore */}
          <h2 className={s.prev} onClick={() => slider.current.prev()}>
            <LeftOutlined />
          </h2>{' '}
          {/* @ts-ignore */}
          <h2 className={s.next} onClick={() => slider.current.next()}>
            <RightOutlined />
          </h2>
          {images?.length ? (
            <Carousel
              slidesToShow={images?.length}
              slidesToScroll={1}
              fade
              autoplay
              ref={(ref: CarouselRef | any) => {
                slider.current = ref;
              }}
            >
              {images?.map((image, i) => (
                <div>
                  <PreloaderImage
                    src={image}
                    className={s.image}
                    objectFit='cover'
                    alt=''
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
              ))}
            </Carousel>
          ) : null}
        </div>
        <div className={s.content}>
          <h1 className={s.title}>{title}</h1>
          <p className={s.price}>{formatProductPrice(price)}</p>
        </div>
      </div>
    </div>
  );
};
