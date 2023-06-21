'use client';

import Btn from '@/components/UI/Btn/Btn';
import Image, {StaticImageData} from 'next/image';
import Link from 'next/link';

import React, {FC} from 'react';
import s from './Basket.module.scss';

import banner from '/public/image/marketplace-banner.png';

interface BasketProps {}

export const Basket: FC<BasketProps> = () => {
  return (
    <div className={s.container}>
      <h2 className='font-medium text-xl mb-10'>Корзина</h2>

      <div className={s.wrapper}>
        <div className='flex flex-col gap-5'>
          <div className={s.item}>
            <div className='flex justify-between md:flex-col'>
              <div className='flex gap-10 md:flex-col'>
                <Link href='/marketplace/products/1'>
                  <Image
                    src={banner}
                    alt=''
                    width={200}
                    height={400}
                    className='h-[130px] md:w-full object-cover rounded-3xl hover:opacity-70 transition-opacity'
                  />
                </Link>
                <div>
                  <Link href='/marketplace/products/1'>
                    <h2 className='text-lg font-normal hover:opacity-70 transition-opacity'>Сайт для веб агенства</h2>
                  </Link>{' '}
                  <p className='text-[#6C7AA0] cursor-pointer hover:opacity-70 transition-opacity'>удалить</p>
                </div>
              </div>

              <h3 className='text-primary-500 font-bold md:mt-5'>23.652 RUB</h3>
            </div>
          </div>
        </div>
        <div className={s.item}>
          <h2 className='text-xl font-normal'>Итого</h2>
          <div className='flex justify-between items-center mt-5 mb-10'>
            <p>1 товар</p>
            <h3 className='text-primary-500 font-bold'>23.652 RUB</h3>
          </div>
          <span className='text-[#6C7AA0] text-sm'>
            После оплаты с вами свяжутся по почте, указанной при регистрации аккаунта в течении дня.{' '}
            <Link href='/marketplace/profile/settings' className='text-[#6F4FF2] hover:opacity-70 transition-opacity'>
              Изменить ее
            </Link>
          </span>
          <div className='mt-10 flex justify-center'>
            <Btn>Перейти к оформлению</Btn>
          </div>
        </div>
      </div>
    </div>
  );
};
