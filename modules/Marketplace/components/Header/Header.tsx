'use client';

import {ShoppingCartOutlined} from '@ant-design/icons';
import {Badge} from 'antd';
import Link from 'next/link';
import React, {FC, useEffect} from 'react';
import s from './Header.module.scss';
import {getCookie} from 'cookies-next';
import Btn from '@/components/UI/Btn/Btn';
import {useStore} from '../../store';
// import {useMutation} from 'react-query';
// import {RefreshToken} from '../../api';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const token = getCookie('token');
  const email = localStorage.getItem('email');

  return (
    <div className={s.container}>
      {/* <Link href={'/marketplace/basket'} className='cursor-pointer hover:opacity-70 transition-opacity'>
        <Badge count={basketList.length} className=''>
          <ShoppingCartOutlined className='text-[#6C7AA0] text-2xl ' />
        </Badge>
      </Link> */}
      {token ? (
        <Link href='/marketplace/create'>
          <Btn>Добавить товар</Btn>
        </Link>
      ) : null}
      {token ? (
        <div className='flex gap-10 items-end'>
          <Link
            href={'/marketplace/profile'}
            className='bg-[#6F4FF2] w-10 h-10 rounded-full transition-opacity hover:opacity-70'
          >
            <h2 className='text-xl h-full text-white flex justify-center items-center'>{email[0].toUpperCase()}</h2>
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
