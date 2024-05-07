'use client';
import React, {FC} from 'react';

import s from './Faq.module.scss';

interface FaqProps {}

export const Faq: FC<FaqProps> = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Остались вопросы
        <span className='text-primary-500 ml-2'>?</span>
      </h1>
      <p>Webi маркетплейс - онлайн площадка для покупки сайтов и приложений</p>
    </div>
  );
};
