'use client';
import Btn from '@/components/UI/Btn/Btn';
import {RiseOutlined} from '@ant-design/icons';
import Image from 'next/image';
import React, {FC} from 'react';

import 'swiper/css';

import s from './Description.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import Link from 'next/link';

interface DescriptionProps {}

export const Description: FC<DescriptionProps> = () => {
  const descriptionList = [
    {
      id: 0,
      title: 'Комплексный подход',
      description:
        'Мы продаем качественный продукт с улучшенной СЕО-оптимизацией, устанавливаем его на хостинг и дарим гарантию в качестве месяца бесплатной поддержки и обслуживания сайта'
    },
    {
      id: 1,
      title: 'Сильная команда разработчиков',
      description: 'Мы знаем как это делается и делаем это быстро. Наш продукт говорит сам за себя'
    },
    {
      id: 2,
      title: 'Партнерство',
      description:
        '"Сложное - займет немного времени, невозможное - чуть побольше". Реализуем любой функционал, потому что он принесет деньги обеим сторонам'
    }
  ];
  return (
    <div className={s.container}>
      <div className='flex justify-between md:flex-col'>
        <h1 className={s.title}>
          Почему <span className='text-primary-500'>Webi</span> - это лучший выбор на рынке
          <span className='text-primary-500 ml-2'>?</span>
        </h1>

        {/* <p className='text-gray-500'>И как мы улучшаем процесс взаимодействия с клиентами</p> */}
      </div>
      <div className='flex gap-5 md:flex-col my-10'>
        {descriptionList.map(({title, description, id}) => (
          <div key={id} className={s.slide}>
            <div>
              <h2 className='text-2xl font-bold'>
                <span className='text-primary-500 mr-3'>{id + 1}.</span>
                {title}
              </h2>
              <p className='text-gray-500 mt-5'>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
