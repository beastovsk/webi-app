'use client';

import React, {FC} from 'react';
import s from './Services.module.scss';

import dev from '/public/image/dev-icon.svg';
import design from '/public/image/design-icon.svg';
import support from '/public/image/support-icon.svg';
import Image from 'next/image';

interface ServicesProps {}

export const Services: FC<ServicesProps> = () => {
  const servicesList = [
    {title: 'Разработка', description: 'Создаем классные и качественные платформы', image: dev},
    {title: 'UX/UI дизайн', description: 'Рисуем лучшие сайты на всем диком западе', image: design},
    {title: 'Поддержка', description: 'Возьмем на себя ответственность за ваши веб-ресурсы', image: support}
  ];
  return (
    <div className={s.container} id='services'>
      <h1 className={s.title}>
        Наши услуги лично для <span className='text-primary-500'>тебя</span>
      </h1>
      <div className='flex justify-between items-center gap-20 md:gap-10 text-center mt-10 md:flex-col'>
        {servicesList.map(({title, description, image}) => (
          <div className='flex flex-grow flex-col items-center' key={title}>
            <Image src={image} alt='' width={50} height={50} />
            <h2 className='text-xl mt-5'>{title}</h2>
            <p className='text-gray-500 mt-3'>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
