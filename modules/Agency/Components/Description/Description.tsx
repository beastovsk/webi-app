'use client';
import Btn from '@/components/UI/Btn/Btn';
import {RiseOutlined} from '@ant-design/icons';
import Image from 'next/image';
import React, {FC} from 'react';

import 'swiper/css';
import {animated, useInView} from '@react-spring/web';

import s from './Description.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import Link from 'next/link';

interface DescriptionProps {}

export const Description: FC<DescriptionProps> = () => {
  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0, x: 60},
      to: {opacity: 1, x: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  const descriptionList = [
    {
      id: 0,
      title: 'Обсуждаем детали заказа',
      description:
        'Продумываем проект, предоставляем визуальный результат и приблизительные сроки выполнения. Работаем по договору оказания услуг'
    },
    {
      id: 1,
      title: 'Процесс разработки',
      description: 'С фото и видео-отчетом раз в спринт (каждую неделю)'
    },
    {
      id: 2,
      title: 'Релиз',
      description: 'Передаем данные от облачного сервиса вашего нового проекта'
    }
  ];
  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      <div className='flex justify-between md:flex-col'>
        <h1 className={s.title}>
          Как происходит <span className='text-primary-500'>соотрудничество</span> c нами
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
    </animated.div>
  );
};
