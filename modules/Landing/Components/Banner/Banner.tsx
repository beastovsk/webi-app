'use client';
import Btn from '@/components/UI/Btn/Btn';
import {RiseOutlined} from '@ant-design/icons';
import Image from 'next/image';
import React, {FC} from 'react';
import s from './Banner.module.scss';

import banner from '/public/image/banner.png';

interface BannerProps {}

export const Banner: FC<BannerProps> = () => {
  return (
    <div className={s.container}>
      <div className='flex flex-col gap-10 items-start w-1/2 md:w-full'>
        <h1 className={s.title}>Сделаем ваш сайт с 0 или предложим готовые решения<span className='text-primary-500 ml-2'>.</span></h1>
        <p className='text-base text-gray-500'>
          Webi - веб агенство, предоставляющее услуги по разработке от лендинг страниц до социальных сетей на
          современных технологиях, обеспечивающие быстрые и качественные приложения
        </p>
        <Btn>
          <span className='flex items-center gap-3'>
            Наши услуги
          </span>
        </Btn>
      </div>
      <Image className='flex flex-grow md:w-full' src={banner} alt='' quality={100} width={500} height={500} />
    </div>
  );
};
