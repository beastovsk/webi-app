'use client';

import Btn from '@/components/UI/Btn/Btn';
import {AppstoreOutlined, DesktopOutlined, ImportOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Form, Input} from 'antd';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import React, {FC} from 'react';
import s from './Navigation.module.scss';

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  const pathname = usePathname();

  const navigationMenu = [
    {
      icon: <AppstoreOutlined className='text-2xl cursor-pointer' color='#111' />,
      href: '/marketplace'
    },
    {
      icon: <DesktopOutlined className='text-2xl cursor-pointer' color='#111' />,
      href: '/marketplace/products'
    },
    {
      icon: <UserOutlined className='text-2xl cursor-pointer' color='#111' />,
      href: '/marketplace/profile'
    },
    {
      icon: <SettingOutlined className='text-2xl cursor-pointer' color='#111' />,
      href: '/marketplace/profile/settings'
    }
  ];
  return (
    <div className={s.container}>
      <div className='flex flex-col gap-14 md:gap-2 items-center'>
        <Link href={'/'} className='text-2xl md:hidden hover:opacity-70 transition-opacity'>
          Webi
        </Link>

        <div className='flex flex-col md:flex-row gap-10 items-center text-[#6C7AA0]'>
          {navigationMenu.map(({icon, href}) => (
            <Link
              href={href}
              className={`${pathname == href && 'text-[#6F4FF2]'} hover:text-[#6F4FF2] transition-[all]`}
              key={href}
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
      <Link href={'/marketplace/auth'} className='hover:text-[#6F4FF2] transition-[all] text-[#6C7AA0] md:hidden'>
        <ImportOutlined className='text-2xl cursor-pointer' color='#111' />
      </Link>
    </div>
  );
};
