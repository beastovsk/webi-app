'use client';

import {ShoppingCartOutlined} from '@ant-design/icons';
import {Badge} from 'antd';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import React, {FC} from 'react';
import s from './Header.module.scss';
import {getCookie} from 'cookies-next';
import Btn from '@/components/UI/Btn/Btn';
import {useStore} from '../../store';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const router = useRouter();
  const token = getCookie('token');
  const username = getCookie('username');
  const basketList = useStore((store) => store.basketList);

  return (
    <div className={s.container}>
      {token ? (
        <div className='flex gap-10 items-end'>
          <Link href={'/marketplace/basket'} className='cursor-pointer hover:opacity-70 transition-opacity'>
            <Badge count={basketList.length} className=''>
              <ShoppingCartOutlined className='text-[#6C7AA0] text-2xl ' />
            </Badge>
          </Link>
          <Link
            href={'/marketplace/profile'}
            className='bg-[#6F4FF2] w-10 h-10 rounded-full transition-opacity hover:opacity-70'
          >
            <h2 className='text-xl h-full text-white flex justify-center items-center'>{username[0].toUpperCase()}</h2>
          </Link>
        </div>
      ) : (
        <Link href={'/marketplace/auth'}>
          <Btn>Авторизация</Btn>
        </Link>
      )}
    </div>
  );
};
