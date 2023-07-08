'use client';

import React, {FC} from 'react';
import s from './Services.module.scss';
import {animated, useInView} from '@react-spring/web';

import dev from '/public/image/dev-icon.svg';
import design from '/public/image/design-icon.svg';
import support from '/public/image/support-icon.svg';
import Image from 'next/image';

interface ServicesProps {}

export const Services: FC<ServicesProps> = () => {
  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0, x: 20},
      to: {opacity: 1, x: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  const servicesList = [
    {title: 'Разработка', description: 'Создаем веб-проекты любой сложности', image: dev},
    {title: 'UX/UI дизайн', description: 'Рисуем продающий дизайн, на который приятно смотреть', image: design},
    {title: 'Поддержка', description: 'Возьмем на себя ответственность за ваши веб-ресурсы', image: support}
  ];
  return (
    <animated.div ref={ref} style={springs} className={s.container} id='services'>
      <h1 className={s.title}>
        Наши услуги лично для <span className='text-primary-500'>тебя</span>
      </h1>
      <div className={s.list}>
        {servicesList.map(({title, description, image}) => (
          <div className='flex flex-grow flex-col items-center' key={title}>
            <Image src={image} alt='' width={50} height={50} />
            <h2 className='text-xl mt-5'>{title}</h2>
            <p className='text-gray-500 mt-3'>{description}</p>
          </div>
        ))}
      </div>
    </animated.div>
  );
};
