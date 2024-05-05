'use client';

import PreloaderImage from '@/components/PreloaderImage/PreloaderImage';
import Btn from '@/components/UI/Btn/Btn';
import {formatProductPrice} from '@/src/helpers/hooks';

import React, {FC, useEffect, useState} from 'react';
import {useMutation, useQuery} from 'react-query';
// import {CreateOrder} from '../../api';
import s from './Basket.module.scss';

import {animated, useInView} from '@react-spring/web';
import Link from 'next/link';
import parse from 'html-react-parser';

import {useSearchParams} from 'next/navigation';
import {GetServiceById} from '../../api';
import Loading from '@/app/loading';
import {Skeleton} from 'antd';

interface BasketProps {}

export const Basket: FC<BasketProps> = () => {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get('serviceId');
  const {data, isSuccess, isLoading} = useQuery('product', () => GetServiceById({serviceId}));

  useEffect(() => {
    // customNotification('success', 'top', 'Заказ успешно создан', 'с вами свяжутся');
  }, []);

  const createOrder = () => {};

  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0.7, y: 40},
      to: {opacity: 1, y: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      <h2 className='font-medium text-xl mb-10'>Создание сделки</h2>

      <div className={s.wrapper}>
        <div className='flex flex-col gap-5'>
          {isSuccess ? (
            <div className={s.item}>
              <div className='flex justify-between md:flex-col'>
                <div className='flex gap-10 md:flex-col'>
                  <Link href={`/marketplace/products/${data?.service.id}`}>
                    <PreloaderImage
                      src={data?.service.images.length ? data?.service.images[0] : ''}
                      objectFit='cover'
                      alt=''
                      width={200}
                      height={400}
                      className='h-[130px] md:w-full object-cover rounded-3xl'
                    />
                  </Link>
                  <div className='w-1/2'>
                    <Link href='/marketplace/products/1'>
                      <h2 className='text-lg font-normal hover:opacity-70 transition-opacity'>{data?.service.title}</h2>

                      <div className='max-h-[100px] overflow-y-auto break-all	text-ellipsis text-[#6C7AA0]'>
                        {parse(data?.service.description)}
                      </div>
                    </Link>{' '}
                  </div>
                </div>

                <h3 className='text-primary-500 font-bold md:mt-5'>{formatProductPrice(data?.service.price)}</h3>
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </div>
        <div className={s.item}>
          <h2 className='text-xl font-normal'>Итого</h2>
          <div className='flex justify-between items-center mt-5 mb-10 min-h-[32px]'>
            <p>1 товар</p>
            <h3 className='text-primary-500 font-bold'>
              {isSuccess ? formatProductPrice(data?.service.price) : <Skeleton.Button active />}
            </h3>
          </div>
          <div className='text-[#6C7AA0] text-sm'>
            После создания сделки - откроется страница оплаты-передачи сервиса в{' '}
            <span className='text-[#6F4FF2]'>настоящем времени</span>.
          </div>

          <div className='text-[#6C7AA0] text-sm mt-3'>
            При возникновении проблемы или подозрения на мошенничество - напишите напрямую в{' '}
            <Link
              href='/marketplace/support'
              target='_blank'
              className='text-[#6F4FF2] hover:opacity-70 transition-opacity'
            >
              поддержку
            </Link>{' '}
            чтобы обезопасить ваши средства
          </div>
          <div className='mt-10'>
            <Btn onClick={() => createOrder()} className='w-full'>
              Продолжить
            </Btn>
          </div>
        </div>
      </div>
    </animated.div>
  );
};
