'use client';

import Btn from '@/components/UI/Btn/Btn';
import {AppstoreOutlined, DesktopOutlined, ImportOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Form, Input} from 'antd';
import {deleteCookie, getCookie} from 'cookies-next';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import React, {FC} from 'react';
import s from './Navigation.module.scss';

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  const pathname = usePathname();

  const token = localStorage.getItem('token');

  const navigationMenu = [
    {
      label: 'Главная',
      icon: <AppstoreOutlined className='w-full justify-center text-2xl cursor-pointer' color='#111' />,
      href: '/marketplace/',
      tokenRequired: false
    },
    {
      label: 'Поиск',
      icon: <DesktopOutlined className='w-full justify-center text-2xl cursor-pointer' color='#111' />,
      href: '/marketplace/products/',
      tokenRequired: false
    },
    {
      label: 'Профиль',
      icon: <UserOutlined className='w-full justify-center text-2xl cursor-pointer' color='#111' />,
      href: '/marketplace/profile/',
      tokenRequired: true
    },
    {
      label: 'Настройки',
      icon: <SettingOutlined className='w-full justify-center text-2xl cursor-pointer' color='#111' />,
      href: '/marketplace/profile/settings/',
      tokenRequired: true
    }
  ];
  return (
    <div className={s.container}>
      <div className='flex flex-col gap-14 md:gap-2 items-center'>
        <Link href={'/'} className='text-2xl md:hidden hover:opacity-70 transition-opacity'>
          Webi
        </Link>

        <div className='flex flex-col md:flex-row gap-10 items-center text-[#6C7AA0]'>
          {navigationMenu.map(({label, icon, href, tokenRequired}, i) =>
            tokenRequired && !token ? null : (
              <Link
                href={href}
                className={`${pathname == href && 'text-[#6F4FF2]'}  hover:text-[#6F4FF2] transition-[all] ${
                  i == 3 && 'sm:hidden'
                }`}
                key={href}
              >
                {icon}
                <p className='hidden md:flex'>{label}</p>
              </Link>
            )
          )}
        </div>
      </div>
      {token ? (
        <Link
          href={'/marketplace/auth'}
          className='hover:text-[#6F4FF2] transition-[all] text-[#6C7AA0] md:hidden'
          onClick={() => {
            deleteCookie('token');
            deleteCookie('refreshToken');
            deleteCookie('username');
          }}
        >
          <ImportOutlined className='text-2xl cursor-pointer' color='#111' />
        </Link>
      ) : null}
    </div>
  );
};
