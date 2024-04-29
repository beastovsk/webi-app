'use client';
import Btn from '@/components/UI/Btn/Btn';
import {RiseOutlined} from '@ant-design/icons';
import Image from 'next/image';
import React, {FC} from 'react';
import s from './Banner.module.scss';
import {Player} from '@lottiefiles/react-lottie-player';

import {animated, useInView} from '@react-spring/web';

// @ts-ignore
import banner from '/public/image/banner-image.json';
import Link from 'next/link';

interface BannerProps {}

export const Banner: FC<BannerProps> = () => {
  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0, scale: 0.95, x: 20},
      to: {opacity: 1, scale: 1, x: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      <div className='flex flex-col gap-10 items-start w-full'>
        <h1 className={s.title}>
          Нужна веб-платформа <br /> для бизнеса<span className='text-primary-500 ml-2'>?</span>
        </h1>
        <p className='text-base text-gray-500'>
          В нашем сервисе вы можете купить и продать готовый IT-бизнес. <br /> От малых веб-сайтов до больших сервисов
        </p>
        <Link href='/marketplace'>
          <Btn>
            <span className='flex items-center gap-3'>Посмотреть товары</span>
          </Btn>
        </Link>
      </div>
      <Player src={banner} className='player' loop autoplay />
    </animated.div>
  );
};
