'use client';
import Btn from '@/components/UI/Btn/Btn';
import {RiseOutlined} from '@ant-design/icons';
import Image from 'next/image';
import React, {FC} from 'react';

import 'swiper/css';

import s from './Description.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper';

interface DescriptionProps {}

export const Description: FC<DescriptionProps> = () => {
  const descriptionList = [
    {
      id: 0,
      title: 'Комплексный подход',
      description:
        'Мы дружим с клиентами и лично заинтересованы в вашем успехе. Поэтому мы продаем качественный проект с улучшенной СЕО-оптимизацией, устанавливаем ваш проект на хостинг и дарим гарантию в качестве 2-ух месяцев бесплатной поддержки и обслуживания'
    },
    {
      id: 1,
      title: 'Сильная команда разработчиков',
      description:
        'Как специалисты, которые успешно завершили не первую сотню проектов - мы знаем свою нишу и умеем делать правильно и быстро'
    },
    {
      id: 2,
      title: 'Цена - качество',
      description: (
        <p>
          Мы подстраиваемся под бюджет клиента и разрабатываем проекты с нуля, но для выгодных покупок или под
          минимальный бюджет - мы разработали <span className='text-primary-500'>маркетплейс</span> с уже готовыми и
          качественными проектами
        </p>
      )
    }
  ];
  return (
    <div className={s.container}>
      <div className='flex justify-between md:flex-col'>
        <h1 className={s.title}>
          Почему <span className='text-primary-500'>Webi</span> - это отличный выбор
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
