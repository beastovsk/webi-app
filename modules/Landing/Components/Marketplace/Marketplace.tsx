'use client';
import React, {FC} from 'react';

import s from './Marketplace.module.scss';

interface MarketplaceProps {}

export const Marketplace: FC<MarketplaceProps> = () => {
  const servicesList = [
    {title: 'Сайт/веб-приложение', id: 1},
    {title: 'Возможность редактировать и удалять контента бесплатно в течении 7-ми дней', id: 2},
    {title: 'Хостинг, сервер и поддержка сайта на месяц', id: 3},
    {title: 'Скидка 70% на дополнительный функционал', id: 4}
  ];
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Что такое <span className='text-primary-500'>Webi Маркетплейс</span>
        <span className='text-primary-500 ml-2'>?</span>
      </h1>
      <h2 className='text-xl mb-5'>
        <span className='text-primary-500'>Webi Маркетплейс</span> - веб площадка, на которой продаются готовые сайты и
        веб приложения компании.
      </h2>
      <div className={s.wrapper}>
        <h2 className='text-xl mb-2'>После покупки вы получите:</h2>
        <div className='ml-5'>
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
