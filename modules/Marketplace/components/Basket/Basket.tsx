'use client';

import PreloaderImage from '@/components/PreloaderImage/PreloaderImage';
import Btn from '@/components/UI/Btn/Btn';
import {formatProductPrice} from '@/src/helpers/hooks';

import React, {FC, useEffect, useState} from 'react';
import {useMutation} from 'react-query';
import {CreateOrder} from '../../api';
import {useStore} from '../../store';
import s from './Basket.module.scss';

import {animated, useInView} from '@react-spring/web';
import Link from 'next/link';
import {Modal} from 'antd';
import {getCookie} from 'cookies-next';
import {customNotification} from '@/src/helpers/customNotification';

import image from 'public/image/card-banner.png';

interface BasketProps {}

export const Basket: FC<BasketProps> = () => {
  const token = localStorage.getItem('token');
  const basketList = localStorage.getItem('basketList');
  const [open, setOpen] = useState(false);

  // const {mutate} = useMutation(CreateOrder);

  // dublicating products list after adding in client components, for checking "disabled" state
  const copyList = useStore((store) => store.basketList);
  const setCopyList = useStore((store) => store.setBasketList);

  useEffect(() => {
    setOpen(false);
    setCopyList(JSON.parse(basketList) || []);

    if (basketList?.length && basketList) return;

    localStorage.setItem('basketList', JSON.stringify([]));

    customNotification('success', 'top', 'Заказ успешно создан', 'с вами свяжутся');
  }, []);

  const createOrder = () => {
    if (!token) {
      return customNotification(
        'info',
        'top',
        'Пожалуйста авторизируйтесь',
        'Мы сможем связаться с вами быстрее, если у вас будет учетная запись'
      );
    }

    // mutate(
    //   {orders: copyList.map(({id}) => id)},
    //   {
    //     onSuccess: () => {
    setOpen(true);
    localStorage.setItem('basketList', JSON.stringify([]));
    setCopyList([]);
    //     }
    //   }
    // );
  };

  const removeProduct = (id) => {
    const index = copyList.findIndex((item) => item.id == id);
    const editedBasketList = [...copyList.slice(0, index), ...copyList.slice(index + 1)];
    // local storage remove
    localStorage.setItem('basketList', JSON.stringify(editedBasketList));

    // state remove
    setCopyList(editedBasketList);
  };

  const getBasketPrice = () => {
    let generalPrice = 0;

    copyList.map(({price}) => {
      generalPrice += price;
    });

    return generalPrice;
  };

  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0.7, y: 40},
      to: {opacity: 1, y: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      <h2 className='font-medium text-xl mb-10'>Корзина</h2>

      <div className={s.wrapper}>
        <div className='flex flex-col gap-5'>
          {copyList.length ? (
            copyList.map(
              ({
                description,
                full_image,
                id,
                link,
                modules,
                name,
                price,
                publication_date,
                small_image,
                technology,
                type
              }) => (
                <div className={s.item}>
                  <div className='flex justify-between md:flex-col'>
                    <div className='flex gap-10 md:flex-col'>
                      <Link href='/marketplace/products/1'>
                        <PreloaderImage
                          src={image}
                          objectFit='cover'
                          alt=''
                          width={200}
                          height={400}
                          className='h-[130px] md:w-full object-cover rounded-3xl hover:opacity-70 transition-opacity'
                        />
                      </Link>
                      <div>
                        <Link href='/marketplace/products/1'>
                          <h2 className='text-lg font-normal hover:opacity-70 transition-opacity'>{name}</h2>
                        </Link>{' '}
                        <p
                          className='text-[#6C7AA0] cursor-pointer hover:opacity-70 transition-opacity'
                          onClick={() => removeProduct(id)}
                        >
                          удалить
                        </p>
                      </div>
                    </div>

                    <h3 className='text-primary-500 font-bold md:mt-5'>{formatProductPrice(price)}</h3>
                  </div>
                </div>
              )
            )
          ) : (
            <div className={`min-h-[200px] ${s.item}`}>
              <h2 className='flex justify-center items-center h-full'>Корзина пустая</h2>
            </div>
          )}
        </div>
        <div className={s.item}>
          <h2 className='text-xl font-normal'>Итого</h2>
          <div className='flex justify-between items-center mt-5 mb-10'>
            <p>{copyList.length} товар</p>
            <h3 className='text-primary-500 font-bold'>{formatProductPrice(getBasketPrice())}</h3>
          </div>
          <span className='text-[#6C7AA0] text-sm'>
            После создания заказа с вами свяжутся по почте, указанной при регистрации аккаунта в течении дня.{' '}
            <Link href='/marketplace/profile/settings' className='text-[#6F4FF2] hover:opacity-70 transition-opacity'>
              Изменить ее
            </Link>
          </span>
          <div className='mt-10 flex justify-center'>
            {/* double '!' symbol is fast way to get bool of copyList length */}
            {/* logical '!' to disable button in the case of empty basket */}
            <Btn disabled={!!!copyList.length} onClick={() => createOrder()}>
              Создать заказ
            </Btn>
          </div>
        </div>
      </div>

      <Modal open={open} onCancel={() => setOpen(false)} footer={false}>
        <div>
          <h2 className='text-xl'>Заказ успешно создан!</h2>
          <p className='my-5'>Мы свяжемся с вами по указанному email, следите за почтовыми обновлениями.</p>
          <div className='flex justify-center'>
            <Link href={'/marketplace'}>
              <Btn className=''>Вернуться на главную</Btn>
            </Link>
          </div>
        </div>
      </Modal>
    </animated.div>
  );
};
