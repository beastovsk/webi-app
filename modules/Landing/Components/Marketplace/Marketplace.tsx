'use client';
import Link from 'next/link';
import React, {FC} from 'react';

import s from './Marketplace.module.scss';

interface MarketplaceProps {}

export const Marketplace: FC<MarketplaceProps> = () => {
  const servicesList = [
    {title: 'Сайт/веб-приложение', id: 1},
    {title: 'Возможность редактировать и удалять контента бесплатно в течении 7-ми дней', id: 2},
    {title: 'Хостинг, сервер и поддержка сайта на месяц', id: 3},
    {title: 'Скидка 70% на дополнительный функционал', id: 4},
    {title: 'При покупки модуля для сайта - интеграция бесплатно', id: 5}
  ];
  return (
    <div className={s.container} id='marketplace'>
      <h1 className={s.title}>
        Что такое{' '}
        <span className='text-primary-500 cursor-pointer hover:opacity-70 transition-opacity'>Webi Маркетплейс</span>
        <span className='text-primary-500 ml-2'>?</span>
      </h1>
      <h2 className='text-xl mb-5'>
        <Link href='/marketplace/auth' className='text-primary-500  cursor-pointer hover:opacity-70 transition-opacity'>
          Webi Маркетплейс
        </Link>{' '}
        - самый лучший продукт на рынке для бизнеса. Мы создали площадку, которая сэкономит вам время и даст возможность
        получить то что вам нужно прямо здесь и сейчас. Заходите по{' '}
        <Link href={'/marketplace'} className='text-primary-500 hover:opacity-70 transition-opacity'>
          ссылке
        </Link>{' '}
        и смотрите ассортимент
      </h2>
      <div className={s.wrapper}>
        <h2 className='text-xl mb-10 md:text-center'>
          После покупки мы даем вам самое необходимое для запуска бизнеса:
        </h2>
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
    </div>
  );
};
