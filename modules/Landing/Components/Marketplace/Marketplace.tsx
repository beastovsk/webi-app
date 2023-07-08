'use client';
import Link from 'next/link';
import React, {FC} from 'react';
import {animated, useInView} from '@react-spring/web';

import s from './Marketplace.module.scss';

interface MarketplaceProps {}

export const Marketplace: FC<MarketplaceProps> = () => {
  const servicesList = [
    {title: 'Сайт/веб-приложение', id: 1},
    {title: 'Админ панель для управления контеном всего приложения', id: 2},
    {title: 'Хостинг, сервер и поддержка сайта на месяц', id: 3},
    {title: 'Скидка 30% на любой дополнительный функционал', id: 4},
    {title: 'При покупки веб модуля, интеграция в наши приложения - бесплатно', id: 5}
  ];
  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0, scale: 0.95},
      to: {opacity: 1, scale: 1}
    }),
    {rootMargin: '-20% 0%'}
  );

  return (
    <animated.div ref={ref} style={springs} className={s.container} id='marketplace'>
      <h1 className={s.title}>
        Что такое <span className='text-primary-500'>Webi Marketplace</span>
        <span className='text-primary-500 ml-2'>?</span>
      </h1>
      <h2 className='text-xl mb-5'>
        <span className='text-primary-500 '>Webi Marketplace</span> - единственный продукт на рынке для бизнеса в
        секторе веб-приложений. Мы создали площадку, на которой вы приобретаете готовый собранный продукт за короткий
        промежуток времени
      </h2>
      <div className={s.wrapper}>
        <h2 className='text-xl mb-10'>После покупки мы даем вам самое необходимое для запуска бизнеса:</h2>
        <div className='ml-5 md:m-0 flex flex-col gap-3'>
          {servicesList.map(({id, title}) => (
            <div key={id}>
              <h2 className='text-lg'>
                <span className='text-primary-500'>-</span> {title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </animated.div>
  );
};
