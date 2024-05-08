'use client';
import React, {FC} from 'react';

import {animated, useInView} from '@react-spring/web';

import s from './Portfolio.module.scss';

import properLand from '@/public/image/proper-land.jpg';
import organick from '@/public/image/organick.jpg';
import lauraCloset from '@/public/image/laura-closet.jpg';
import logoipsum from '@/public/image/logoipsum.jpg';
import cryptoArt from '@/public/image/crypto-art.jpg';
import PreloaderImage from '@/components/PreloaderImage/PreloaderImage';

interface PortfolioProps {}

export const Portfolio: FC<PortfolioProps> = () => {
  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0, x: -60},
      to: {opacity: 1, x: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  const projectList = [
    {
      label: 'ProperLand',
      subtitle: 'Онлайн-сервис для агенства в сфере Real Estate из США',
      description:
        'В процессе проекта - разработали многостраничный сайт и фильтры по возможным товарам. Так же для клиента была создана личная админ-панель, которую мы предлагаем всем нашим клиентам, для удобной работы с приложением',
      image: properLand
    },
    {
      label: 'Organick',
      subtitle: 'Интернет-магазин товаров здорового питания',
      description: 'Реализованы несколько статических страниц, список товаров с фильтрацией и оформление заказа.',
      image: organick
    },
    {
      label: 'Laura`s Closet',
      subtitle: 'Интернет-магазин женской одежды',
      description: 'Индивидуальный дизайн подход, огромное количество страниц и качественный функционал сайта',
      image: lauraCloset
    },
    {
      label: 'Название скрыто NDA',
      subtitle: 'Сервис для покупки/продажи/аренды недвижимости',
      description: 'Реализован аналог AirBNB для клиента из европейской страны',
      image: logoipsum
    },
    {
      label: 'Название скрыто NDA',
      subtitle: 'Web3 сервис',
      description:
        'Интересный проект для нашей компании в сфере Web3. Большое количество работы с интеграциями и партнерские контракты для реализации смарт-контрактов',
      image: cryptoArt
    }
  ];

  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      <h1 className={s.title}>
        Наши <span className='text-primary-500 ml-2'>сервисы</span>, которые уже приносят прибыль
      </h1>

      <div className='flex flex-col gap-5'>
        {projectList.map(({label, description, subtitle, image}) => (
          <div key={label}>
            <div className={s.item}>
              <h2 className='text-3xl font-bold text-primary-500'>{label}</h2>
              <h3 className='mt-3 text-xl'>{subtitle}</h3>
              <PreloaderImage src={image} alt='' className='flex-grow mt-10' />
            </div>
          </div>
        ))}
      </div>
    </animated.div>
  );
};
