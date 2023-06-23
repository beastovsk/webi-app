'use client';
import Btn from '@/components/UI/Btn/Btn';
import {RiseOutlined} from '@ant-design/icons';
import Image from 'next/image';
import React, {FC} from 'react';
import s from './Banner.module.scss';
import {Player} from '@lottiefiles/react-lottie-player';

// @ts-ignore
import banner from '/public/image/banner-image.json';

interface BannerProps {}

export const Banner: FC<BannerProps> = () => {
  return (
    <div className={s.container}>
      <div className='flex flex-col gap-10 items-start w-1/2 md:w-full'>
        <h1 className={s.title}>
          Нужен онлайн бизнес меньше чем за сутки<span className='text-primary-500 ml-2'>?</span>
        </h1>
        <p className='text-base text-gray-500'>
          Мы продаем веб-приложения на все ниши, для запуска которых остается лишь купить и заполнить
        </p>
        <a href='#services'>
          {' '}
          <Btn>
            <span className='flex items-center gap-3'>Наши услуги</span>
          </Btn>
        </a>
      </div>
      {/* <Image className='flex flex-grow md:w-full' src={banner} alt='' quality={100} width={500} height={500} /> */}
      <Player src={banner} className='player' loop autoplay />
    </div>
  );
};
