'use client';

import PreloaderImage from '@/components/PreloaderImage/PreloaderImage';
import Btn from '@/components/UI/Btn/Btn';
import {formatProductPrice} from '@/src/helpers/hooks';

import React, {FC, useEffect, useState} from 'react';
import {useMutation, useQuery} from 'react-query';
import s from './Order.module.scss';

import {animated, useInView} from '@react-spring/web';
import Link from 'next/link';
import parse from 'html-react-parser';

import {useSearchParams} from 'next/navigation';
import {CloseOrder, GetOrderById, GetServiceById} from '../../api';
import Loading from '@/app/loading';
import {Button, Input, Skeleton, Steps, Upload, UploadFile, UploadProps} from 'antd';
import {Banner} from '@/components/Banner/Banner';
import {UploadOutlined} from '@ant-design/icons';
import {onPreview} from '@/src/helpers/onPreview';

interface OrderProps {}

export const Order: FC<OrderProps> = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');

  const {data, isSuccess, refetch} = useQuery('order', () => GetOrderById({orderId}));
  const {mutate, isSuccess: isServiceSuccess} = useMutation(GetServiceById);
  const {mutate: close} = useMutation(CloseOrder);

  const [service, setService] = useState(null);
  const [statusStep, setStatusStep] = useState(0);
  const [order, setOrder] = useState(null);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const onChange: UploadProps['onChange'] = ({fileList: newFileList}) => {
    setFileList(newFileList);
  };
  console.log(fileList);
  const profileId = localStorage.getItem('id');
  const isCancelButtonDisabled = data?.order.status === 'done' || data?.order.status === 'cancel';
  const isConfirmButtonDisabled = data?.order.status === 'done' || data?.order.status === 'cancel';

  const handleCloseOrder = () => {
    close(
      {orderId},
      {
        onSuccess: (data) => {
          if (!data?.message) return;

          if (data?.message === 'Заказ отменен') {
            refetch();
          }
        }
      }
    );
  };

  useEffect(() => {
    if (!isSuccess) return;
    const {service_id, status} = data?.order;

    setOrder(data?.order);

    if (status === 'cancel') {
      setStatusStep(4);
    }

    mutate(
      {serviceId: service_id},
      {
        onSuccess: (data) => {
          if (!data?.service) return;

          setService(data?.service);
        }
      }
    );
  }, [isSuccess, data]);

  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0.7, y: 40},
      to: {opacity: 1, y: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      {order?.status === 'cancel' ? (
        <Banner title='Сделка неудачно завершена' message='Сделка отменена покупателем или продавцом' type='danger' />
      ) : null}
      {order?.status === 'done' ? (
        <Banner
          title='Сделка завершена'
          message={
            <span>
              Сделка успешно завершена. Для помощи развернуть ваш новый проект напишите нам в{' '}
              <Link href='https://t.me/beastovsk' className='text-primary-500'>
                поддержку
              </Link>
            </span>
          }
          type='success'
        />
      ) : null}
      <h2 className='font-medium text-xl mb-10'>Сделка №{orderId}</h2>

      <div className={s.wrapper}>
        <div className='flex flex-col gap-5'>
          {isServiceSuccess ? (
            <div className={s.item}>
              <div className='flex justify-between md:flex-col'>
                <div className='flex gap-10 md:flex-col'>
                  <Link href={`/marketplace/products/${service?.id}`}>
                    <PreloaderImage
                      src={service?.images.length ? service?.images[0] : ''}
                      objectFit='cover'
                      alt=''
                      width={200}
                      height={400}
                      className='h-[130px] md:w-full object-cover rounded-3xl'
                    />
                  </Link>
                  <div className='w-1/2'>
                    <Link href='/marketplace/products/1'>
                      <h2 className='text-lg font-normal hover:opacity-70 transition-opacity'>{service?.title}</h2>

                      <div className='max-h-[100px] overflow-y-auto break-all	text-ellipsis text-[#6C7AA0]'>
                        {service ? parse(service?.description) : null}
                      </div>
                    </Link>{' '}
                  </div>
                </div>

                <h3 className='text-primary-500 font-bold md:mt-5'>{formatProductPrice(service?.price)}</h3>
              </div>
            </div>
          ) : (
            <Loading />
          )}

          {order?.buyer_id == profileId && order?.status === 'await_payment' ? (
            <div className={s.item}>
              <h2>Ссылка на платежный сервис</h2>
              <p className='mt-3 mb-5 text-sm text-[#6C7AA0]'>После оплаты - сделка продолжится автоматически</p>
              <Link href='/' className='text-sm text-[#6C7AA0] underline'>
                http://localhost:3000
              </Link>
            </div>
          ) : null}

          {order?.seller_id == profileId && order?.status === 'service_delievery' ? (
            <div className={s.item}>
              <h2>Добавьте ссылку с публичным репозиторием</h2>
              <div className='mt-3 text-sm text-[#6C7AA0]'>
                <span>Репозиторий должен содержать в себе:</span>
                <ul className='list-disc ml-5'>
                  <li>Фронтенд</li>
                  <li>Бекенд</li>
                  <li>sql-файл, содержащий в себе информацию о таблицах</li>
                  <li>.readme файл</li>
                </ul>
              </div>
              <div className='mt-5'>
                <Input style={{background: '#131129'}} />
              </div>

              <Btn onClick={() => {}} className='mt-3'>
                Отправить
              </Btn>
            </div>
          ) : null}

          {order?.buyer_id == profileId && order?.status === 'service_confirmation' ? (
            <div className={s.item}>
              <h2>Подтвердите оплату</h2>
              <div className='mt-5 text-sm text-[#6C7AA0]'>
                Покупатель отправил сервис, на данный момент письмо с архивом отправлено вам на почту{' '}
                <span className='text-primary-500'>{localStorage.getItem('email')}</span>.
              </div>
              <div className='mt-5 text-sm text-[#6C7AA0]'>
                Если хотите изменить почту получателя - отредактируйте почту в настройках и нажмите на "Отправить еще"
              </div>
              <div className='flex gap-3 mt-10'>
                <Btn>Подтвердить</Btn>
                <Btn primary>Отправить еще</Btn>
              </div>
            </div>
          ) : null}

          {order?.seller_id == profileId && order?.status === 'done' ? (
            <div className={s.item}>
              <h2>Благодарим за продажу</h2>
              <div className='mt-3 text-sm text-[#6C7AA0]'>
                Средства будут направлены на ваш кошелек в течении <span className='text-primary-500'>24 часов</span>
              </div>
              <div className='mt-3 text-sm text-[#6C7AA0]'>
                В случае задержки - обратитесь пожалуйста в{' '}
                <Link className='text-primary-500' href='https://t.me/beastovsk' target='_blank'>
                  тех. поддержку
                </Link>{' '}
              </div>
            </div>
          ) : null}

          {order?.buyer_id == profileId && order?.status === 'done' ? (
            <div className={s.item}>
              <h2>Благодарим за покупку</h2>
              <div className='mt-3 text-sm text-[#6C7AA0]'>
                Поздравляем с получением нового <span className='text-primary-500'>IT-сервиса</span>!
              </div>
              <div className='mt-3 text-sm text-[#6C7AA0]'>
                В случае негативного опыта или любых проблем - обратитесь пожалуйста в{' '}
                <Link className='text-primary-500' href='https://t.me/beastovsk' target='_blank'>
                  тех. поддержку
                </Link>{' '}
              </div>
            </div>
          ) : null}
        </div>
        <div className={s.item}>
          <h2 className='text-xl font-normal'>Статус</h2>
          <div className='flex justify-between items-center mt-5 mb-10 min-h-[32px]'>
            <Steps
              direction='vertical'
              current={statusStep}
              items={[
                {
                  title: 'Оплата проекта'
                },
                {
                  title: 'Передача репозитория'
                },
                {
                  title: 'Подтверждение получения'
                },
                {
                  title: 'Сделка завершена'
                }
              ]}
            />
          </div>
          <div className='mt-10'>
            <Btn onClick={handleCloseOrder} danger className='w-full mt-3' disabled={isCancelButtonDisabled}>
              Отменить сделку
            </Btn>
          </div>
        </div>
      </div>
    </animated.div>
  );
};
